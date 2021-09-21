import Vue from "vue";
import Vuex from "vuex"

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
        }

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

            if (typeof email === 'string' && email.length > 0 &&
                typeof password === 'string' && password.length > 0) {

                try {
                    const result = await axios.post('/api/v1/user/signin', {
                        email: email,
                        password: password,
                        device_name: 'spa',
                    });
                    if (result.status === 200) {
                        context.commit('authorize', email, password, result.data);
                    }
                } catch (e) {
                    context.commit('unauthorize');
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
                if (result.status === 200) {
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
    },
    getters: {
        authorized: state => {
            return state.account.authorized;
        },
        global_loading: state => {
            return state.application.global_loading;
        },
    },
});
