'use client'

import styles from "./Carousel.module.css"  

type Props = {
    children: React.ReactNode
}

const Carousel = ({children}: Props) =>{
    return(
        <div className={styles.carousel}>
            <div className={styles.track}>
                {children}
            </div>
        </div>
    )
}

export default Carousel