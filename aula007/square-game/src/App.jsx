import { Start } from "./components/game-components/Start";
import { Game } from "./components/game-components/Game";
import { End } from "./components/game-components/End";
import "./app.css";
import { useSquare } from "./js/store";

function App() {
    const { squareIndex } = useSquare();

    return <main>{squareIndex === 0 ? <Start /> : <Game />}</main>;
}

export default App;
