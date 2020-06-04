<template>
    <div class="container">
        <article v-bind:class="{ big: showCommments }">
            <aside class="lefty">
                <span>{{ data.score }}</span>
            </aside>
            <section>
                <a v-bind:href="data.url">
                    {{ data.title }}
                </a>
            </section>
            <a v-on:click="showCommments = !showCommments">
                <aside class="righty">
                    <i class="material-icons">comment</i>
                    <span class="comments">{{ data.descendants }}</span>
                </aside>
            </a>
        </article>
        <section class="comments" v-if="showCommments">
            <DisplayComments :parent="data" />
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Api } from "@/Api.ts";
import { TimeHandler } from "@/common/TimeHandler.ts";
import * as stor from "@/model/Story.ts";
import { Comment } from "@/model/Comment.ts";
import DisplayComments from "./DisplayComment.vue"

@Component({
    components: {
        DisplayComments,
    }
})
export default class DisplayStory extends Vue {
    @Prop({ default: 1 }) story!: number;

    private data: stor.Story = new stor.Story(
        1,
        "a",
        new Date(),
        "",
        [],
        0,
        "loading..",
        0,
        ""
    );
    private showCommments: boolean = false;
    private comments: Comment[] = [];

    private hoursSince(timestamp: Date): string {
        return TimeHandler.HoursSince(timestamp);
    }
    private mounted() {
        let data = Api.QueryStory(this.story);
        data.then(data => {
            this.data = data;
        });
    }


}
</script>

<style lang="scss">
div.container {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    background-color: #272121;
    border-radius: 0.3rem;
    padding: 1rem;
    margin: 0.5rem auto;
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
            padding: 0;
            display: block;
            width: 100%;
            font-size: 0.8rem;
            margin: 0;
            color: #f6e9e9;
            text-decoration: none;
        }
        a:hover {
            transition: 400ms;
            color: #e16428;
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
    a:hover {
        transition: 400ms;
        color: #e16428;
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
