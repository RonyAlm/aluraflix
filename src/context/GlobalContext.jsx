import { createContext, useContext, useState} from "react";

export const GlobalContext = createContext();

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
};

const GlobalContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null); 

    const openModal = (video) => {
        setSelectedVideo(video);
        setModal(true);
    }

    const closeModal = () => {
        setSelectedVideo(null);
        setModal(false);
    }

    return (
        <GlobalContext.Provider value={{ modal, openModal, closeModal, selectedVideo }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
