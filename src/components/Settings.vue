<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <header class="modalHeader">
                        <h3>Settings</h3>
                        <aside>
                            <span class="material-icons">
                                <a class="close" v-on:click="$emit('close')">
                                    close</a
                                >
                            </span>
                        </aside>
                    </header>

                    <form class="settings">
                        <section class="formRow">
                            <label for="">Sort by:</label>
                            <select v-model="SortingChosen">
                                <option
                                    v-for="option in SortingOptions"
                                    v-bind:value="option.value"
                                    :key="option.value"
                                    >{{ option.text }}</option
                                >
                            </select>
                        </section>
                        <section class="formRow">
                            <label for="">Show Only:</label>
                            <select>
                                <option>Popular</option>
                                <option>Newest</option>
                                <option>Popular</option>
                            </select>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DisplayStory from "@/components/DisplayStory.vue";
import { Api } from "@/Api.ts";

export default class Settings extends Vue {
    private Only: String = "All";
    private SortingChosen: string = "topstories"
    private SortingOptions = [
        { text: 'Top', value: 'topstories' },
        { text: 'New', value: 'newstories' },
        { text: 'Best', value: 'beststories' }
    ]
    private emitOption(type: string, event: Event) {
        console.log(event.target)
        this.$emit(type, event)
    }

}
</script>
<style lang="scss">
div {
    color: #f6e9e9;
}
header.modalHeader {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    h3 {
        border-bottom: #f6e9e9 1px solid;
        padding-bottom: 10px;
        margin: 0;
        width: 80%;
        text-align: left;
    }
    aside {
        border-bottom: #f6e9e9 1px solid;
        padding-bottom: 10px;
        text-align: right;
        width: 20%;
    }
}
form.settings {
    section.formRow {
        text-align: left;
        margin: 1em 0;
        label {
            margin: 0 1em;
            margin-left: 0;
        }
    }
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-container {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 90%;
    background-color: #272121;
    border-radius: 0.3rem;
    padding: 1rem;
    margin: 0.5rem auto;
    min-height: 200px;
    height: auto;
}

.modal-body {
    margin: 20px 0;
}
</style>