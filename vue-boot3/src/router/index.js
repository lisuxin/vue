import { createRouter,createWebHashHistory } from 'vue-router';

import About from '../components/About.vue'
import Header from '../components/Header.vue';
import Left from '../components/Left.vue';
import Mainbox from '../components/Mainbox.vue';

const routes=[
      {
          path:"/about/:name",
          name:"about",
          component:About },
      {
          path:"/home",
          components:{
            'default':Header,
            'left':Left,
            'main':Mainbox
          }          
      },]  

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;