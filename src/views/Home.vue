<template>
    <div class="home">
        <Index />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Index from "@/components/Index.vue";

@Component({
    components: {
        Index
    }
})
export default class Home extends Vue {}
</script>
