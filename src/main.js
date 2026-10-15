import { renderApp } from './app.js';
import './styles/main.css';

renderApp(document.querySelector('#app'));

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.error('Não foi possível registar o service worker.', error);
    });
  });
}
