<template>
    <article>
        <aside class="lefty">
            <span>1</span>
        </aside>
        <section>{{ title }}</section>
        <aside class="righty">
            <i class="material-icons">comment</i>
        </aside>
    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Api } from "@/Api.ts";
import * as stor from "@/Story.ts";

@Component
export default class DisplayStory extends Vue {
    @Prop({ type: String, default: "Title" }) title!: string;
    @Prop({ type: Number }) story!: number;
    mounted() {
        console.log(this.story);
    }
}
</script>

<style lang="scss">
article {
    display: flex;
    flex-direction: row;
    width: 93%;
    background-color: rgb(37, 37, 37);
    border-radius: 5px;
    padding: 1rem 0;
    margin: 0.5rem auto;
    height: 17px;
    section {
        width: 80%;
        overflow: hidden;
    }
    aside.lefty {
        padding: 0 1rem;
    }
    aside.righty {
        i {
            font-size: 0.7rem;
            margin-bottom: 5px;
        }
        padding: 0 1rem;
    }
}
</style>
