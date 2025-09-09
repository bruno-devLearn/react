import { useContext, useEffect, useState } from "react";
import { StoreContext } from "./storeContext";

export function useGet() {
    const { get } = useContext(StoreContext); // <- get é o objeto inteiro
    const [urlProducts, setUrlProducts] = useState("");

    const urlCategories = "https://dummyjson.com/products/category-list";

    useEffect(() => {
        if (get.url === "/") {
            setUrlProducts("https://dummyjson.com/products?limit=30&skip=0");
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

        fetchProducts();
        fetchCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlProducts, get.setProducts, get.setCategories]);
}
