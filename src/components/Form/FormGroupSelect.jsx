import styles from './form.module.css'
function FormGroupSelect({ title, label, placeholder, width, options, value, handleChange }) {
    return (
        <div className={styles.formGroupSelect}  style={{ width }}>
            <label htmlFor={label}>{title}</label>
            <select name={label} className={styles.select} value={value} onChange={handleChange}>
                <option defaultValue={""} disabled>{placeholder}</option>
                {options && options.map((option) =>
                    <option key={option.id} value={option.id}>{option.name}</option>)
                }
            </select>
        </div>
    )
}

export default FormGroupSelect