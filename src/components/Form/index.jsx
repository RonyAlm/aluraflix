import styles from './form.module.css'
import FormGroup from './FormGroup'
import FormGroupSelect from './FormGroupSelect'
import FormGroupDescription from './FormGroupDescription'

function Form() {

    const categories = [
        { title: 'Frontend', value: 'Frontend' },
        { title: 'Backend', value: 'Backend' },
        { title: 'Database', value: 'Database' },
        { title: 'DevOps', value: 'DevOps' }
    ]

    return (
        <form className={styles.form}>
            <FormGroup title="Título" placeholder="Título del video" label="title" />
            <FormGroupSelect title="Categoría" placeholder="Seleccione una categoría" label="category" options={categories} />
            <FormGroup title="Imagen" placeholder="URL de la imagen" label="image" />
            <FormGroup title="Video" placeholder="URL del video" label="video" />
            <FormGroupDescription title="Descripción" placeholder="Descripción del video" label="description" />
            <button type="submit" className={styles.formButton}>Crear video</button>
        </form>
    )
}

export default Form