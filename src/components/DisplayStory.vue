<template>
    <div class="container">
        <article>
            <aside class="lefty">
                <span>{{ data.score }}</span>
            </aside>
            <section>
                <a v-bind:href="data.url">{{ data.title }}</a>
            </section>
            <a v-on:click="openComments">
                <aside class="righty">
                    <i class="material-icons">comment</i>
                    <span class="comments">{{ data.descendants }}</span>
                </aside>
            </a>
        </article>
        <section class="comments" v-if="showCommments"></section>
    </div>
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
        "a",
        new Date(),
        "",
        [],
        0,
        "",
        0,
        ""
    );
    showCommments: boolean = false;
    mounted() {
        let data = Api.QueryStory(this.story);
        data.then(data => {
            this.data = data;
        });
    }
    openComments() {
        Api.QueryComments(this.data.getKids());
        this.showCommments = !this.showCommments;
    }
}
</script>

<style lang="scss">
div.container {
    display: flex;
    flex-direction: column;
    width: 95%;
    background-color: rgb(37, 37, 37);
    border-radius: 5px;
    padding: 1rem 0;
    margin: 0.5rem auto;
    section.comments {
        width: 100%;
        min-height: 20px;
        height: auto;
    }
}

article {
    display: flex;
    flex-direction: row;
    height: 17px;
    cursor: pointer;
    section {
        width: 80%;
        overflow: hidden;
        white-space: nowrap;
        a {
            font-size: 0.8rem;
            color: #fff;
            text-decoration: none;
        }
    }

    aside.lefty {
        padding: 0 0.5rem;
        font-size: 0.8rem;
        width: 10%;
    }
    a {
        width: 10%;
        padding: 0 0.5rem;
    }
    aside.righty {
        display: flex;
        flex-direction: column;
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
