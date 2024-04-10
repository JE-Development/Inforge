import './assets/main.css'
import './assets/view-design.css'
import './assets/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'
import vue3GoogleLogin from 'vue3-google-login'
import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(router)
app.use(Notifications)
app.use(VueCookies)
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_LOGIN_ID
})

app.mount('#app')
