import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  // payload is what get return from the update of the mutation
  // we are goin to take that payload which is the id that we get after the mutation and take that a way from the cache
  console.log(payload.data.deleteProduct);
  console.log('running the update function after delete');
  // evict is a function from apollo that we use to update the cache after we delete a product. because when we delete a product, the react page doesn't update it yet until we refresh the page and then the product will be removed from the page - evict is the solution for this.
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update,
  });

  return (
    <button
      type='button'
      disabled={loading}
      onClick={() => {
        if (confirm('Are you sure you want to delete this item?')) {
          // go ahead and delete it
          console.log('Delete');
          deleteProduct().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
