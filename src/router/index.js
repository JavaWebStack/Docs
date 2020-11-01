import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Doc from '../views/Doc'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Homepage"
    },
    component: Home
  }
]


const structure = require("../assets/docs/structure.js").default


function walkStructure(basePath, structure) {
  if(structure.content !== undefined){
    routes.push({
      path: basePath + '/' + structure.name,
      meta: {
        docs: true,
        title: structure.title,
        content: structure.content
      },
      component: Doc
    })
  }
  if(structure.children){
    structure.children.forEach(c => {
      walkStructure(basePath + '/' + structure.name, c)
    })
  }
}

walkStructure("", structure)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(()=>{
  window.scrollTo(0, 0)
})

router.beforeEach((to, from, next)=>{
  document.title = (to.meta.title || "404") + " | JavaWebStack"
  next()
})

export default router
