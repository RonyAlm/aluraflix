
import styles from './form.module.css'
function FormGroupDescription({ title, placeholder, label, width, value, handleChange }) {
    return (
        <div className={styles.formGroupDescription} style={{ width }}>
            <label htmlFor={label}>{title}</label>
            <textarea value={value} name={label} placeholder={placeholder} onChange={handleChange}></textarea>
        </div>
    )
}

export default FormGroupDescription