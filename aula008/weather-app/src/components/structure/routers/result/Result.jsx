import { IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router";

export function Result() {
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
                    <h2>São Paulo</h2>
                    <span>São Paulo, Brasil</span>
                </div>
                <div className="conditions">
                    <div className="img">
                        <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" />
                    </div>
                    <div className="cond">
                        <span className="temp">25°C</span>
                        <span className="cond-text">Ensolarado</span>
                        <span className="feel">Sensação térmica: 27°C</span>
                    </div>
                </div>
                <div className="infos">
                    <div className="info-div">
                        <div className="info-name">Vento</div>
                        <div className="info-result">15 km/h</div>
                    </div>
                    <div className="info-div">
                        <div className="info-name">Umidade</div>
                        <div className="info-result">60%</div>
                    </div>
                    <div className="info-div">
                        <div className="info-name">UV</div>
                        <div className="info-result">7</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
