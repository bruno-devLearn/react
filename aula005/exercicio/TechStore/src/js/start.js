import { useContext, useEffect } from "react";
import {
    useGetDataCategories,
    useGetDataProducts,
    useGetDataPrices,
} from "./gets";
import { StatusContext } from "../components/Main/statusComponents/StatusContext";
import { GetContext } from "./context";

// Objetos globais
export const categories = { categItem: [] };
export const prices = { priceItem: [] };
export const userPrices = { min: 0, max: 0 };
export const assessment = { value: 0 };
export const order = { value: "Default" };

export function useStart() {
    const { get } = useContext(GetContext);
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
        get.setProducts({
            items: dataProducts.products, // cria um novo objeto
        });

        prices.priceItem = [...dataPrices];
    }, [
        dataProducts,
        dataCategories,
        dataPrices,
        reload,
        setTotalValue,
        get.setProducts,
    ]);
}
