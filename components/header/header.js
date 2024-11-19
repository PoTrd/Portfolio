import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logo} src="/logo_v0.png" alt="logo" />
            </div>
            <div className={styles.startMenu}>
                <span>
                    About
                </span>
                <span>
                    Portfolio
                </span>
            </div>
            <div className={styles.blocContact}>
                <span>
                    Contact me
                </span>
                <img className={styles.arrow} src="/white_arrow.png" alt="arrow-top"/>
            </div>

        </header>
    );
}
