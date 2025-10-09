import { Cities } from "./Cities";
import { Empty, NotFound } from "./Status";

export function Search() {
    return (
        <div className="cities-div">
            <div className="input">
                <input type="text" placeholder="Buscar Cidade..." />
            </div>
            <NotFound />
        </div>
    );
}
