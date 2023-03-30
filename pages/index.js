import Head from 'next/head';
import styles from '../styles/Home.module.css';
import img from '../public/sgrada_1.svg'

export default function Home() {
    console.log(img)
    return (
        <div className={styles.container}>
            
            <Head>
                <title>Blok Hemus Docs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className='logo-wrapper'>
                    <div className='logo' style={{backgroundImage: `url(${img.src})`}}></div>
                </div>
                <h1 className={styles.title}>
                    Блок <span className='hemus-title' >Хемус</span> <br></br> Документи
                </h1>

                <p className={styles.description}>
                </p>

                <div className={styles.grid}>
                    <a href="/posts/first-post" className={styles.card}>
                        <h3>Документ 1</h3>
                        <p>Някакво описание</p>
                    </a>

                    <a href="/posts/first-post" className={styles.card}>
                        <h3>Документ 2</h3>
                        <p>Някакво описание</p>
                    </a>

                    <a href="/posts/first-post" className={styles.card}>
                        <h3>Документ 3</h3>
                        <p>Някакво описание</p>
                    </a>

                    <a href="/posts/first-post" className={styles.card}>
                        <h3>Документ 4</h3>
                        <p>Някакво описание</p>
                    </a>

                </div>
            </main>

            <footer>
                <a
                    href="https://github.com/justteshi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by @Teshi
                </a>
            </footer>
        </div>
    )
}
