import { useQuery } from "@tanstack/react-query";
import { useCity } from "../../../../js/Store";
import { Cities } from "./Cities";
import { Empty, Error, Loading, NotFound } from "./Status";
import { fecthSearch, fecthCities } from "../../../../js/fetch";

export function Search() {
    const { inputValue, updateInputValue } = useCity();

    // 1️⃣ primeira query: busca cidades
    const {
        isLoading: isSearchLoading,
        isError: isSearchError,
        data: searchData,
    } = useQuery({
        queryKey: ["cities", inputValue],
        queryFn: () => fecthSearch(inputValue),
        enabled: !!inputValue,
    });

    // 2️⃣ segunda query: busca dados completos das cidades
    const {
        isLoading: isCitiesLoading,
        isError: isCitiesError,
        data: citiesData,
    } = useQuery({
        queryKey: ["citiesData", searchData],
        queryFn: () => fecthCities(searchData.map((c) => c.name)),
        enabled: !!searchData?.length, // só roda se searchData existir e tiver elementos
    });

    const loading = isSearchLoading || isCitiesLoading;
    const error = isSearchError || isCitiesError;

    return (
        <div className="cities-div">
            <div className="input">
                <input
                    type="text"
                    placeholder="Buscar Cidade..."
                    value={inputValue}
                    onChange={(e) => updateInputValue(e.target.value)}
                />
            </div>

            {(() => {
                if (!inputValue) return <Empty />;
                if (loading) return <Loading />;
                if (error) return <Error />;
                // se a primeira query retornou array vazio
                if (searchData?.length === 0) return <NotFound />;
                return (
                    <Cities searchData={searchData} citiesData={citiesData} />
                );
            })()}
        </div>
    );
}
