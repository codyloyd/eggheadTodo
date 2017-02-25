import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCe8A1cKiwFbTdxMHorfJZo9iwF1rLuaNs",
  authDomain: "eggheadtodo.firebaseapp.com",
  databaseURL: "https://eggheadtodo.firebaseio.com",
  storageBucket: "eggheadtodo.appspot.com",
  messagingSenderId: "886428986837"
};
firebase.initializeApp(config);

export const fetchTodos = (filter) => 
  firebase.database().ref('todos/').once('value').then(snapshot => {
    switch (filter) {
      case 'all':
        return snapshot.val()
      case 'active':
        return snapshot.val().filter(t => !t.completed)
      case 'completed':
        return snapshot.val().filter(t => t.completed)
      default:
        return snapshot.val() 
    }
  })

