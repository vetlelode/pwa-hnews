<template>
    <div id="app">
        <nav id="nav">
            <i class="material-icons menu">menu</i>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <div id="head">
                { pwa-hnews }
            </div>
        </nav>
        <router-view />
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
    </div>
</template>

<style lang="scss">
body {
    background-color: rgb(19, 19, 19);
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
nav {
    display: flex;
    flex-direction: inline;
    padding: 1em;
    text-align: left;
    i.menu {
        width: 20%;
        cursor: pointer;
    }
    div#head {
        width: 80%;
        text-align: right;
    }
    a {
        display: none;
        font-weight: bold;
        color: #dfdfdf;
        &.router-link-exact-active {
            color: #19e78b;
        }
    }
}
</style>
