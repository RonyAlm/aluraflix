import styles from './form.module.css'

function FormGroup({ title, placeholder, label }) {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={label}>{title}</label>
            <input type="text" name={label} placeholder={placeholder} />
        </div>
    )
}

export default FormGroup

