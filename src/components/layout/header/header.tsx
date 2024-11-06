'use client'

import style from './header.module.css'

export default function Header() {
    return (
        <header className={style.container}>
            <span className={style.logo}>Logo</span>
            <span className={style.menuButton}>About</span>
            <span className={style.menuButton}>News</span>
            <span className={style.menuButton}>Contact</span>
        </header>
    )
}