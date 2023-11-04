import React,{useState,useEffect} from 'react';
import CreateNote from '../src/components/mobile_home/mobileHome';
import Notes from '../src/components/mobile_notes/notes_page';
import Web from './components/Web_view/web'
import { SelectedProvider } from "./components/Context_file/context";
import { Routes, Route } from 'react-router-dom';

function App() {
   
    const [isMobileView, setIsMobileView] = useState(false);
    const updateView = () => {
        if (window.innerWidth > 500) {
            setIsMobileView(false);
        } else {
            setIsMobileView(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateView);
        updateView();
        return () => {
            window.removeEventListener('resize', updateView);
        };
    }, []);


    return (
        <div className="app">
            <SelectedProvider>
            {isMobileView ?  
                <Routes>
                    <Route path="/" element={<CreateNote />} />
                    <Route path="/Note" element={<Notes />} />
                </Routes>:<Web />}
            </SelectedProvider>
        </div>
    );
}

export default App;
