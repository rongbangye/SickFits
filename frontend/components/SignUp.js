import { gql } from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
// import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    // Signup do not need to refecth user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    console.log(data, loading, error);
    resetForm();
    // send the email and password to the graphQL API
  }
  // const error =
  //   data?.authenticateUserWithPassword.__typename ===
  //   'UserAuthenticationWithPasswordFailure'
  //     ? data?.authenticateUserWithPassword
  //     : undefined;
  return (
    // put method = POST, when you type password, it won't put it in the URL
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Sign Up Your Account</h2>
      <Error error={error} />
      <fieldset>
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email} - Please go ahead to sign in!
          </p>
        )}
        <label htmlFor='name'>
          Your name
          <input
            type='name'
            name='name'
            placeholder='Your name'
            autoComplete='name'
            // value
            value={inputs.name}
            // onchange
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email'>
          Email
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
          Password
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
        <button type='submit'>Sign Up!</button>
      </fieldset>
    </Form>
  );
}
