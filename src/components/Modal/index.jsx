import styles from "./Modal.module.css";
import FormGroup from "../Form/FormGroup";
import FormGroupSelect from "../Form/FormGroupSelect";
import FormGroupDescription from "../Form/FormGroupDescription";
import useDataVideos from "../../hook/useData";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

function ModalEdit({ closeModal, updateVideo }) {

    const ref = useRef();
    const { categories } = useDataVideos();
    const { selectedVideo, openModal } = useGlobalContext();


    const [title, setTitle] = useState(selectedVideo.title);
    const [category, setCategory] = useState(selectedVideo.categoryId);
    const [urlImage, setImage] = useState(selectedVideo.urlImage);
    const [urlVideo, setVideo] = useState(selectedVideo.urlVideo);
    const [description, setDescription] = useState(selectedVideo.description);

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            if (ref.current?.open) {
                ref.current?.close();
            }
        }
    }, [openModal]);

    const reset = () => {
        setTitle('');
        setCategory('');
        setImage('');
        setVideo('');
        setDescription('');
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        updateVideo({
            id: selectedVideo.id,
            title,
            categoryId: Number(category),
            urlImage,
            urlVideo,
            description
        });

        closeModal();
    };

    return (
        <dialog className={styles.dialog} ref={ref}>
            <div className={styles.dialogContent}>
                <button className={styles.dialogClose} onClick={closeModal}>
                    <IoCloseOutline />
                </button>
                <h2 className={styles.dialogTitle}>Editar Card</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <FormGroup
                        title="Título" placeholder="Título"
                        value={title} width="100%"
                        handleChange={(e) => setTitle(e.target.value)} />
                    <FormGroupSelect
                        title="Categoría"
                        label="category"
                        placeholder="Selecciona Categoría"
                        value={category}
                        width="100%"
                        options={categories}
                        handleChange={(e) => setCategory(e.target.value)}
                    />
                    <FormGroup
                        title="Imagen" placeholder="URL de la Imagen"
                        value={urlImage} width="100%"
                        handleChange={(e) => setImage(e.target.value)} />
                    <FormGroup
                        title="Video" placeholder="URL del Video"
                        value={urlVideo} width="100%"
                        handleChange={(e) => setVideo(e.target.value)} />
                    <FormGroupDescription
                        title="Descripción"
                        placeholder="Descripción"
                        value={description}
                        width="100%"
                        handleChange={(e) => setDescription(e.target.value)}
                    />
                    <div className={styles.formButtons}>
                        <button type="submit" className={styles.formButton}>Guardar</button>
                        <button type="reset" className={styles.formButtonReset} onClick={reset}>Limpiar</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
}

export default ModalEdit;
