import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I’m an aspiring IT professional who enjoys learning new things, spending time with family and friends, listening to music that relates to me, and watching movies that inspire me. I also enjoy exploring new things and enhancing my skills. I love savory and delicious food that I can enjoy and share with others. In five years, I see myself having a successful career, continuing to grow my skills, and becoming the best version of myself.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}