import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Index from "@/pages/Index";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Index />
        </BrowserRouter>
        <Toaster />
    </StrictMode>,
)
