import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import styles from './videoItem.module.css'

function VideoItem({ video }) {
    const { id, title, videoUrl } = video
    return (
        <div className={styles.video}>
            <video src={videoUrl} controls></video>
            <div className={styles.videoInfo}>
                <h3>{title}</h3>
                <footer className={styles.videoFooter}>
                    <button className={styles.delete}>
                        <AiOutlineDelete />
                        Eliminar
                    </button>
                    <button className={styles.edit}>
                        <FiEdit />
                        Editar
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default VideoItem