import Header from "../component/Header";
import Footer from '../component/Footer';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className={styles['title-homepage']}>Welcome TECHNODEV</h1>
      <Footer />
    </>
  );
}
