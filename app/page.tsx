import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>EZAlgo</span>
        </h1>
        
        <p className={styles.description}>
          Your premier destination for algorithm learning and practice
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>🚀 Learn Algorithms</h3>
            <p>Master data structures and algorithms with interactive lessons</p>
          </div>
          
          <div className={styles.feature}>
            <h3>💻 Practice Coding</h3>
            <p>Solve problems and improve your programming skills</p>
          </div>
          
          <div className={styles.feature}>
            <h3>📊 Track Progress</h3>
            <p>Monitor your learning journey with detailed analytics</p>
          </div>
        </div>

        <div className={styles.cta}>
          <button className={styles.button}>Get Started</button>
          <button className={styles.buttonSecondary}>Learn More</button>
        </div>
      </div>
    </main>
  )
} 