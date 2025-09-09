import { useContext, useEffect, useState } from "react";
import { StoreContext } from "./storeContext";

export function useGet() {
    const { url, setProducts, setCategories } = useContext(StoreContext);
    const [urlProducts, setUrlProducts] = useState("");

    const urlCatgories = "https://dummyjson.com/products/category-list";

    useEffect(() => {
        if (url === "/") {
            setUrlProducts("https://dummyjson.com/products?limit=30&skip=0");
        }
    }, [url]);

    useEffect(() => {
        if (!urlProducts) return;

        async function fetchProducts() {
            try {
                const response = await fetch(urlProducts);

                if (!response.ok) {
                    throw new Error("Erro na requisição: " + response.status);
                }

                const json = await response.json();

                setProducts({
                    products: json.products,
                    total: json.total,
                    index: Math.ceil(json.total / 30),
                });
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        }

        fetchProducts();

        if (!urlCatgories) return;

        async function fetchCategories() {
            try {
                const response = await fetch(urlCatgories);

                if (!response.ok) {
                    throw new Error("Erro na requisição: " + response.status);
                }

                const json = await response.json();

                setCategories(json);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        }

        fetchCategories();
    }, [urlProducts, setProducts, setCategories]);
}
