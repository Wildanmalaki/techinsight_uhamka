# TECHINSIGHT - Edisi 1

Majalah digital Teknik Informatika UHAMKA berbasis React + Vite dengan integrasi Firebase untuk penyimpanan data aplikasi.

## Menjalankan proyek

Prasyarat: Node.js

1. Install dependency:
   `npm install`
2. Sesuaikan konfigurasi Firebase di `firebase-applet-config.json`
   atau pindahkan ke `.env.local` mengikuti contoh pada `.env.example`
3. Jalankan aplikasi:
   `npm run dev`

## Firebase

Proyek ini sudah menggunakan Firebase SDK melalui [src/lib/firebase.ts](./src/lib/firebase.ts).
Pastikan nilai `projectId`, `appId`, `apiKey`, dan `firestoreDatabaseId` sesuai dengan project Firebase Anda.
