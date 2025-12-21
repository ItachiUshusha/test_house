import styles from './Select.module.css'

type Option = {
    label: string;
    value: string;
}

type SelectProps = {
    label?: string;
    options: Option[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({label, options, ...props}: SelectProps) => {
    return(
        <div className={styles.container}>
            {label && <label>{label}</label>}
            <select className={styles.select} {...props}>
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select