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
        <section class="comments" v-if="showCommments">
            <ul>
                <li v-for="comment in comments" v-bind:key="comment.id">
                    <p class="author">
                        {{ comment.by }}
                        <span>{{ hoursSince(comment.time) }}</span>
                    </p>
                    <p class="commentBody" v-html="comment.text"></p>
                    <DisplayComments
                        :parent="comment"
                        v-if="comment.kids != null"
                    />
                </li>
            </ul>
            <a v-on:click="openComments"
                ><i class="material-icons close">expand_less</i></a
            >
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
    private openComments() {
        if (this.comments.length == 0)
            this.comments = Api.QueryComments(this.data.getKids());
        this.showCommments = !this.showCommments;
    }

}
</script>

<style lang="scss">
div.container {
    display: flex;
    flex-direction: column;
    width: 95%;
    background-color: #132226;
    border-radius: 0.3rem;
    padding: 1rem 0;
    margin: 0.5rem auto;
    section.comments {
        width: 100%;
        min-height: 50px;
        height: auto;
        font-size: 0.8rem;
        ul {
            padding: 1em;
            list-style-type: none;
            li {
                margin: 0.5em 0;
                display: flex;
                flex-direction: column;
                padding: 0 0.5em;
                border-left: 1px rgb(202, 202, 202) solid;
                p {
                    margin: 0;
                    text-align: left;
                    span {
                        margin-left: 0.2rem;
                        font-size: 0.6rem;
                    }
                }
                p.author {
                    text-align: left;
                    padding: 0.2em;
                    padding-left: 0;
                    margin-bottom: 0.3em;
                }
                a {
                    color: #fff;
                }
            }
        }
        a {
            display: block;
            padding: 0.5em 0;
            width: 100%;
        }
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
            padding: 0;
            display: block;
            width: 100%;
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
