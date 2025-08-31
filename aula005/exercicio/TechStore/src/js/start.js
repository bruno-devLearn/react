import { getDataCategories, getDataProducts } from "./gets";

const products = { items: [] };
export const categories = { categItem: [] };

export async function start(setStatus) {
    const dataProducts = await getDataProducts(setStatus);
    const dataCategories = await getDataCategories(setStatus);

    dataCategories.forEach((item) => {
        categories.categItem.push(item);
    });

    dataProducts.forEach((produto) => {
        products.items.push(produto);
    });
}
