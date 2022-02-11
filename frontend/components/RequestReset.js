import { gql } from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

// genernally when you request a password resest, backend will gernerate a random token, you will emailed a link with that token of URL. And then when you try to reset the password, you pass your email address, new password, and token
// It will looks like this:
// {
//   itemId: '61ce3007aa184eba52155411',
//   identity: 'rongbang.ye@gmail.com',
//   token: 'jAczJ1IfozqA7vELlQHL'
// }
// Keystone has all the flow of that but doesn't send email
export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    }
  );
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    console.log(data, loading, error);
    resetForm();
    // send the email and password to the graphQL API
  }

  return (
    // put method = POST, when you type password, it won't put it in the URL
    <Form method='POST' onSubmit={handleSubmit}>
      <h2>Request a Password Reset</h2>
      <Error error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          // mutation sendUserPasswordResetLink does not return code https://github.com/keystonejs/keystone/issues/4952
          <p>If the account exists you’ll get an email!</p>
        )}

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

        <button type='submit'>Request Reset</button>
      </fieldset>
    </Form>
  );
}
