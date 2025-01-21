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

    const handleSubmit = (e) => {
        e.preventDefault();

        addVideos(
            {
                title,
                categoryId : Number(category),
                urlImage,
                urlVideo,
                description
            }
        );

    }
    
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
            <button type="submit" className={styles.formButton}>Crear video</button>
        </form>
    )
}

export default Form