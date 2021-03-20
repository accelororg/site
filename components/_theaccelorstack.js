import styles from '../styles/Home.module.css'
function Stack() {
    return (
        <div style={{marginTop:"2rem", width:"100%"}}>  
            <h2>Technology we use</h2>
            <div className={styles.stack}>
                <img src="/home/stack/nextjs.svg" alt="NextJS Logo"/>
                <img src="/home/stack/nodejs.svg" alt="NodeJS Logo"/>
                <img src="/home/stack/do.svg" alt="DigitalOcean Logo"/>
                <img src="/home/stack/algolia.svg" alt="Algolia Logo"/>
                <img src="/home/stack/strapi.svg" alt="Strapi Logo"/>
            </div>
        </div>
    )
}
  
export default Stack
  