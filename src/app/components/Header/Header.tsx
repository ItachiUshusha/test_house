'use client'

import { useState } from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Dropdown from '@/app/components/ui/Dropdown/Dropdown'
import Button from '@/app/components/ui/Button/Button'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <header className={styles.header}>
            <div className={styles.container_top}>
                <div className={styles.container}>
                    <div className={styles.accessibility}>
                        <Image src="/icons/eyes.svg" alt="Очки" width={26} height={26}/>
                        <span>Версия для слабовидящих</span>
                    </div>

                    <div className={styles.max}>
                        <Image src="/icons/max.svg" alt="Очки" width={26} height={26}/>
                        <span>Канал - MAX</span>
                    </div>
                </div>
            </div>

                {menuOpen && (
                    <div className={styles.overlay} onClick={() => setMenuOpen(false)}>
                        <div
                            className={styles.mobileMenu}
                            onClick={(e) => e.stopPropagation()}
                            >
                            <button
                                className={styles.close}
                                onClick={() => setMenuOpen(false)}
                                aria-label="Закрыть меню"
                            >
                                ✕
                            </button>

                            <nav className={styles.mobileNav}>
                                <a href="#">О клинике</a>
                                <a href="#">Команда</a>
                                <a href="#">Цены</a>
                                <a href="#">Результаты работ</a>
                                <a href="#">Акции</a>
                                <a href="#">Контакты</a>

                                <Button src="/icons/message.svg">
                                Записаться
                                </Button>
                            </nav>
                        </div>
                    </div>
                    )}
            <div className={styles.container_main}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.logo}>
                            <Image 
                                src="/logo.png" 
                                alt="Логотип"
                                width={260}
                                height={42}
                                className={styles.full}
                                priority
                                />

                            <Image
                                src="/logo-mini.png"
                                alt="Логотип"
                                width={154}
                                height={40}
                                className={styles.icon}
                            />
                        </div>

                        <div className={styles.services}>
                            <Dropdown
                                label='Услуги'
                                items={[
                                    {label: "Терапия", href: '#'},
                                    {label: "Хирургия", href: '#'},
                                    {label: "Имплантация", href: '#'},
                                ]}
                            />
                        </div>
                        <nav className={styles.nav}>
                            <Dropdown 
                                label='О клинике'
                                items={[
                                    {label: "Терапия", href: '#'},
                                    {label: "Хирургия", href: '#'},
                                    {label: "Имплантация", href: '#'},
                                ]}
                            />
                            <a href="#">Команда</a>
                            <a href="#">Цены</a>
                            <a href="#">Результаты работ</a>
                            <a href="#">Акции</a>
                            <a href="#">Контакты</a>
                        </nav>
                    </div>
                    <button
                            className={styles.burger}
                            onClick={() => setMenuOpen(true)}
                            aria-label="Открыть меню"
                        >
                            <span />
                            <span />
                            <span />
                    </button>
                    <div className={styles.right}>
                        <div className={styles.phone}>+7(423)265-89-50</div>
                        <Image 
                            src="/icons/stick.svg"
                            alt="|"
                            width={1}
                            height={9}
                            className={styles.stick}
                        />
                        <Image
                            src="/icons/search.svg" 
                            alt="Поиск"
                            width={20}
                            height={20}/> 
                        <Button src="/icons/message.svg">Записаться</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header