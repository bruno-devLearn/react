import { Cities } from "./Cities";
import { Empty, Error, Loading, NotFound } from "./Status";

export function Search() {
    return (
        <div className="cities-div">
            <div className="input">
                <input type="text" placeholder="Buscar Cidade..." />
            </div>
            <Loading />
        </div>
    );
}
