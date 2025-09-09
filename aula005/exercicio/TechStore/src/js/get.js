import { useContext, useEffect, useState } from "react";
import { StoreContext } from "./storeContext";

export function useGet() {
    const { get, filters } = useContext(StoreContext);

    const [urlProducts, setUrlProducts] = useState("");
    const [urlCategories, setUrlCategories] = useState("");
    const [urlPrices, setUrlPrices] = useState("");

    useEffect(() => {
        if (get.url === "/") {
            if (filters.selected.length === 0) {
                setUrlProducts(`https://dummyjson.com/products?limit=0&skip=0`);
            } else if (
                filters.selected.length === 0 ||
                filters.prices.minUserPrice !== filters.prices.minPrice ||
                filters.prices.maxUserPrice !== filters.prices.maxPrice ||
                filters.assessment > 0
            ) {
                setUrlProducts(
                    `https://dummyjson.com/products?limit=0&sortBy=${filters.sort}&order=${filters.order}`
                );
            } else if (filters.selected.length > 0) {
                const newUrls = filters.selected.map(
                    (category) =>
                        `https://dummyjson.com/products/category/${category}`
                );
                get.setUrls(newUrls);
            }

            setUrlCategories("https://dummyjson.com/products/category-list");
            setUrlPrices("https://dummyjson.com/products?limit=0&select=price");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        get.url,
        get.setUrls,
        filters.selected,
        filters.prices.minUserPrice,
        filters.prices.maxUserPrice,
        filters.prices.minPrice,
        filters.prices.maxPrice,
        filters.assessment,
        filters.sort,
        filters.order,
    ]);

    useEffect(() => {
        if (!urlProducts) return;

        async function fetchProducts() {
            try {
                let allProducts = [];

                if (get.urls.length > 0) {
                    // várias categorias selecionadas
                    const promises = get.urls.map((url) =>
                        fetch(url).then((res) => res.json())
                    );
                    const results = await Promise.all(promises);
                    allProducts = results.flatMap((result) => result.products);
                } else if (urlProducts) {
                    // apenas a URL padrão
                    const response = await fetch(urlProducts);
                    if (!response.ok)
                        throw new Error(
                            "Erro na requisição: " + response.status
                        );
                    const json = await response.json();
                    allProducts = json.products;
                }

                // aplica os filtros
                const filtrados = allProducts.filter(
                    (p) =>
                        p.price >= filters.prices.minUserPrice &&
                        p.price <= filters.prices.maxUserPrice &&
                        p.rating >= filters.assessment
                );

                get.setProducts({
                    products: filtrados,
                    total: filtrados.length,
                    index: Math.ceil(filtrados.length / 30),
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

                const numericPrices = json.products.map((p) => p.price);

                const minPrice = Math.min(...numericPrices);
                const maxPrice = Math.max(...numericPrices);

                filters.setPrices((prev) => ({
                    maxPrice: maxPrice,
                    minPrice: minPrice,
                    minUserPrice: prev.minUserPrice || minPrice,
                    maxUserPrice: prev.maxUserPrice || maxPrice,
                }));
            } catch (error) {
                console.error("Erro ao buscar preços:", error);
            }
        }

        fetchPrices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        urlProducts,
        urlCategories,
        urlPrices,
        get.setProducts,
        get.setCategories,
        filters.setPrices,
        filters.prices.minUserPrice,
        filters.prices.maxUserPrice,
        filters.assessment,
        get.urls,
    ]);
}
