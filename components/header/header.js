import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logo} src="/logo_v0.png" alt="logo" />
            </div>
            <div className={styles.startMenu}>
                <a>
                    About
                </a>
                <a>
                    Portfolio
                </a>
            </div>
            <div className={styles.blocContact}>
                <a>
                    Contact me
                    <img className={styles.arrow} src="/white_arrow.png" alt="arrow-top"/>
                </a>
            </div>

        </header>
    );
}
