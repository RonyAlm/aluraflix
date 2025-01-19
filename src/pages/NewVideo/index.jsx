import styles from './newVideo.module.css'

function NewVideo() {
    return (
        <main className={styles.container}>
            <h2 className={styles.title}>Nuevo video</h2>
            <h3 className={styles.subtitle}>Complete el formulario para crear una nueva tarjeta de video</h3>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" id="title" placeholder="Título del video" />
                </div>
                <div className={styles.formGroupSelect}>
                    <label htmlFor="category">Categoria</label>
                    <select name="category" className={styles.select}>
                        <option value="" disabled selected>Seleccione una categoría</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Database">Database</option>
                        <option value="DevOps">DevOps</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="image">Imagen</label>
                    <input type="text" name="image" id="image" placeholder="URL de la imagen" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="video">Video</label>
                    <input type="text" name="video" id="video" placeholder="URL del video" />
                </div>
                <div className={styles.formGroupDescription}>
                    <label htmlFor="description">Descripción</label>
                    <textarea name="description" id="description" placeholder="Descripción del video"></textarea>
                </div>
                <button type="submit" className={styles.formButton}>Crear video</button>
            </form>
        </main>
    )
}

export default NewVideo