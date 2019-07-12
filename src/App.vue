<template>
    <div id="app">
        <router-view />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
export default Vue.extend({});
</script>

<style lang="scss">
body {
    background-color: #040c0e;
    padding: 0;
    margin: 0;
    width: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
}
</style>
