<template>
    <div id="app">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    name: 'App',
    components:{ Header,Footer },
}
</script>

<style>
body {background: #f5f7f9;min-width:860px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
