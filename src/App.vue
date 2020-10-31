<template>
  <div id="app">
    <Navigation />
    <router-view id="page" />
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