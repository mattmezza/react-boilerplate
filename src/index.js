import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoApp from './components/todo/TodoApp';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <TodoApp />,
  document.getElementById('TodoApp')
);
