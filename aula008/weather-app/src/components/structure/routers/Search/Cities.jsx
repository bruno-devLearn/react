import { NavLink } from "react-router";

export function Cities({ citiesData, searchData }) {
    return (
        <div className="cities">
            {searchData.map((city, index) => (
                <NavLink to="/result" key={city.id}>
                    <div className="city">
                        <div className="name-condition">
                            <span className="name">
                                {citiesData[index].location.name}
                            </span>
                            <span className="condition">
                                {citiesData[index].current.condition.text}
                            </span>
                        </div>
                        <div className="temperture">
                            {Math.floor(citiesData[index].current.temp_c)}°
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
}
