import '../css/Form.css';
import '../css/Input.css';

export default function Form() {
    return (
        <div className="to-do__form">
            <AddItem />
        </div>
    );
}

function AddItem() {
    return (
        <div className="add-item">
            <div className="add-item__label">add item</div>
            <input className="add-item__input input" type="text" placeholder="Add task" />
            <span className="add-item__add-button">Add</span>
        </div>
    );
}

