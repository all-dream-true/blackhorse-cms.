import Vue from "vue";

import App from './App';

import router from './router';

Vue.config.productionTip = false;

//引入mnit-ui的内容
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

//引入mui的样式
import './assets/mui/css/mui.css';
import './assets/mui/css/icons-extra.css';

//引入vue-preview插件
import VuePreview from 'vue-preview'; 
// defalut install
Vue.use(VuePreview);

import store from "./store";


new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
