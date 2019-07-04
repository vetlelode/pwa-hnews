<template>
    <div class="home">
        <Index />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Index from "@/components/Index.vue";
import DisplayStory from "@/components/DisplayStory.vue";

@Component({
    components: {
        Index,
        DisplayStory
    }
})
export default class Home extends Vue {}
</script>
