import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import styles from './videoItem.module.css'
import { useContext } from 'react';
import { GlobalContext, useGlobalContext } from '../../context/GlobalContext';

function VideoItem({ video, handleDelete }) {

    const { openModal } = useGlobalContext();

    const { id, title, urlVideo, description, urlImage, categoryId } = video

    return (
        <div className={styles.video} key={id}>
            <iframe 
                src={urlVideo} 
                title={title} frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
            <div className={styles.videoInfo}>
                <h3>{title}</h3>
                <footer className={styles.videoFooter}>
                    <button className={styles.delete} 
                        onClick={() => handleDelete(id)}>
                        <AiOutlineDelete />
                        Eliminar
                    </button>
                    <button className={styles.edit} 
                        onClick={() => openModal(video)}>
                        <FiEdit />
                        Editar
                    </button>
                </footer>
            </div>
            
        </div>
    )
}

export default VideoItem