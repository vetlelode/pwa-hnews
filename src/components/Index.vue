<template>
    <main>
        <Story id=1 title="short"/>
        <Story id=2 title="i'm to long btw like cut me off at some point"/>
        <Story id=3 title="mordi"/>
        <Story id=4 title="heio"/>
    </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Story  from '@/components/Story.vue';
import Api from '@/Api';

@Component({
    components: {
        Story,
    },
})
export default class Index extends Vue {
    
}
</script>
<style lang="scss">
    main {
        width: 100%;
        margin: 0;
        padding: 0;
    }
</style>

