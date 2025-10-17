import { CiLocationOn, CiMap } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";
import { useData } from "../js/store";

export function Cards() {
    const { data } = useData();

    return (
        <div className="cards">
            {data.nodes?.map((country) => (
                <div className="card" key={country.wikiDataId}>
                    <div className="image">
                        <img src={country.flagImageUri} />
                        <div className="acronym">{country.code}</div>
                    </div>
                    <div className="infos">
                        <div className="name">
                            <h3>{country.name}</h3>
                            <span>
                                <div className="icon">
                                    <CiLocationOn />
                                </div>
                                {country.capital}
                            </span>
                        </div>
                        <div className="general">
                            <div className="top">
                                <div className="code">
                                    <div className="icon">
                                        <BsTelephone />
                                    </div>
                                    <div className="text">
                                        <h4>Codigo</h4>
                                        <span>{country.callingCode}</span>
                                    </div>
                                </div>
                                <div className="current">
                                    <div className="con">
                                        <FiDollarSign />
                                    </div>
                                    <div className="text">
                                        <h4>Moeda</h4>
                                        <span>{country.currencyCodes[0]}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="regions">
                                    <div className="icon">
                                        <CiMap />
                                    </div>
                                    <div className="text">
                                        <h4>Regioes</h4>
                                        <span>{country.numRegions}</span>
                                    </div>
                                </div>
                                <div className="wiki-id">
                                    <div className="icon">
                                        <GoGlobe />
                                    </div>
                                    <div className="text">
                                        <h4>Wiki ID</h4>
                                        <span>{country.wikiDataId}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
