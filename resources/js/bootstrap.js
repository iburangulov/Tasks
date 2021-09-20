window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

require('materialize-css/dist/js/materialize.min');
require('materialize-css/dist/css/materialize.min.css');
require('../fonts/materialize-icons.css');
