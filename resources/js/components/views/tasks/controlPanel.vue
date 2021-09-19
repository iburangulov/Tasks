<template>
    <div class="control-panel">
        <guiButton text="Reload" @click="reload_click" />
        <guiButton text="Create" @click="$emit('create_task_click')" />
        <guiButton text="Delete" @click="$emit('delete_task_click')" />
    </div>
</template>

<script>
import {mapGetters} from "vuex";

import guiButton from "../../gui/guiButton";

export default {
    name: "controlPanel",
    methods: {
        reload_click: function () {
            if (!this.tasks_loading) {
                this.$store.dispatch('load_tasks');
            }
        },
    },
    computed: {
        ...mapGetters({
            tasks_loading: 'tasks_loading'
        }),
    },
    components: {
        guiButton
    }
}
</script>


<style scoped lang="sass">
.control-panel
    height: 60px
    background-color: darkgrey
    margin: 5px auto
    display: flex
    align-items: center
    padding: 0 10px
</style>
