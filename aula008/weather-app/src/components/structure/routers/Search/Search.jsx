import { Cities } from "./Cities";

export function Search() {
    return (
        <div className="cities-div">
            <div className="input">
                <input type="text" placeholder="Buscar Cidade..." />
            </div>
            <Cities />
        </div>
    );
}
