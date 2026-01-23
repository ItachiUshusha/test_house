'use client'

import styles from "./Carousel.module.css"  

type Props = {
    children: React.ReactNode
}

const Carousel = ({children}: Props) =>{
    return(
        <div className={styles.carousel}>
            <div className={styles.track}>
                {Array.isArray(children) && 
                children.map((child, index) => (
                    <div key={index} className={styles.slide}>
                        {child}
                    </div>
                ))}
            </div>
            <button> → </button>
        </div>
    )
}

export default Carousel