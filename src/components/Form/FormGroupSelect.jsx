import styles from './form.module.css'
function FormGroupSelect({ title, label, placeholder, options }) {
    return (
        <div className={styles.formGroupSelect}>
            <label htmlFor={label}>{title}</label>
            <select name={label} className={styles.select}>
                <option value="" disabled selected>{placeholder}</option>
                {options && options.map((option) => 
                       <option key={option.value} value={option.value}>{option.title}</option>)
                }
                {/* <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
                <option value="DevOps">DevOps</option> */}
            </select>
        </div>
    )
}

export default FormGroupSelect