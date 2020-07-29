<template>
    <div class="home">
        <header class="home">
            <aside class="left">
                <span class="material-icons"
                    ><a v-on:click="refresh">refresh</a></span
                >
            </aside>
            <div id="head">{ pwa-hnews }</div>
            <aside class="right">
                <span class="material-icons"
                    ><a v-on:click="menu = true">settings</a></span
                >
            </aside>
        </header>
        <Index :key="reRender" />
        <Settings v-if="menu" v-on:close="menu = false" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Index from "@/components/Index.vue";
import Settings from "@/components/Settings.vue"

@Component({
    components: {
        Index,
        Settings,
    },
})
export default class Home extends Vue {
    private reRender: number = 0;
    private menu: boolean = false;
    private refresh() {
        this.reRender += 1;
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
header.home {
    height: 24px;
    display: flex;
    flex-direction: inline;
    padding: 1rem;
    padding-bottom: 0;
    color: #dfdfdf;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;

    a {
        width: 20%;
        color: #dfdfdf;
        text-decoration: none;
        cursor: pointer;
    }
    a i.menuButton {
        width: 100%;
        cursor: pointer;
    }
    div#head {
        margin: 0 auto;
        text-align: center;
    }
}
</style>
