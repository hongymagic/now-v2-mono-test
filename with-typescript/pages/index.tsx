import Link from 'next/link';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';

export default () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Paragraph>Are we there yet? 🤔</Paragraph>
    <p><Link href='/about'><a>About</a></Link></p>
  </Layout>
);
