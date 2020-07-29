<template>
    <main>
        <div v-for="story in stories" v-bind:key="story">
            <DisplayStory :story="story" />
        </div>
        <div id="expand">
            <span class="material-icons">
                <a v-on:click="addMore()">keyboard_arrow_down</a>
            </span>
        </div>
    </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DisplayStory from "@/components/DisplayStory.vue";
import { Api } from "@/Api.ts";

@Component({
    components: {
        DisplayStory
    }
})
export default class Index extends Vue {
    private stories: number[] = [];
    private mounted() {
        this.stories = Api.QueryFrontPage("topstories");
    }
    private addMore() {
        let next30 = Api.QueryFrontPage(
            "topstories",
            this.stories.length,
            this.stories.length + 30
        );
        for (let story of next30) {
            console.log(story);
        }
    }
}
</script>
<style lang="scss">
main {
    width: 100%;
    margin: 0;
    padding: 0;
    div#expand {
        span a {
            background: #272121;
            padding: 0 0.5em;
            border-radius: 0.3rem;
        }
    }
}
</style>

