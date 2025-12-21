'use client'

import styles from './Button.module.css'

type ButtonVariant = 'text' | 'icon' | 'noBack'

type ButtonProps = {
    variant?: ButtonVariant;
    children: React.ReactNode;
    src?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({variant = 'icon', children, src, ...props}: ButtonProps) =>{
    return(
        <button className={`
            ${styles.button}
            ${styles[variant]}
            `}
            {...props}
        >
            <img src={src} alt="" />
            {children}
        </button>
    )
}

export default Button