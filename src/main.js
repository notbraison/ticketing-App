import { createApp } from 'vue'//method for creating instance of app
import './style.css'
import App from './App.vue'//create instance of app
import {createRouter,createWebHistory} from 'vue-router'//we're importing methods from vue router that will enable us to use vouerouter

//import our target components
import Home from './components/home/home.vue'
import About from './components/about/about.vue'
import Events from './components/about/about.vue'

//create the route object array
//route object is composed of 3 paths: path,name,component
const routes=[
    {
        name:'Home',
        route:'/home',
        component:Home//this is what we imported up there in line 7
    },
    {
        name:'about',
        route:"/about",
        component:About
    },
    {
        name:'events',
        route:'/events',
        component:Events
    }
];

//initialize the route using the create router method
const router = createRouter({
    history:createWebHistory(),
    routes:routes//this is the array we have defined up there
});

//create our instance of our application, mount it to the index.html
// we want to make the app use our router by mdifying 
//createApp(App).mount('#app') TO createApp(App).use(router).mount('#app')
createApp(App).use(router).mount('#app')//mount the app
