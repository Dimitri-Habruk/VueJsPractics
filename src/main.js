import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'

//                               variant create global component #1
// import Uinput from './components/global/Uinput.vue'
// app.component('Uinput', Uinput);

const app = createApp(App);


//                               variant create global component #2
import globalComponents from './components/global' //import by default - index.js
app.use(globalComponents)
//                               variant create global component #2




app.mount('#app');