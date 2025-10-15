import { GoGlobe } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

export function Header() {
    return (
        <header>
            <div className="header">
                <div className="icon">
                    <GoGlobe />
                </div>
                <div className="title">
                    <h1>Buscador de Países</h1>
                    <p>Explore informações sobre países ao redor do mundo</p>
                </div>
            </div>
            <div className="input">
                <div className="icon">
                    <CiSearch />
                </div>
                <input type="text" placeholder="Buscar país" />
            </div>
            <div className="status-div">
                <span className="countries">30 países encontrados</span>
                <button>Limpar busca</button>
            </div>
        </header>
    );
}
