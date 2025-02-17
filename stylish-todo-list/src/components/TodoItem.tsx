import React from 'react';

interface TodoItemProps {
    title: string;
    completed: boolean;
    onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, completed, onToggle }) => {
    return (
        <div className={`todo-item ${completed ? 'completed' : ''}`} onClick={onToggle}>
            <span className="todo-title">{title}</span>
            <span className="todo-status">{completed ? '✓' : '✗'}</span>
        </div>
    );
};

export default TodoItem;