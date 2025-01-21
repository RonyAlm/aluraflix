import { useState } from 'react';
import Form from '../../components/Form'
import useDataVideos from '../../hook/useData';
import styles from './newVideo.module.css'
import { useNavigate } from 'react-router';

function NewVideo() {
    const { saveVideo, error } = useDataVideos();
    const [successMessage, setSuccessMessage] = useState("");

    const { navigate } = useNavigate();

    const addVideos = async (video) => {
        setSuccessMessage(""); 
        try {
            await saveVideo(video);
            setSuccessMessage("¡El video se guardó correctamente!");
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (err) {
            console.error("Error al guardar el video:", err);
        }
    };

    return (
        <main className={styles.container}>
            <h2 className={styles.title}>Nuevo Video</h2>
            <h3 className={styles.subtitle}>
                Complete el formulario para crear una nueva tarjeta de video
            </h3>
            {error && <p className={styles.error}>Error: {error}</p>}
            <Form addVideos={addVideos} />
            {successMessage && <p className={styles.success}>{successMessage}</p>}
        </main>
    )
}

export default NewVideo

