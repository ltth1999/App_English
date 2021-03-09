import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBnIQ9lvrDzYa7XEXqjjCsEqaUI4xXqJf0",
  authDomain: "easyenglish-bd52d.firebaseapp.com",
  projectId: "easyenglish-bd52d",
  storageBucket: "easyenglish-bd52d.appspot.com",
  messagingSenderId: "877293467942",
  appId: "1:877293467942:web:672fab6aebc361bffe69e7"
};


firebase.initializeApp(firebaseConfig);
export default firebase;


export const DATA_STATUS = {
  NONE: 'none',
  SUCCESS: 'success',
  FAILED: 'failed',
};

export const GOOGLE_CONFIGS = {
  WEB_CLIENT_ID:
    '877293467942-ag967jfj4m8l7a7f04mmgee0hrp6of2h.apps.googleusercontent.com',
};
