import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        application: {
            tasks: {
                loaded: false,
                data: [],
                error: false
            }
        }
    },
    mutations: {
        set_tasks(state, data) {
            state.application.tasks.data = data;
        },
        set_tasks_loading_status(state, loaded) {
            state.application.tasks.loaded = Boolean(loaded)
        },
        set_tasks_loading_error(state, error) {
            state.application.tasks.error = Boolean(error)
        }
    },
    actions: {
        async load_tasks(context) {
            context.commit('set_tasks_loading_error', false);
            context.commit('set_tasks_loading_status', false);
            try {
                const tasks_data = await axios.get('/api/v1/tasks');
                context.commit('set_tasks', tasks_data.data);
                context.commit('set_tasks_loading_status', true);
            } catch (e) {
                context.commit('set_tasks_loading_status', true);
                context.commit('set_tasks_loading_error', true)
            }

        }
    },
    getters: {
        tasks: state => {
            return state.application.tasks.data
        },
        tasks_error: state => {
            return state.application.tasks.error
        },
        tasks_loaded: state => {
            return state.application.tasks.loaded
        },
    }
});