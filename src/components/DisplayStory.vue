<template>
    <article>
        <aside class="lefty">
            <span>{{ data.score }}</span>
        </aside>
        <section>{{ data.title }}</section>
        <aside class="righty">
            <i class="material-icons">comment</i>
            <span class="comments">{{ data.descendants }}</span>
        </aside>
    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Api } from "@/Api.ts";
import * as stor from "@/Story.ts";

@Component
export default class DisplayStory extends Vue {
    @Prop({ default: 1 }) story!: number;
    data: stor.Story = new stor.Story(
        1,
        "story",
        "a",
        new Date(),
        "",
        [],
        0,
        "",
        0,
        ""
    );
    mounted() {
        let data = Api.QueryStory(this.story);
        data.then(data => {
            this.data = data;
        });
    }
}
</script>

<style lang="scss">
article {
    display: flex;
    flex-direction: row;
    width: 95%;
    background-color: rgb(37, 37, 37);
    border-radius: 5px;
    padding: 1rem 0;
    margin: 0.5rem auto;
    height: 17px;
    cursor: pointer;

    section {
        width: 80%;
        overflow: hidden;
    }
    aside.lefty {
        padding: 0 1rem;
        font-size: 0.8rem;
        width: 10%;
    }
    aside.righty {
        display: flex;
        flex-direction: column;
        width: 10%;
        padding: 0 1rem;
        i {
            font-size: 0.7rem;
            margin-bottom: 5px;
        }
        span.comments {
            font-size: 0.6rem;
        }
    }
}
</style>
