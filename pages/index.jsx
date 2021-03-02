
import Head from '../src/Infra/Head';
import Header from '../src/Infra/Header';
import Main from '../src/Infra/Main';
import Footer from '../src/Infra/Footer';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head title={'Jungle Devs - React Challenge'}/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}
