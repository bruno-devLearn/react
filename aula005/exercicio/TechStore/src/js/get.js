import { useContext, useEffect, useState } from "react";
import { StoreContext } from "./storeContext";
import { sortProducts } from "./sort";
import { useNavigate, useParams } from "react-router";

export function useGet() {
    const { get, filters, setStatus, search, cart, again } =
        useContext(StoreContext);
    const { slug } = useParams();
    const navigate = useNavigate();

    const [urlProducts, setUrlProducts] = useState("");
    const [urlCategories, setUrlCategories] = useState("");
    const [urlPrices, setUrlPrices] = useState("");
    const [cartUrls, setCartUrls] = useState("");

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
                setUrlProducts(""); // Limpa para não disparar o fetchProducts
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
            get.setProducts({
                products: [],
                total: 0,
                index: 0,
            });

            setUrlProducts(`https://dummyjson.com/products/search?q=${slug}`);
            setUrlCategories(""); // Limpa para não disparar fetchCategories
            setUrlPrices(""); // Limpa para não disparar fetchPrices
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        get.url,
        filters.selected,
        filters.sort,
        filters.order,
        search.inputSearch,
        slug,
        again, // <-- adicione aqui
    ]);

    useEffect(() => {
        const newId = get.cartProducts.map(
            (item) => `https://dummyjson.com/products/${item.item}`
        );

        setCartUrls(newId);
    }, [get.cartProducts]);

    useEffect(() => {
        if (!urlProducts && !urlCategories && !urlPrices) return;

        async function fetchProducts() {
            if (!urlProducts) return;
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
                    if (!response.ok) {
                        setStatus("error");
                        throw new Error(
                            "Erro na requisição: " + response.status
                        );
                    }
                    const json = await response.json();
                    allProducts = json.products || [];
                    if (!Array.isArray(allProducts) && json.id) {
                        allProducts = [json];
                    }
                }
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
                if (get.url === "/item" && slug) {
                    if (filtrados.length === 0) {
                        search.setInputSearch(slug);
                        search.setInputSearchRaw(slug);
                        setStatus("");
                        navigate("/");
                        return;
                    }
                    if (filtrados.length > 1) {
                        search.setInputSearch(slug);
                        search.setInputSearchRaw(slug);
                        setStatus("success");
                        navigate("/");
                        return;
                    }
                }
                get.setProducts({
                    products: filtrados,
                    total: filtrados.length,
                    index: Math.ceil(filtrados.length / 30),
                });
                setStatus("success");
            } catch (error) {
                setStatus("error");
                console.error("Erro ao buscar produtos:", error);
            }
        }

        async function fetchCategories() {
            if (!urlCategories) return;
            try {
                const response = await fetch(urlCategories);
                if (!response.ok) {
                    setStatus("error");
                    throw new Error("Erro na requisição: " + response.status);
                }
                const json = await response.json();
                get.setCategories(json);
            } catch (error) {
                setStatus("error");
                console.error("Erro ao buscar categorias:", error);
            }
        }

        async function fetchPrices() {
            if (!urlPrices) return;
            try {
                const response = await fetch(urlPrices);
                if (!response.ok) {
                    setStatus("error");
                    throw new Error("Erro na requisição: " + response.status);
                }
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
                setStatus("error");
                console.error("Erro ao buscar preços:", error);
            }
        }

        async function fetchStorage() {
            if (!cartUrls || cartUrls.length === 0) return;
            try {
                const promises = cartUrls.map((url) =>
                    fetch(url).then((res) => res.json())
                );
                const results = await Promise.all(promises);
                // results pode ser um array de objetos de produto ou de { products: [...] }
                const products = results.flatMap((result) => {
                    if (Array.isArray(result.products)) {
                        return result.products;
                    } else if (result.id) {
                        return [result];
                    }
                    return [];
                });
                cart.setShopping(products);
            } catch (error) {
                setStatus("error");
                console.error("Erro ao buscar produtos do carrinho:", error);
            }
        }

        fetchProducts();
        fetchCategories();
        fetchPrices();
        fetchStorage();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        urlProducts,
        urlCategories,
        urlPrices,
        get.urls,
        filters.sort,
        filters.order,
        filters.prices.minUserPrice,
        filters.prices.maxUserPrice,
        filters.assessment,
        slug,
        get.url,
        cartUrls,
        again, // <-- adicione aqui também
    ]);
}
