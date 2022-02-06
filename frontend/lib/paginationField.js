import { PAGINATION_QUERY } from '../components/Pagination';

// 4. Deal with Cache invalidation
export default function paginationField() {
  return {
    keyArgs: false, // it tells Apollo we will take care of everything
    read(existing = [], { args, cache }) {
      console.log({ existing, args, cache });
      const { skip, first } = args;

      // Read the number of itmes on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      console.log(count);
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);

      // Issue: when we don't have enough of items fill the last page, it will have error. Solution:
      // If
      // If there are items
      // AND there aren't enough items satify how many were requested
      // AND we are on the last page
      // Then just Send it
      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // we don't have any items, we must go to the network to fetch them
        return false;
      }

      // if there are items, just return them from the cache, and we don't need to go to the network
      if (items.length) {
        console.log(
          `There are ${items.length} items in the cache! Gonna send them to Apollo`
        );
        return items;
      }
      // First thing it does it asks the read function for those items.
      // We can either do one of two things:
      // First things we can do is return the items because they are already in the cache
      // The other thing we can do is to return false from here, (network request)
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // This runs when the Apollo client comes back from the network with our product
      console.log(`Merging items from the network ${incoming.length}`);
      // console.log(incoming);
      // merged.push(incoming); - we can't just add the incoming to the merged just like this, edage cases if user just go the page 3 and page 1 and 2 products will not cache
      // Solution:
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      console.log(merged);
      // findally we return the merged items from the cache
      return merged;
    },
  };
}
