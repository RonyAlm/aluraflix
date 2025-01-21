import styles from './form.module.css'

function FormGroup({ title, placeholder, label, width, value, handleChange }) {
    return (
        <div className={styles.formGroup} style={{ width }}>
            <label htmlFor={label}>{title}</label>
            <input type="text" value={value} name={label} placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}

export default FormGroup

