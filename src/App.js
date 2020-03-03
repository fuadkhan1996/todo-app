import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoList from './Components/TodoList';
import Header from './Components/Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header/>
      <Container className="mt-4">
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
