'use client';
import { signIn, signOut } from 'next-auth/react';
import { useCallback } from 'react';

const SignInPage = () => {
  const handleClick = () => {
    signIn('google');
  };

  const handleClickOut = useCallback(() => {
    signOut();
  }, []);

  return (
    <div>
      hello
      <button onClick={handleClick}>Sign In</button>
      <button onClick={handleClickOut}>Sign out</button>
    </div>
  );
};

export default SignInPage;
