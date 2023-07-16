import '../css/Form.css';
import DeleteIcon from '../svg/delete.svg';
import { useState } from 'react';

export default function Form() {
    const [tasksToDo, setTasksToDo] = useState([]);
    const [tasksCompleted, setTasksCompleted] = useState([]);
    const [tasksEdit, setTasksEdit] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addItem = () => {
        setTasksToDo([...tasksToDo, newItem]);
        setNewItem('');
        setTasksEdit([...tasksEdit, false]);
    };

    const swapItem = (index, mode) => {
        if (mode) {
            setTasksCompleted([...tasksCompleted, tasksToDo[index]]);
            setTasksToDo([...tasksToDo.slice(0, index), ...tasksToDo.slice(index + 1, tasksToDo.length + 1)]);
        }
        else if (!mode) {
            setTasksToDo([...tasksToDo, tasksCompleted[index]]);
            setTasksCompleted([...tasksCompleted.slice(0, index), ...tasksCompleted.slice(index + 1, tasksCompleted.length + 1)]);
        }
    };

    const removeItem = (index, mode) => {
        if (mode) {
            setTasksToDo([...tasksToDo.slice(0, index), ...tasksToDo.slice(index + 1, tasksToDo.length + 1)]);
        }
        else if (!mode) {
            setTasksCompleted([...tasksCompleted.slice(0, index), ...tasksCompleted.slice(index + 1, tasksCompleted.length + 1)]);
        }
    };

    const editItem = (index) => {
        setTasksEdit([...tasksEdit.slice(0,index), !tasksEdit[index], ...tasksEdit.slice(index + 1, tasksEdit.length + 1)]);
    };

    const setItem = (index, value) => {
        setTasksToDo([...tasksToDo.slice(0, index), value, ...tasksToDo.slice(index + 1, tasksToDo.length + 1)]);
    };

    return (
        <div className="to-do__form">
            <AddItem 
                addItemHandler={addItem}
                inputValue={newItem}
                inputValueSetter={setNewItem}
            />
            <Todo 
                tasks={tasksToDo}
                swapTask={swapItem}
                removeTask={removeItem}
                tasksEdit={tasksEdit}
                taskEdit={editItem}
                setTask={setItem}
            />
            <Completed 
                tasks={tasksCompleted}
                swapTask={swapItem}
                removeTask={removeItem}
            />
        </div>
    );
}

function AddItem({addItemHandler, inputValue, inputValueSetter}) {
    return (
        <div className="add-item form__section">
            <div className="add-item__label label">add item</div>
            <input className="add-item__input input" 
                type="text" 
                placeholder="Add task" 
                onChange={(e) => inputValueSetter(e.target.value)}
                value={inputValue}
            />
            <span className="add-item__add-button button_span" onClick={addItemHandler}>Add</span>
        </div>
    );
}


function Todo({tasks, swapTask, removeTask, tasksEdit, taskEdit, setTask}) {
    const tasksRender = tasks.map((task, index) => {
        if (!tasksEdit[index]) {
            return (
                <li className="todo__task task" key={`${index}-${task}-${Math.random()}`}>
                    <input className="todo__checkbox checkbox" type="checkbox" onChange={() => swapTask(index, true)} />
                    <span className="todo__task-name task-name">{task}</span>
                    <span className="todo__edit-button button_span" onClick={() => taskEdit(index)}>Edit</span>
                    <img className="todo__delete-button delete-button" onClick={() => removeTask(index, true)}src={DeleteIcon} alt="icon delete" />
                </li>
            )
        }
        else {
            return (
                <li className="todo__task task" key={`${index}`}>
                    <input className="todo__checkbox checkbox" type="checkbox" onChange={() => swapTask(index, true)} />
                    <input className="todo__task-name task-name" 
                        value={task} 
                        type="text" 
                        onChange={(e) => setTask(index, e.target.value)}
                    />
                    <span className="todo__edit-button button_span" onClick={() => taskEdit(index)}>Edit</span>
                    <img className="todo__delete-button delete-button" onClick={() => removeTask(index, true)}src={DeleteIcon} alt="icon delete" />
                </li>
            )
        }

    } 
    );

    return (
        <div className="todo form__section">
            <div className="todo__label label">todo</div>
            <ul className="tasks todo__tasks">
                {tasksRender}
            </ul>
        </div>
    );
}

function Completed({tasks, swapTask, removeTask}) {
    const tasksRender = tasks.map((task, index) => 
        <li className="todo__task task" key={index}>
            <input className="todo__checkbox checkbox" type="checkbox" checked onChange={() => swapTask(index, false)} />
            <span className="todo__task-name task-name">{task}</span>
            <img className="todo__delete-button delete-button" onClick={() => removeTask(index, false)} src={DeleteIcon} alt="icon delete" />
        </li>
    );
    return (
        <div className="todo form__section">
            <div className="todo__label label">Completed</div>
            <ul className="tasks todo__tasks">
                {tasksRender}
            </ul>
        </div>
    );
}
