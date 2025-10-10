import axios from "axios";

const apiKey = "723128f55d64486bb45170233250504";

export async function fecthSearch(value) {
    try {
        const response = await axios.get(
            `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${value}&lang=pt`
        );
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function fecthCities(cities) {
    try {
        // mapeia cada cidade para uma promise do axios
        const promises = cities.map((city) =>
            axios
                .get(
                    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`
                )
                .then((res) => res.data)
                .catch((err) => {
                    return err; // retorna null se der erro, para não quebrar o Promise.all
                })
        );

        // aguarda todas as requisições
        const results = await Promise.all(promises);

        // filtra valores nulos (opcional)
        return results.filter((r) => r !== null);
    } catch (error) {
        console.error("Erro geral ao buscar cidades:", error);
        return [];
    }
}
