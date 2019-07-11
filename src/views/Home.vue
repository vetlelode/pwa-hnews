<template>
    <div class="home">
        <nav id="menu" v-if="menu">
            <section><a v-on:click="showMenu">X</a></section>
            <ul>
                <li><router-link to="/" class="hei">Home</router-link></li>
                <li>
                    <router-link to="/about" class="hei">About</router-link>
                </li>
            </ul>
        </nav>
        <header id="nav">
            <a v-on:click="showMenu"
                ><i class="material-icons menuButton">menu</i></a
            >

            <div id="head">
                { pwa-hnews }
            </div>
        </header>
        <Index />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Index from "@/components/Index.vue";

@Component({
    components: {
        Index,
    },
})
export default class Home extends Vue {
    private menu: boolean = false;
    private showMenu() {
        this.menu = !this.menu;
    }
}
</script>
<style lang="scss">
/* TODO: Make okish ruleset for desktops */
nav {
    animation: 150ms slideOut ease-in-out;
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: #dfdfdf;
    width: 100%;
    section {
        font-size: 20px;
        height: 20px;
        text-align: right;
        width: 85%;
        margin: 0 auto;
        margin-top: 10px;
    }
    ul {
        list-style-type: none;
        padding: 0;
        width: 100%;
    }
    li {
        text-align: center;
        padding: 1em 0;
        a {
            text-decoration: none;
            color: #fff;
        }
    }
    background-color: rgb(48, 47, 47);
    &.router-link-exact-active {
        color: #19e78b;
    }
}
@keyframes slideOut {
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
}
header {
    height: 24px;
    display: flex;
    flex-direction: inline;
    padding: 1em;
    padding-bottom: 0;
    text-align: left;
    a {
        width: 20%;
    }
    a i.menuButton {
        width: 100%;
        cursor: pointer;
    }
    div#head {
        width: 80%;
        text-align: right;
    }
}
</style>
