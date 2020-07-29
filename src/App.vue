<template>
    <div id="app">
        <router-view />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
export default Vue.extend({});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap");
body {
    background-color: #363333;
    padding: 0;
    margin: 0;
    width: 100%;
}
#app {
    font-family: "IBM Plex Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #f6e9e9;
}
</style>
