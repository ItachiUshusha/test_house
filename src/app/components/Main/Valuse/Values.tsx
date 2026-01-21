'use client'
import styles from './Values.module.css'

const Values = () => {
    
    return(
        <main>
            <h1 className={styles.h_values}>Наши ценности</h1>
            <div className={styles.cards}>
                <span className={styles.card}>
                    <p>01</p>
                    <div className={styles.container_text}>
                        <div className={styles.h_cards}>Стандарты сервиса</div>
                        <div className={styles.cards_text}>Каждый пациент достоин особого отношения к нему, 
                            вправе расчитывать на лечение у лучших докторов
                             с применением новейших технологий и передовых методик</div>
                    </div>
                    <img src="./cards/diamond.svg" alt="" />
                </span>
                <span className={styles.card}>
                    <p>03</p>
                    <div className={styles.container_text}>
                        <div className={styles.h_cards}>Современные технологии</div>
                        <div className={styles.cards_text}>Каждый пациент достоин особого отношения к нему, 
                            вправе расчитывать на лечение у лучших докторов
                            с применением новейших технологий и передовых методик</div>
                    </div>
                    <img src="./cards/teeth.svg" alt="" />
                </span>
                <span className={styles.card}>
                    <p>02</p>
                    <div className={styles.container_text}>
                        <div className={styles.h_cards}>Квалифицированные доктора</div>
                        <div className={styles.cards_text}>Каждый пациент достоин особого отношения к нему, 
                            вправе расчитывать на лечение у лучших докторов
                            с применением новейших технологий и передовых методик</div>
                    </div>
                    <img src="./cards/microscop.svg" alt="" />
                </span>
                <span className={styles.card}>
                    <p>04</p>
                    <div className={styles.container_text}>
                        <div className={styles.h_cards}>Забота о детях</div>
                        <div className={styles.cards_text}>Каждый пациент достоин особого отношения к нему, 
                            вправе расчитывать на лечение у лучших докторов
                            с применением новейших технологий и передовых методик</div>
                    </div>
                    <img src="./cards/teddyBear.svg" alt="" />
                </span>
            </div>
        </main>
    )
}

export default Values