<template>
    <div class="fixed-action-btn" :id="'tasks-actions-panel' + this._uid">
        <a class="btn-floating btn-large red">
            <i class="large material-icons">mode_edit</i>
        </a>
        <ul>
            <li><a class="btn-floating teal darken-1"><i class="material-icons">add_circle_outline</i></a></li>
            <li><a class="btn-floating yellow darken-1"><i class="material-icons">restart_alt</i></a></li>
            <li><a class="btn-floating blue"><i class="material-icons">sort</i></a></li>
        </ul>
    </div>

    <!--    <div class="fixed-action-btn" :id="'tasks-actions-panel' + this._uid">-->
    <!--        <a class="btn-floating btn-large teal darken-1">-->
    <!--            <i class="large material-icons">menu</i>-->
    <!--        </a>-->
    <!--        <ul>-->
    <!--            <li><a class="btn-floating blue" @click="$emit('create_click')"><i class="material-icons">add_circle_outline</i></a></li>-->
    <!--            <li><a class="btn-floating yellow darken-1" @click="$emit('reload_tasks')"><i class="material-icons">restart_alt</i></a></li>-->
    <!--        </ul>-->
    <!--    </div>-->
</template>

<script>
export default {
    name: "actionsPanel",
    mounted() {
        M.FloatingActionButton.init(document.getElementById('tasks-actions-panel' + this._uid), {
            direction: 'left',
            hoverEnabled: false,
        });
    },
}
</script>

<style scoped>

</style>
