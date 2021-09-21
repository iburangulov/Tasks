import Vue from "vue";
import Vuex from "vuex"
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        account: {
            authorized: false,
            email: '',
            password: '',
            token: '',
        },
        application: {
            global_loading: false,
            tasks: {
                data: [],
            }
        }
    },
    mutations: {
        authorize(state, data) {
            state.account.email = data.email;
            localStorage.setItem('email', data.email);
            state.account.password = data.password;
            localStorage.setItem('password', data.password);
            state.account.token = data.token;
            localStorage.setItem('token', data.token);
            state.account.authorized = true;
        },
        unauthorize(state) {
            state.account.email = '';
            localStorage.removeItem('email');
            state.account.password = '';
            localStorage.removeItem('password');
            state.account.token = '';
            localStorage.removeItem('token');
            state.account.authorized = false;
        },
        start_global_loading(state) {
            state.application.global_loading = true;
        },
        finish_global_loading(state) {
            state.application.global_loading = false;
        },

        /**
         * Tasks
         */

        push_tasks: (state, data) => {
            state.application.tasks.data = data;
        }

        /**
         *
         */

    },
    actions: {

        /**
         * Инициализация
         * @returns {Promise<void>}
         */
        async init(context) {
            context.commit('start_global_loading');

            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');
            const token = localStorage.getItem('token');

            if (typeof email === 'string' && email.length > 0 &&
                typeof password === 'string' && password.length > 0 &&
                typeof token === 'string' && email.length > 0) {
                try {
                    const result = await axios.post('/api/v1/user/check', {
                        email: email,
                        password: password,
                        token: token,
                        device_name: 'spa',
                    });
                    if (result.status === 200 && result.data.length > 0) {
                        context.commit('authorize', {
                            email: email,
                            password: password,
                            token: result.data,
                        });
                    }
                } catch (e) {
                }
            } else {
                context.commit('unauthorize');
            }
            context.commit('finish_global_loading');
        },

        /**
         * Вход, получение токена
         * @param context
         * @param data
         * @returns {Promise<void>}
         */
        async signin(context, data) {
            context.commit('start_global_loading');
            context.commit('unauthorize');
            try {
                const result = await axios.post('/api/v1/user/signin', {
                    email: data.email,
                    password: data.password,
                    device_name: 'spa',
                });
                if (result.status === 200 && result.data.length > 0) {
                    context.commit('authorize', {
                        email: data.email,
                        password: data.password,
                        token: result.data,
                    });
                }
            } catch (e) {
            }
            context.commit('finish_global_loading');
        },

        /**
         * Регистрация, получение токена
         * @param context
         * @param data
         * @returns {Promise<void>}
         */
        async signup(context, data) {
            context.commit('start_global_loading');
            context.commit('unauthorize');
            try {
                const result = await axios.post('/api/v1/user/signup', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    device_name: 'spa',
                });
                if (result.status === 200 && result.data.length > 0) {
                    context.commit('authorize', {
                        email: data.email,
                        password: data.password,
                        token: result.data,
                    });
                }
            } catch (e) {
            }
            context.commit('finish_global_loading');
        },

        /**
         * Загрузка всех задач
         * @param context
         * @returns {Promise<boolean>}
         */
        async load_tasks(context) {
            //TODO do pagination
            try {
                const result = await axios.get('/api/v1/tasks', {
                    headers: {
                        Authorization: 'Bearer ' + context.getters.token,
                    },
                });
                if (result.status === 200) {
                    context.commit('push_tasks', result.data);
                    return true;
                }
            } catch (e) {
            }
            return false;
        },

        /**
         * Удаление данных аутентификации
         * @param context
         */
        signout(context) {
            context.commit('unauthorize');
        },
    },
    getters: {
        token: state => state.account.token,
        authorized: state => {
            return state.account.authorized;
        },
        global_loading: state => {
            return state.application.global_loading;
        },
        tasks: state => {
            return state.application.tasks.data;
        },

    },
});
