<template>

    <div class="col m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">{{ task.title }}</span>
                <p>{{ task.description }}</p>
            </div>
            <div class="card-action">
                <div class="fixed-action-btn btn-task-control">
                    <a class="btn-floating btn-large red">
                        <i class="large material-icons">mode_edit</i>
                    </a>
                    <ul>
                        <li><a class="btn-floating green"><i class="material-icons">visibility</i></a></li>
                        <li><a class="btn-floating yellow darken-1"><i class="material-icons">edit</i></a></li>
                        <li><a class="btn-floating red"><i class="material-icons">delete</i></a></li>
                        <li><a class="btn-floating blue"><i class="material-icons">turned_in_not</i></a></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import uiButton from "../../gui/uiButton";

export default {
    name: "taskCard",
    props: {
        task: {
            type: Object,
            required: true,
        }
    },

    components: {
        uiButton,
    },
}
</script>

<style scoped lang="sass">
.card-action
    padding-top: 80px

    .btn-task-control
        position: absolute

</style>
