import Layout from "../component/Layout";
import styles from "../styles/Home.module.css";
import Head from 'next/head';
export default function Home() {
  return (
    <Layout pageTitle="Home Page" >
          <h1 className={styles['title-homepage']}>Welcome TECHNODEV</h1>
    </Layout>
  );
}
