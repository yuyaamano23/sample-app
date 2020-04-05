import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';


Vue.config.productionTip = false

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqPz7eoiu1vAkFMlRZF3jg5XqRMOiQthU",
  authDomain: "my-address-pj-2b1cf.firebaseapp.com",
  databaseURL: "https://my-address-pj-2b1cf.firebaseio.com",
  projectId: "my-address-pj-2b1cf",
  storageBucket: "my-address-pj-2b1cf.appspot.com",
  messagingSenderId: "723460442851",
  appId: "1:723460442851:web:262be850d7cf93d3d753d6",
  measurementId: "G-QZCPTVBP1X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
