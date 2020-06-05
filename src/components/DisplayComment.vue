<template>
    <ul>
        <li v-for="kid in kids" v-bind:key="kid.id">
            <p class="author">
                {{ kid.by }}
                <span>{{ hoursSince(kid.time) }}</span>
                <a
                    class="lessShow"
                    v-on:click="kid.changeDisplay()"
                    v-if="kid.display"
                    >[-]</a
                >
                <a
                    class="lessShow"
                    v-on:click="kid.changeDisplay()"
                    v-if="!kid.display"
                    >[+]</a
                >
            </p>
            <div v-show="kid.display">
                <p class="commentBody" v-html="kid.text"></p>
                <DisplayComments :parent="kid" />
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Api } from "@/Api"
import { Comment } from '../model/Comment';
import { TimeHandler } from '@/common/TimeHandler'
import { Story } from '../model/Story';


@Component
export default class DisplayComments extends Vue {
    @Prop() public parent!: Comment | Story;
    public kids: Comment[] = [];


    private mounted() {
        if (this.parent.getKids())
            this.kids = Api.QueryComments(this.parent.getKids());
    }
    private hoursSince(timestamp: Date): string {
        return TimeHandler.HoursSince(timestamp);
    }
}
</script>
<style lang="scss">
section.comments {
    width: 100%;
    min-height: 50px;
    height: auto;
    font-size: 0.7rem;
    ul {
        padding: 0 0em;
        padding-right: 0;
        list-style-type: none;
        li {
            margin: 0.5em 0;
            display: flex;
            flex-direction: column;
            padding: 0 0.5em;
            overflow: hidden;
            border-left: 1px #e16428 solid;
            margin-bottom: 1em;
            p {
                color: #f6e9e9;
                overflow: hidden;
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
                font-style: italic;
                font-size: 1.05em;
                color: #e16428;
                a.lessShow {
                    color: #e16428;
                    font: 1.1em normal;
                    font-family: "Lucida Console", Monaco, monospace;
                    cursor: pointer;
                    padding: 0 0.5rem;
                }
            }
            a {
                color: #f6e9e9;
            }
        }
    }
}
</style>

