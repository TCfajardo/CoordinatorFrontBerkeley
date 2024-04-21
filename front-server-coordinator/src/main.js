import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, fa } from 'vuetify/iconsets/fa';
import '@mdi/font/css/materialdesignicons.css'; 

const vuetify = createVuetify({
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa,
        },
    },
});

const app = createApp(App);
app.use(vuetify); // Asegúrate de usar Vuetify
app.mount('#app');
