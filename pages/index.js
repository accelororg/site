import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Stack from '../components/_theaccelorstack'
import Footer from '../components/_footer'  

export default function Home() {
  
  return (
    <div className={styles.backgroundwrapper} style={{backgroundImage: `url('/home/homeback-feb2021-1.jpg')`, minHeight: "100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundAttachment:"fixed"}}>
       <div className="container">
      <Head>
        <title>Accelor</title>
        <link rel="stylesheet" href="https://cross-site.acceloredge.com/css/crosssite.css" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          The Web Speed Experts
        </h1>
        
        <h2>We're the humans that build Live@Space™ and other secret projects.</h2>
        <div className={styles.grid}>
          <a href="https://liveatspace.com/" target="_blank" className={styles.card}>
            <h3>Live@Space™</h3>
            <p>A live space launch and space activity tracker.</p>
          </a>
          <a className={styles.card} target="_blank" style={{cursor:"not-allowed"}}>
            <h3>AccelorEdge™ &rarr;</h3>
            <p>A revolutionary new MultiCDN service.</p>
          </a>
          <a href="mailto:us@accelor.io" className={styles.card}>
            <h3>Got an Idea? &rarr;</h3>
            <p>Shoot us an email and we'll check it out.</p>
          </a>
        </div>
        <Stack />
      </main>
      <Footer />
      </div>
      
    </div>
   
  )
}
