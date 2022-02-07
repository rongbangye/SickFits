import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import SignOut from './SignOut';

export default function Nav() {
  // if user log in, we will get the current user info
  const user = useUser();
  return (
    <NavStyles>
      <Link href='/products'>Product</Link>
      {user && (
        <>
          <Link href='/sell'>Sell</Link>
          <Link href='/orders'>Orders</Link>
          <Link href='/account'>Account</Link>
          <SignOut />
        </>
      )}
      {!user && <Link href='/signin'>Sign In</Link>}
    </NavStyles>
  );
}
