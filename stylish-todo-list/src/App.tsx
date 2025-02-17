import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import './styles/main.css';

const App: React.FC = () => {
    const [todos, setTodos] = useState<{ id: number; title: string; completed: boolean }[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="app">
            <h1>Stylish Todo List</h1>
            <input 
                type="text" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)} 
                placeholder="Add a new todo" 
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        title={todo.title} 
                        completed={todo.completed} 
                        onToggle={() => toggleTodo(todo.id)} 
                        onRemove={() => removeTodo(todo.id)} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default App;