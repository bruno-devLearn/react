import { IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router";
import { useCity } from "../../../../js/Store";

export function Result() {
    const { city } = useCity();

    return (
        <div className="content">
            <div className="back">
                <div className="back-content">
                    <NavLink to="/" className="back">
                        <IoIosArrowRoundBack />
                        <span>Voltar</span>
                    </NavLink>
                </div>
            </div>
            <div className="result">
                <div className="location">
                    <h2>{city.location.name}</h2>
                    <span>
                        {city.location.region}, {city.location.country}
                    </span>
                </div>
                <div className="conditions">
                    <div className="img">
                        <img src={city.current.condition.icon} />
                    </div>
                    <div className="cond">
                        <span className="temp">
                            {Math.floor(city.current.temp_c)}°C
                        </span>
                        <span className="cond-text">
                            {city.current.condition.text}
                        </span>
                        <span className="feel">
                            Sensação térmica:{" "}
                            {Math.floor(city.current.feelslike_c)}°C
                        </span>
                    </div>
                </div>
                <div className="infos">
                    <div className="info-div">
                        <div className="info-name">Vento</div>
                        <div className="info-result">
                            {Math.floor(city.current.wind_kph)} km/h
                        </div>
                    </div>
                    <div className="info-div">
                        <div className="info-name">Umidade</div>
                        <div className="info-result">
                            {city.current.humidity}%
                        </div>
                    </div>
                    <div className="info-div">
                        <div className="info-name">UV</div>
                        <div className="info-result">
                            {Math.floor(city.current.uv)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
