// ads.js

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "car-ads.firebaseapp.com",
  projectId: "car-ads",
  storageBucket: "car-ads.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
