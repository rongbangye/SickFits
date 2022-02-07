import { gql } from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }

      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    // we refectch the current user query, so the page will update immediately after logged in
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signin();
    console.log(res);
    resetForm();
    // send the email and password to the graphQL API
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;
  return (
    // put method = POST, when you type password, it won't put it in the URL
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Sign Into Your Account</h2>
      <Error error={error} />
      <fieldset>
        <label htmlFor='email'>
          email
          <input
            type='email'
            name='email'
            placeholder='Your Email Address'
            autoComplete='email'
            // value
            value={inputs.email}
            // onchange
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          password
          <input
            type='password'
            name='password'
            placeholder='password'
            autoComplete='password'
            // value
            value={inputs.password}
            // onchange
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Sign In!</button>
      </fieldset>
    </Form>
  );
}
