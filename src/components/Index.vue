<template>
    <main>
        <div v-for="story in stories" v-bind:key="story">
            <DisplayStory story="story" />
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
    stories!: number[];
    ids!: 0;
    mounted() {
        this.stories = Api.QueryFrontPage();
        console.log(this.stories);
    }
}
</script>
<style lang="scss">
main {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>

