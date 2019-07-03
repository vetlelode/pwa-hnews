<template>
    <article>
        <aside class="lefty">
            <span>{{id}}</span>
        </aside>
        <section>{{title}}</section>
        <aside class="righty">
            <i class="material-icons">comment</i>
        </aside>
    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Story extends Vue {
    @Prop({type: String, default: 'Title'}) title!: string;
    @Prop({type: Number, default: 1}) id!: number;
}
</script>

<style lang="scss">
    article {
        display: flex;
        flex-direction: row;
        width: 93%;
        background-color: rgb(37, 37, 37);
        border-radius: 5px;
        padding: 1rem 0;
        margin: 0.5rem auto;
        height: 17px;
        section {
            width: 80%;
            overflow: hidden;
        }
        aside.lefty {
            padding: 0 1rem;
        }
        aside.righty {
            i{
                font-size: 1rem;
            }
            padding: 0 1rem;
        }

    }
</style>
