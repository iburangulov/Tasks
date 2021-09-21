<template>
    <div class="col m6">
        <div class="card blue-grey darken-1">
            <div v-if="loading || self_loading" class="task-loading-wrapper">
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            </div>
            <div class="card-content white-text">
                <hr :style="{ backgroundColor: task.color }">
                <span class="card-title">{{ task.title }}</span>
                <p class="task-short-description">{{ short_description }}</p>
                <br>
                <p>Estimation: {{ task.time_estimated }}</p>
                <p>Logged: {{ task.time_logged }}</p>
                <div class="progress">
                    <div class="determinate" :style="{ width: progress_bar_percent + '%' }"></div>
                </div>
            </div>
            <div class="card-action">
                <div class="fixed-action-btn btn-task-control" :id="'btn-task-control' + this._uid"
                     v-show="!loading && !self_loading">
                    <a class="btn-floating btn-large teal darken-1">
                        <i class="large material-icons">menu</i>
                    </a>
                    <ul>
                        <li><a class="btn-floating orange darken-1" @click="edit_click"><i
                            class="material-icons">mode_edit</i></a>
                        </li>
                        <li><a class="btn-floating yellow darken-1" @click="open_click"><i
                            class="material-icons">visibility</i></a>
                        </li>
                        <li><a class="btn-floating red" @click="delete_click"><i class="material-icons">delete</i></a>
                        </li>
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
    data() {
        return {
            self_loading: false,
        }
    },
    props: {
        task: {
            type: Object,
            required: true,
        },
        loading: {
            type: Boolean,
            default: false,
        }
    },
    mounted() {
        M.FloatingActionButton.init(document.getElementById('btn-task-control' + this._uid), {
            direction: 'left',
            hoverEnabled: false,
        });
    },
    methods: {
        delete_click() {
            this.self_loading = true;
            this.$store.dispatch('delete_task', this.task.id).then(result => {
                if (!result) {
                    this.$emit('alert');
                }
                this.self_loading = false;
            });
        },
        open_click() {
            this.$emit('open_click', this.task);
        },
        edit_click() {
            this.$emit('edit_click', this.task);
        },
    },
    computed: {
        short_description: function () {
            if (!this.task.description) {
                return '';
            }
            return this.task.description.substr(0, 240) + '...'
        },
        progress_bar_percent: function () {
            return 23;
        },
    },
    components: {
        uiButton,
    },
}
</script>

<style scoped lang="sass">
.task-loading-wrapper
    background-color: white
    z-index: 100
    width: 100%
    height: 100%
    position: absolute
    display: flex
    align-items: center

.card-content
    hr
        height: 3px
        border: none

    .task-short-description
        word-break: break-all

.card-action
    padding-top: 80px

    .btn-task-control
        position: absolute

</style>
