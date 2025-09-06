import { useContext, useEffect, useState } from "react";
import { GetContext } from "./context";
import { StatusContext } from "../components/Main/statusComponents/StatusContext";

const urlCategories = "https://dummyjson.com/products/categories";
const urlPrices = "https://dummyjson.com/products?limit=0&skip=0&select=price";

// Hook para produtos
export function useGetDataProducts() {
    const { get } = useContext(GetContext);
    const { setStatus } = useContext(StatusContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true; // previne updates depois que o componente desmonta

        async function fetchData() {
            setStatus("loading");
            const urlProducts = `https://dummyjson.com/products?limit=30&skip=${
                get.select * 30
            }`;

            try {
                const response = await fetch(urlProducts);
                if (!response.ok) throw new Error("Erro ao buscar produtos");

                const dataProducts = await response.json();
                if (isMounted) {
                    setStatus("sucess");
                    setData(dataProducts);
                }
            } catch (error) {
                if (isMounted) setStatus("error");
                console.error(error);
            }
        }

        fetchData();

        return () => {
            isMounted = false;
        }; // cleanup
    }, [get.select, setStatus]);

    return { data }; // retorna direto o objeto, não {data}
}

// Hook para categorias
export function useGetDataCategories() {
    const { setStatus } = useContext(StatusContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            setStatus("loading");
            try {
                const response = await fetch(urlCategories);
                if (!response.ok) throw new Error("Erro ao buscar categorias");

                const categories = await response.json();
                if (isMounted) {
                    setStatus("sucess");
                    setData(categories);
                }
            } catch (error) {
                if (isMounted) setStatus("error");
                console.error(error);
            }
        }

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [setStatus]);

    return data;
}

// Hook para preços
export function useGetDataPrices() {
    const { setStatus } = useContext(StatusContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            setStatus("loading");
            try {
                const response = await fetch(urlPrices);
                if (!response.ok) throw new Error("Erro ao buscar preços");

                const pricesData = await response.json();
                if (isMounted) {
                    setStatus("sucess");
                    setData(pricesData.products);
                }
            } catch (error) {
                if (isMounted) setStatus("error");
                console.error(error);
            }
        }

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [setStatus]);

    return data;
}
