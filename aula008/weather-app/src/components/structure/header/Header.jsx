import { Link } from "react-router";

export function Header() {
    return (
        <header>
            <Link to="/">
                <h1>Weather App</h1>
            </Link>
        </header>
    );
}
