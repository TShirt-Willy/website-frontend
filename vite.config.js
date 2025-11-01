 import { defineConfig } from 'vite'
 import vue from '@vitejs/plugin-vue'

const repoName = 'tshirt-willy' // <-- ggf. ändern oder via env steuern

 export default defineConfig({
   plugins: [vue()],
   base: process.env.GITHUB_PAGES ? `/${repoName}/` : '/',
 })
