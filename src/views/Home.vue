<template>
    <div class="home">
        <header>
            <aside class="left">
                <span class="material-icons"
                    ><a v-on:click="refresh">refresh</a></span
                >
            </aside>
            <div id="head">{ pwa-hnews }</div>
            <aside class="right">
                <span class="material-icons"><a href="#">settings</a></span>
            </aside>
        </header>
        <Index :key="reRender" />
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
header {
    height: 24px;
    display: flex;
    flex-direction: inline;
    padding: 1em;
    padding-bottom: 0;
    color: #dfdfdf;

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
