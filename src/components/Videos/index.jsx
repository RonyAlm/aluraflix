
import VideoItem from '../VideoItem';
import styles from './videos.module.css'
function Videos({category}) {
   
    const videos = [
        {id: 1, title: "Titulo del video 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"},
        {id: 2, title: "Titulo del video 2", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"},
        {id: 3, title: "Titulo del video 3", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"},
        {id: 4, title: "Titulo del video 4", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"},
        {id: 5, title: "Titulo del video 5", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"},
        {id: 6, title: "Titulo del video 6", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"},
        {id: 7, title: "Titulo del video 7", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"},
    ]   

    return (
        <article className={styles.videos}>
            <h2 className={styles.videosCategory}>{category}</h2>
            <div className={styles.listVideos}>
              {videos.map((video) => <VideoItem key={video.id} video={video} />)}
            </div>
        </article>
    )
}

export default Videos;