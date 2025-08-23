import "./header.css";

export function Header({ index }) {
    return (
        <header>
            <span>Question {index + 1} of 10</span>
        </header>
    );
}
