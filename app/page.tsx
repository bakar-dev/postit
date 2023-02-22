import Image from 'next/image';
import { Inter } from '@next/font/google';
import PostForm from './postForm';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <PostForm />
    </main>
  );
}
