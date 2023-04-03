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
                <h1 className="section-title" >Обяви</h1>
                <div className={styles.grid}>
                    <a href="/posts/first-post" className={styles.card}>
                        <h3>Покана за свикване на ОС</h3>
                        <p>Документ</p>
                        <span>Виж документ &#8594;</span>
                    </a>

                    <a href="/posts/second-post" className={styles.card}>
                        <h3>Покана за учредване на СС</h3>
                        <p>Документ</p>
                        <span>Виж документ &#8594;</span>
                    </a>

                </div>
                

                <h1 className="section-title">Учредителни документи</h1>
                <div className={styles.grid}>
                    <a href="/posts/third-post" className={styles.card}>
                        <h3>Протокол от ОС за учредяване на СС 28.02.2023</h3>
                        <p>Документ</p>
                        <span>Виж документ &#8594;</span>
                    </a>

                    <a href="/posts/forth-post" className={styles.card}>
                        <h3> Споразумение за създаване на СС 28.02.2023</h3>
                        <p>Документ</p>
                        <span>Виж документ &#8594;</span>
                    </a>

                    <a href="/posts/fifth-post" className={styles.card}>
                        <h3>Списък на собствениците</h3>
                        <p>Документ</p>
                        <span>Виж документ &#8594;</span>
                    </a>

                    <a href="/posts/sixth-post" className={styles.card}>
                        <h3>Удостоверение за регистрация</h3>
                        <p>Документ</p>
                        <span>Виж документ &#8594;</span>
                    </a>

                    <a href="https://reports.bulstat.bg/bulstat-ireports/frameset?__report=https%3A%2F%2Freports.bulstat.bg%2Fbulstat-ireports%2Fv_rpt1.rptdesign&__format=html&report_description=&report_title=%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B0+%D0%B7%D0%B0+%D1%81%D1%83%D0%B1%D0%B5%D0%BA%D1%82+%D0%BD%D0%B0+%D0%91%D0%A3%D0%9B%D0%A1%D0%A2%D0%90%D0%A2&uic=180920289&__overwrite=true&__locale=bg&__svg=true&__designer=false"
                        className={styles.card}>
                        <h3>Регистрация в Регистър</h3>
                        <span>Виж линк &#8594;</span>
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
