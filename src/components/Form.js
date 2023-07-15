import '../css/Form.css';
import DeleteIcon from '../svg/delete.svg';

export default function Form() {
    return (
        <div className="to-do__form">
            <AddItem />
            <Todo />
            <Completed />
        </div>
    );
}

function AddItem() {
    return (
        <div className="add-item form__section">
            <div className="add-item__label label">add item</div>
            <input className="add-item__input input" type="text" placeholder="Add task" />
            <span className="add-item__add-button button_span">Add</span>
        </div>
    );
}


function Todo() {
    return (
        <div className="todo form__section">
            <div className="todo__label label">todo</div>
            <ul className="tasks todo__tasks">
                <li className="todo__task task">
                    <input className="todo__checkbox checkbox" type="checkbox" />
                    <span className="todo__task-name task-name">Go doctor</span>
                    <span className="todo__edit-button button_span">Edit</span>
                    <img className="todo__delete-button delete-button" src={DeleteIcon} alt="icon delete" />
                </li>
            </ul>
        </div>
    );
}

function Completed() {
    return (
        <div className="todo form__section">
            <div className="todo__label label">Completed</div>
            <ul className="tasks todo__tasks">
                <li className="todo__task task">
                    <input className="completed__checkbox checkbox" type="checkbox" />
                    <span className="completed__task-name task-name">Go doctor</span>
                    <span className="completed__edit-button button_span">Edit</span>
                    <img className="completed__delete-button delete-button" src={DeleteIcon} alt="icon delete" />
                </li>
            </ul>
        </div>
    );
}
