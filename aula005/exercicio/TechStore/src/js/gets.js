const urlProducts = "https://dummyjson.com/products?limit=30&skip=0";
const urlCategories = "https://dummyjson.com/products/categories";

export async function getDataProducts(setStatus) {
    setStatus("loading");

    try {
        const responseProducts = await fetch(urlProducts);
        if (!responseProducts.ok) throw new Error("Erro ao buscar produtos");

        const dataProducts = await responseProducts.json();
        setStatus("sucess");

        return dataProducts.products;
    } catch (error) {
        setStatus("error");
        console.error(error);
    }
}

export async function getDataCategories(setStatus) {
    setStatus("loading");

    try {
        const responseCategories = await fetch(urlCategories);
        if (!responseCategories.ok) throw new Error("Erro ao buscar produtos");

        const dataCategories = await responseCategories.json();
        setStatus("sucess");

        return dataCategories;
    } catch (error) {
        console.log(error);
    }
}
