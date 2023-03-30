import Head from 'next/head';
import styles from '../styles/Home.module.css';
import img from '../public/sgrada_1.svg'

export default function Home() {
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
                        <h3>Покана за свикване на ОС на СС</h3>
                        <p>Приложение 6</p>
                        <span>Виж документ &#8594;</span>
                    </a>

                    <a href="/posts/second-post" className={styles.card}>
                        <h3>Покана за свикване на ОС учредване на СС</h3>
                        <p>Приложение 1</p>
                        <span>Виж документ &#8594;</span>
                    </a>

                    <a href="/posts/third-post" className={styles.card}>
                        <h3>Протокол от ОС за учредяване на СС 28.02.2023</h3>
                        <p>Приложение 3</p>
                        <span>Виж документ &#8594;</span>
                    </a>

                    <a href="/posts/forth-post" className={styles.card}>
                        <h3> Споразумение за създаване на СС 28.02.2023</h3>
                        <p>Приложение 4</p>
                        <span>Виж документ &#8594;</span>
                    </a>

                    <a href="/posts/fifth-post" className={styles.card}>
                        <h3>Таблица за определяне на ОЧС 28.02.2023</h3>
                        <p>Таблица</p>
                        <span>Виж документ &#8594;</span>
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
