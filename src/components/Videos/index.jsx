
import useDataVideos from '../../hook/useData.js';
import VideoItem from '../VideoItem';
import styles from './videos.module.css'
function Videos({ category }) {

    const { videos, deleteVideo } = useDataVideos();

    const filterVideos = videos.filter((video) => video.categoryId === category.id);

    // funcion para elminar un video
    const handleDelete = (id) => deleteVideo(id);

    return (
        <>
            {
                filterVideos.length > 0 && (
                    <article className={styles.videos}> 
                        <h2 className={styles.videosCategory}>{category.name}</h2>
                        <div className={styles.listVideos}>
                            {filterVideos.map((video) => <VideoItem key={video.id} video={video} handleDelete={handleDelete} />)}
                        </div>
                    </article>
                )
            }
        </>
    )

}

export default Videos;
