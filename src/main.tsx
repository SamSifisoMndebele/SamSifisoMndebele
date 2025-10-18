import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Index from "@/pages/Index";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Index />
            <Toaster />
        </BrowserRouter>
    </StrictMode>
)
