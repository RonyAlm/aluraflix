import { useEffect, useState } from "react";

const urlBase = "https://aluraflix-api-oyjx.onrender.com";

function useDataVideos() {
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (endpoint, options = {}) => {
        try {
            const response = await fetch(`${urlBase}/${endpoint}`, options);
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            return await response.json();
        } catch (err) {
            setError(err.message);
            console.error("Fetch error:", err);
            return null;
        }
    };

    // Obtener videos
    useEffect(() => {
        const loadVideos = async () => {
            setLoading(true);
            const data = await fetchData("videos");
            if (data) setVideos(data);
            setLoading(false);
        };
        loadVideos();
    }, [videos]);

    // Obtener categorías
    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchData("categories");
            if (data) setCategories(data);
        };
        loadCategories();
    }, []);

    // Guardar nuevos videos manualmente
    const saveVideo = async (newVideo) => {
        const savedVideo = await fetchData("videos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newVideo),
        });
        if (savedVideo) {
            setVideos((prev) => [...prev, savedVideo]);
        }
    };

    // Borrar video manualmente
    const deleteVideo = async (id) => {
        await fetchData(`videos/${id}`, {
            method: "DELETE",
        });
        setVideos((prev) => prev.filter((video) => video.id !== id));
    };

    // Editar video manualmente con PATCH
    const editVideo = async (id, updatedVideo) => {
        await fetchData(`videos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedVideo),
        });
        setVideos((prev) => prev.map((video) => (video.id === id ? updatedVideo : video)));
    };

    return { categories, videos, saveVideo, loading, error, deleteVideo, editVideo };
}

export default useDataVideos;
