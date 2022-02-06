import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import gql from 'graphql-tag';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  /**
   * 1. Render the actual links
   * 2. Allow for dynamic routing
   * 3. Filter the products for the current page
   * 4. Deal with Cache invalidation
   *
   * Query String Routing
   * localhost:7777/products?page=2
   *
   * File Based
   * localhost:7777/products/2
   */
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'loading...';
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits - Page {page} of ___</title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link>
    </PaginationStyles>
  );
}
