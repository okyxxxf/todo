import eisenhowerMatrix from '../images/eisenhower-matrix.jpg';
import '../css/TodoImage.css';

export default function TodoImage(){
    return (
        <>
            <img className="to-do__image" src={eisenhowerMatrix} alt="eisenhower-matrix" />
        </>
    );
}