import { GoGlobe } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { useData } from "../js/store";

export function Header() {
    const { inputValue, updateInput, data } = useData();

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
                <input
                    type="text"
                    placeholder="Buscar país"
                    value={inputValue}
                    onChange={(e) => {
                        updateInput(e.target.value);
                    }}
                />
            </div>
            <div className="status-div">
                <span className="countries">
                    {data?.totalCount} países encontrados
                </span>
                {inputValue !== "" ? <button>Limpar busca</button> : null}
            </div>
        </header>
    );
}
