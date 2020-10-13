// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCduIVc6w8-jxWEEhjAaWt9cs5ohB8ZDiw",
  authDomain: "auth-vrouter.firebaseapp.com",
  databaseURL: "https://auth-vrouter.firebaseio.com",
  projectId: "auth-vrouter",
  storageBucket: "auth-vrouter.appspot.com",
  messagingSenderId: "1023828134464",
  appId: "1:1023828134464:web:9e01780143f6e87ef4ada5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  /* eslint-disable no-new */
  new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
  });
});

