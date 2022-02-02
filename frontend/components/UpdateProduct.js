import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import useForm from '../lib/useForm';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

// passing the id from the update page that get it from the url query
export default function UpdateProduct({ id }) {
  // 1. We need to get the existing product
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });
  // if (loading) return <p>Loading...</p>;

  // 2. We need to get the mutation to update the product
  // rename mutation data name, otherwise it will confuse with the query when we use query and mutation in the same time
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  //2.5 create some state fore the form inputs:
  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);
  // console.log(inputs);

  // 3. We need the form to handle the updates (similar to create form)
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // Submit the inputfields to the backend:
        // TODO: handle submit:
        const res = await updateProduct({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        }).catch(console.error);
        console.log(res);
        // clearForm();
        // // Go to the Product's page
        // Router.push({
        //   pathname: `/product/${res.data.createProduct.id}`,
        // });
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor='name'>
          Name
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='price'>
          price
          <input
            type='number'
            id='price'
            name='price'
            placeholder='price'
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='description'>
          Description
          <textarea
            type='number'
            id='description'
            name='description'
            placeholder='description'
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        {/* <button type='button' onClick={clearForm}>
        Clear Form
      </button>
      <button type='button' onClick={resetForm}>
        Reset Form
      </button> */}
      </fieldset>
      <button type='submit'>Update Product</button>
    </Form>
  );
}
