import Link from 'next/link';
import React from 'react';
import Login from './auth/Login';
import Logged from './auth/Logged';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className='flex justify-between items-center py-8'>
      <Link href='/'>
        <h1 className='font-bold text-lg'>POST IT.</h1>
      </Link>
      <ul className='flex items-center gap-6'>
        {!session?.user ? (
          <Login />
        ) : (
          <Logged image={session.user.image || ''} />
        )}
      </ul>
    </nav>
  );
};

export default Nav;
