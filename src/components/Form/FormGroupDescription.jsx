
import styles from './form.module.css'
function FormGroupDescription({ title, placeholder, label }) {
    return (
        <div className={styles.formGroupDescription}>
            <label htmlFor={label}>{title}</label>
            <textarea name={label} placeholder={placeholder}></textarea>
        </div>
    )
}

export default FormGroupDescription