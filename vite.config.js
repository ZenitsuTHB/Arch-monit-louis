import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
	//server: {
	//	proxy: {	// any call to /health will be redirected to the PHP server
	//		'/health' : {
	//			target: 'https://cp1.obambu.com',
	//			changeOrigin: true,
	//			secure: false, //has I dont kno if there is self generated certificate
	//			rewrite: (path) => path.replace(/^\/health/, 'health'),
	//		},
	//	},
	//},
});
