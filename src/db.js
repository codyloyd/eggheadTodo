import firebase from 'firebase'
import cuid from 'cuid'

var config = {
  apiKey: "AIzaSyCe8A1cKiwFbTdxMHorfJZo9iwF1rLuaNs",
  authDomain: "eggheadtodo.firebaseapp.com",
  databaseURL: "https://eggheadtodo.firebaseio.com",
  storageBucket: "eggheadtodo.appspot.com",
  messagingSenderId: "886428986837"
};
firebase.initializeApp(config);

export const fetchTodos = (filter) => {
  return firebase.database().ref('todos/').once('value').then(snapshot => {
    const todos = Object.values(snapshot.val())
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todos.filter(t => !t.completed)
      case 'completed':
        return todos.filter(t => t.completed)
      default:
        return todos 
    }
  })
}

export const addTodo = (text) => {
  const newTodo = firebase.database().ref('todos/').push()
  const todo = {
    id: newTodo.key,
    text,
    completed: false
  }
  return newTodo.set(todo).then(() => {
    return todo
  })
}

export const toggleTodo = (id) => {
  const todo = firebase.database().ref('todos/' + id)
  return todo.once('value').then(data => {
    const toggledTodo = {...data.val(), completed: !data.val().completed}
    return todo.set(toggledTodo)
      .then(() => toggledTodo)
  })
}
