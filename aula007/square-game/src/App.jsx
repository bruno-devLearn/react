// Importa os componentes principais do jogo
import { Start } from "./components/game-components/Start"; // Tela inicial para selecionar o modo de jogo
import { Game } from "./components/game-components/Game"; // Tela principal do jogo
import { End } from "./components/game-components/End"; // Tela de fim de jogo

// Importa CSS global do app
import "./app.css";

// Importa o hook do Zustand para acessar o estado global do jogo
import { useSquare } from "./js/store";

function App() {
    // Pega os estados squareIndex (tamanho do grid) e find (se o jogo terminou)
    const { squareIndex, find } = useSquare();

    return (
        <main>
            {/* Renderiza o componente Start se squareIndex for 0 (modo de jogo não selecionado) */}
            {squareIndex === 0 && <Start />}

            {/* Renderiza o componente Game se o modo de jogo foi selecionado e o jogo não terminou */}
            {squareIndex > 0 && !find && <Game />}

            {/* Renderiza o componente End se o modo de jogo foi selecionado e o jogo terminou */}
            {squareIndex > 0 && find && <End />}
        </main>
    );
}

// Exporta o componente principal
export default App;
