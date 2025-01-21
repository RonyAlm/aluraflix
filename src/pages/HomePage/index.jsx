

import { useContext, useEffect } from 'react';
import Banner from '../../components/Banner'
import ModalEdit from '../../components/Modal/index.jsx';
import Videos from '../../components/Videos'
import useDataVideos from '../../hook/useData.js';
import styles from './home.module.css'
import {useGlobalContext } from '../../context/GlobalContext.jsx';
import { use } from 'react';

function Home() {

    const { modal, closeModal } = useGlobalContext();

    const { categories, editVideo } = useDataVideos();

    const updateVideo = async (video) => {
        try {
            await editVideo(video.id, video);
        } catch (err) {
            console.error("Error al guardar el video:", err);
        }
    };

    return (
        <>
            <main className={styles.container}>
                <Banner />
                <section className={styles.videosContainer}>
                    {
                        categories.map((category) => <Videos key={category.id} category={category} />)
                    }
                </section>
            </main>
            {modal && <ModalEdit closeModal={closeModal} updateVideo={updateVideo} />}
        </>

    )
}

export default Home;