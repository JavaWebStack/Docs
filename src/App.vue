<template>
  <div id="app">
    <Navigation />
    <div style="margin-top: 100px" :style="{'min-height': $route.meta.docs ? 'calc(100vh - 165px)' : 'calc(100vh - 318px)'}">
      <router-view id="page" :class="{docs: $route.meta.docs}" />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default {
  components: {
    Navigation,
    Footer
  }
  
}
</script>