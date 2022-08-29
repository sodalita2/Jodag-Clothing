import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook,faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook,faSquareInstagram)

import './assets/main.css'
import './tailwind.css'

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
