import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/YOUR_REPO_NAME/', // Replace with your repo name
})