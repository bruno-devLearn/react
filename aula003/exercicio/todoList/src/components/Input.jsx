import "./css/input.css";

export function Input() {
    return (
        <div className="inputDiv">
            <input type="text" placeholder="Add a new task..." />
            <button className="send">Add</button>
        </div>
    );
}
