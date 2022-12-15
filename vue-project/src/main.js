import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.use(VueSweetalert2);

app.mount('#app');
import "bootstrap/dist/js/bootstrap.js";

import Swal from "sweetalert2";
window.Swal = Swal;
