<template>
    <ul>
        <li v-for="kid in kids" v-bind:key="kid.id">
            <p class="author">
                {{ kid.by }}
                <span>{{ hoursSince(kid.time) }}</span>
            </p>
            <p class="commentBody" v-html="kid.text"></p>
            <DisplayComments :parent="kid" />
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Api } from "@/Api"
import { Comment } from '../model/Comment';
import { TimeHandler } from '@/common/TimeHandler'


@Component
export default class DisplayComments extends Vue {
    @Prop() public parent!: Comment;
    public kids: Comment[] = [];
    private beforeCreate() {
    }
    private mounted() {
        this.kids = Api.QueryComments(this.parent.getKids());
    }
    private hoursSince(timestamp: Date): string {
        return TimeHandler.HoursSince(timestamp);
    }
}
</script>
<style lang="scss">
</style>

