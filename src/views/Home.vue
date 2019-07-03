<template>
    <div class="home">
        <Index />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Index from '@/components/Index.vue'; // @ is an alias to /src
import Story from '@/components/Story.vue'

@Component({
    components: {
        Index,
        Story,

    },
})
export default class Home extends Vue {}
</script>
