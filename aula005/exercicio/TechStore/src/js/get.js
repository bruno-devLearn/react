import { useContext, useEffect, useState } from "react";
import { StoreContext } from "./storeContext";

export function useGet() {
    const { get, filters } = useContext(StoreContext);

    const [urlProducts, setUrlProducts] = useState("");
    const [urlCategories, setUrlCategories] = useState("");
    const [urlPrices, setUrlPrices] = useState("");

    useEffect(() => {
        if (get.url === "/") {
            setUrlProducts("https://dummyjson.com/products?limit=30&skip=0");
            setUrlCategories("https://dummyjson.com/products/category-list");
            setUrlPrices("https://dummyjson.com/products?limit=0&select=price");
        }
    }, [get.url]);

    useEffect(() => {
        if (!urlProducts) return;

        async function fetchProducts() {
            try {
                const response = await fetch(urlProducts);
                if (!response.ok)
                    throw new Error("Erro na requisição: " + response.status);
                const json = await response.json();

                get.setProducts({
                    products: json.products,
                    total: json.total,
                    index: Math.ceil(json.total / 30),
                });
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        }

        fetchProducts();
        if (!urlCategories) return;

        async function fetchCategories() {
            try {
                const response = await fetch(urlCategories);
                if (!response.ok)
                    throw new Error("Erro na requisição: " + response.status);
                const json = await response.json();

                get.setCategories(json);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        }

        fetchCategories();
        if (!urlPrices) return;

        async function fetchPrices() {
            try {
                const response = await fetch(urlPrices);

                if (!response.ok)
                    throw new Error("Erro na requisição: " + response.status);

                const json = await response.json();

                // Para min e max precisamos os números crus
                const numericPrices = json.products.map((p) => p.price);

                const minPrice = Math.min(...numericPrices);
                const maxPrice = Math.max(...numericPrices);

                filters.setPrices({
                    maxPrice: maxPrice,
                    minPrice: minPrice,
                    minUserPrice: minPrice,
                    maxUserPrice: maxPrice,
                });
            } catch (error) {
                console.error("Erro ao buscar preços:", error);
            }
        }

        fetchPrices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlProducts, get.setProducts, get.setCategories]);
}
