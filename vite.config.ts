import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Ganti dengan nama repositori Anda: 'versa'
const REPO_NAME = 'versa'; 

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
        // --- START: Tambahan untuk GitHub Pages ---
        // Menetapkan base path sesuai nama repo
        base: `/${REPO_NAME}/`, 
        // --- END: Tambahan untuk GitHub Pages ---

        server: {
            port: 3000,
            host: '0.0.0.0',
        },
        plugins: [react()],
        define: {
            // Catatan: Biasanya variabel lingkungan sudah disuntikkan secara otomatis 
            // oleh Vite dengan prefix VITE_ (misalnya VITE_GEMINI_API_KEY).
            // Jika Anda ingin mempertahankan pemakaian process.env, konfigurasi ini benar.
            'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        }
    };
});