'use client';

import { useState } from 'react';
import styles from './Dropdown.module.css';

type Item = {
    label: string;
    href: string;
}

type DropdownProps = {
    label: string;
    items: Item[];
}

const Dropdown = ({label, items}:DropdownProps) =>{
    const [open, setOpen] = useState(false)
    return(
        <div className={styles.dropdown}>
            <button
                type='button' 
                className={styles.trigger}
                onClick={() => setOpen(prev => !prev)}
                >
                {label}
                <img src="/icons/arrow.svg" alt="" className={`${styles.icon} ${open ? styles.open : ''}`}/>
            </button>

        {<ul className={`${styles.menu} ${open ? styles.list_open : ''}`}>
            {items.map(item => (
                <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>}
        </div>
    )
}

export default Dropdown