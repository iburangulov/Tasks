import Vue from "vue";
import Vuex from "vuex"
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        application: {
            tasks: {
                loading: false,
                loading_errors: false,
                creating: false,
                creating_errors: false,
                updating: false,
                updating_errors: false,
                deleting: false,
                deleting_errors: false,
                data: [],
            }
        },
        account: {
            authorized: false,
            token: '1|wXLo3GHJKWtUxFrbSbWoD3W0ahmiYFXsqeVSa5xF',
            // token: '1|wXLo3GHJKWtUxFrbSbWoD3W0ahmiYFXsqeVSa5xF',
        }
    },
    mutations: {
        start_loading(state) {
            state.application.tasks.loading = true;
            state.application.tasks.loading_errors = false;
        },
        finish_loading(state, errors) {
            state.application.tasks.loading = false;
            state.application.tasks.loading_errors = Boolean(errors);
        },
        start_creating(state) {
            state.application.tasks.creating = true;
            state.application.tasks.creating_errors = false;
        },
        finish_creating(state, errors) {
            state.application.tasks.creating = false;
            state.application.tasks.creating_errors = Boolean(errors);
        },
        start_updating(state) {
            state.application.tasks.updating = true;
            state.application.tasks.updating_errors = false;
        },
        finish_updating(state, errors) {
            state.application.tasks.updating = false;
            state.application.tasks.updating_errors = Boolean(errors);
        },
        start_deleting(state) {
            state.application.tasks.deleting = true;
            state.application.tasks.deleting_errors = false;
        },
        finish_deleting(state, errors) {
            state.application.tasks.deleting = false;
            state.application.tasks.deleting_errors = Boolean(errors);
        },
        set_tasks(state, data) {
            state.application.tasks.data = data;
        },
        push_task(state, task) {
            state.application.tasks.data.unshift(task);
        },
        delete_task(state, id) {
            state.application.tasks.data = state.application.tasks.data.filter((item) => item.id !== id);
        },
        clear_errors(state) {
            state.application.tasks.loading_errors = false;
            state.application.tasks.creating_errors = false;
            state.application.tasks.updating_errors = false;
            state.application.tasks.deleting_errors = false;
        }
    },
    actions: {
        async load_tasks(context) {
            if (context.getters.tasks_loading) {
                return;
            }
            context.commit('start_loading');
            let errors = false;
            try {
                const result = await axios.get('/api/v1/tasks', {
                    headers: {
                        Authorization: 'Bearer ' + context.getters.get_token
                    }
                });
                context.commit('set_tasks', result.data);
            } catch (e) {
                errors = true;
            }
            context.commit('finish_loading', errors);
        },
        async create_task(context, task) {
            if (context.getters.tasks_creating) {
                return;
            }
            context.commit('start_creating');
            let errors = false;
            try {
                const result = await axios.post('/api/v1/tasks', task);
                context.commit('push_task', result.data)
            } catch (e) {
                errors = true;
            }
            context.commit('finish_creating', errors);
        },
        async update_task(context, task) {
            if (context.getters.tasks_updating) {
                return;
            }
            context.commit('start_updating');
            let errors = false;
            try {
                const result = await axios.patch('/api/v1/tasks/' + task.id, task);
                context.commit('delete_task', result.data.id);
                context.commit('push_task', result.data);
            } catch (e) {
                errors = true;
            }
            context.commit('finish_updating', errors);
        },
        async delete_task(context, task) {
            if (context.getters.tasks_deleting) {
                return;
            }
            context.commit('start_deleting');
            let errors = false;
            try {
                await axios.delete('/api/v1/tasks/' + task.id);
                context.commit('delete_task', task.id);
            } catch (e) {
                errors = true;
            }
            context.commit('finish_deleting', errors);
        },
        clear_errors(context) {
            context.commit('clear_errors');
        },
        async signup(context, data) {
            const result = await axios.post('/api/v1/user/signup', data);
            console.log(result);
        }
    },
    getters: {
        tasks: function (state) {
            return state.application.tasks.data;
        },
        tasks_loading: function (state) {
            return state.application.tasks.loading;
        },
        tasks_loading_errors: function (state) {
            return state.application.tasks.loading_errors;
        },
        tasks_creating: function (state) {
            return state.application.tasks.creating;
        },
        tasks_creating_errors: function (state) {
            return state.application.tasks.creating_errors;
        },
        tasks_updating: function (state) {
            return state.application.tasks.updating;
        },
        tasks_updating_errors: function (state) {
            return state.application.tasks.updating_errors;
        },
        tasks_deleting: function (state) {
            return state.application.tasks.deleting;
        },
        tasks_deleting_errors: function (state) {
            return state.application.tasks.deleting_errors;
        },
        is_authorized: function (state) {
            return state.account.authorized;
        },
        get_token: function (state) {
            return state.account.token;
        }
    }
});
