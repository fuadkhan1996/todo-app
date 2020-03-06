import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/';
import { Container } from 'react-bootstrap';
import TodoForm from './Components/TodoForm';

function App() {
  return (
    <div>
      <Header/>
      <Container className="mt-5">
        <TodoForm />
      </Container>
      <div className="mt-4"></div>
    </div>
  );
}

export default App;
