import { useContext, useEffect, useState } from "react";
import { StoreContext } from "./storeContext";
import { sortProducts } from "./sort";
import { useNavigate, useParams } from "react-router";

export function useGet() {
    const { get, filters, setStatus, search } = useContext(StoreContext);
    const { slug } = useParams();
    const navigate = useNavigate();

    const [urlProducts, setUrlProducts] = useState("");
    const [urlCategories, setUrlCategories] = useState("");
    const [urlPrices, setUrlPrices] = useState("");

    function slugify(title) {
        return title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
    }

    useEffect(() => {
        if (get.url === "/") {
            if (filters.selected.length > 0) {
                const newUrls = filters.selected.map(
                    (category) =>
                        `https://dummyjson.com/products/category/${category}?sortBy=${filters.sort}&order=${filters.order}`
                );
                get.setUrls(newUrls);
                search.setInputSearch("");
                search.setInputSearchRaw("");
            } else if (search.inputSearch !== "") {
                get.setUrls([]);
                setUrlProducts(
                    `https://dummyjson.com/products/search?q=${search.inputSearch}&sortBy=${filters.sort}&order=${filters.order}&limit=0&skip=0`
                );
            } else {
                setUrlProducts(
                    `https://dummyjson.com/products?limit=0&skip=0&sortBy=${filters.sort}&order=${filters.order}`
                );
                get.setUrls([]);
            }

            setUrlCategories("https://dummyjson.com/products/category-list");
            setUrlPrices("https://dummyjson.com/products?limit=0&select=price");
        } else if (get.url === "/item") {
            // limpa visualmente enquanto busca
            get.setProducts({
                products: [],
                total: 0,
                index: 0,
            });
            // continue usando search (texto) ou troque para id se preferir
            setUrlProducts(`https://dummyjson.com/products/search?q=${slug}`);
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
        search.inputSearch,
        slug,
    ]);

    useEffect(() => {
        if (!urlProducts) return;

        async function fetchProducts() {
            try {
                setStatus("loading");

                let allProducts = [];

                if (get.urls.length > 0) {
                    const promises = get.urls.map((url) =>
                        fetch(url).then((res) => res.json())
                    );
                    const results = await Promise.all(promises);
                    const products = results.flatMap(
                        (result) => result.products
                    );
                    allProducts = sortProducts(
                        products,
                        filters.sort,
                        filters.order
                    );
                } else {
                    const response = await fetch(urlProducts);
                    if (!response.ok)
                        throw new Error(
                            "Erro na requisição: " + response.status
                        );
                    const json = await response.json();
                    allProducts = json.products || [];

                    // se a resposta for um único objeto (quando pesquisar por id), normalize:
                    if (!Array.isArray(allProducts) && json.id) {
                        allProducts = [json];
                    }
                }

                // Se estamos em /item, aplicamos filtro exato por slug (garante 0 ou 1 resultado)
                let filtrados;
                if (get.url === "/item" && slug) {
                    filtrados = allProducts.filter(
                        (p) => slugify(p.title) === slug
                    );
                } else {
                    filtrados = allProducts.filter(
                        (p) =>
                            p.price >= filters.prices.minUserPrice &&
                            p.price <= filters.prices.maxUserPrice &&
                            p.rating >= filters.assessment
                    );
                }

                // DECISÃO DE REDIRECT AQUI: evita race conditions
                if (get.url === "/item" && slug) {
                    if (filtrados.length === 0) {
                        search.setInputSearch(slug);
                        search.setInputSearchRaw(slug);
                        setStatus("");
                        navigate("/");
                        return;
                    }
                    if (filtrados.length > 1) {
                        // busca muito genérica -> volta pra /
                        search.setInputSearch(slug);
                        search.setInputSearchRaw(slug);
                        setStatus("success");
                        navigate("/");
                        return;
                    }
                    // se chegou aqui, filtrados.length === 1 -> mostra o item
                }

                get.setProducts({
                    products: filtrados,
                    total: filtrados.length,
                    index: Math.ceil(filtrados.length / 30),
                });
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            } finally {
                setStatus("success");
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
        // removi get.products aqui de propósito pra não depender do estado antigo
    ]);
}
