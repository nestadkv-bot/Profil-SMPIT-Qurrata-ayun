import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // PENTING: Base URL harus sesuai nama repository agar asset terbaca
  base: '/Profil-SMPIT-Qurrata-ayun/',
  define: {
    // Placeholder untuk API Key agar tidak error saat build jika env belum diset
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
});
