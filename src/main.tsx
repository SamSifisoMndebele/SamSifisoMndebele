import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Home from "@/Home.tsx";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Home />
            <Toaster position="bottom-center" />
        </BrowserRouter>
    </StrictMode>
)
