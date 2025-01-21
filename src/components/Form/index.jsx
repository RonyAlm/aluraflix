import styles from './form.module.css'
import FormGroup from './FormGroup'
import FormGroupSelect from './FormGroupSelect'
import useDataVideos from '../../hook/useData.js';
import { useState } from 'react';
import FormGroupDescription from './FormGroupDescription.jsx';


function Form({ addVideos }) {
    const { categories } = useDataVideos();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [urlImage, setImage] = useState('');
    const [urlVideo, setVideo] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState({
        error: false,
        message: ''
    });

    const validateForm = () => {
        if (!title || !category || !urlImage || !urlVideo || !description) {
            setError({
                error: true,
                message: '* Todos los campos son obligatorios'
            });
            return false;
        } else {
            setError({
                error: false,
                message: ''
            });
            return true;
        }
    }

    const reset = () => {
        setTitle('');
        setCategory('');
        setImage('');
        setVideo('');
        setDescription('');
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        addVideos(
            {
                title,
                categoryId: Number(category),
                urlImage,
                urlVideo,
                description
            }
        );

    }

    setTimeout(() => {
        if (error.error) {
            setError({
                error: false,
                message: ''
            });
        }
    }, 5000)

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormGroup
                title="Título" placeholder="Título del video" label="title"
                value={title}
                handleChange={(e) => setTitle(e.target.value)}
            />
            <FormGroupSelect
                title="Categoría" placeholder="Seleccione una categoría"
                label="category" options={categories}
                value={category}
                handleChange={(e) => setCategory(e.target.value)}
            />
            <FormGroup
                title="Imagen" placeholder="URL de la imagen" label="image"
                value={urlImage} handleChange={(e) => setImage(e.target.value)}
            />
            <FormGroup
                title="Video" placeholder="URL del video" label="video"
                value={urlVideo} handleChange={(e) => setVideo(e.target.value)}
            />
            <FormGroupDescription title="Descripción" placeholder="Descripción del video"
                label="description"
                value={description}
                handleChange={(e) => setDescription(e.target.value)} />

            <div className={styles.formButtons}>
                <button type="submit" className={styles.formButton}>Crear video</button>
                <button type="reset" className={styles.formButtonReset} onClick={reset}>Limpiar</button>
            </div>

            {error.error && <p className={styles.formError}>{error.message}</p>}
        </form>
    )
}

export default Form