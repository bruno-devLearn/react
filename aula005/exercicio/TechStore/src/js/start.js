import { useContext, useEffect } from "react";
import {
    useGetDataCategories,
    useGetDataProducts,
    useGetDataPrices,
} from "./gets";
import { StatusContext } from "../components/Main/statusComponents/StatusContext";

// Objetos globais
export const products = { items: [] };
export const categories = { categItem: [] };
export const prices = { priceItem: [] };
export const userPrices = { min: 0, max: 0 };
export const assessment = { value: 0 };
export const order = { value: "Default" };

export function useStart() {
    const { reload, setTotalValue } = useContext(StatusContext);
    const { data: dataProducts } = useGetDataProducts();
    const dataCategories = useGetDataCategories();
    const dataPrices = useGetDataPrices();

    useEffect(() => {
        // espera todos os dados carregarem
        if (!dataProducts || !dataCategories || !dataPrices) return;

        // popula os objetos globais
        setTotalValue(dataProducts.total);

        categories.categItem = [...dataCategories];
        products.items = [...dataProducts.products];
        prices.priceItem = [...dataPrices];
    }, [dataProducts, dataCategories, dataPrices, reload, setTotalValue]);
}
