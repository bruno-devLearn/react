import { getDataCategories, getDataPrices, getDataProducts } from "./gets";

export const products = { items: [] };
export const categories = { categItem: [] };

export const prices = { priceItem: [] };
export const userPrices = { min: 0, max: 0 };

export const assessment = { value: 0 };
export const order = { value: "Default" };

export async function start(setStatus) {
    const dataProducts = await getDataProducts(setStatus);
    const dataCategories = await getDataCategories(setStatus);
    const dataPrices = await getDataPrices(setStatus);

    dataCategories.forEach((item) => {
        categories.categItem.push(item);
    });

    dataProducts.forEach((produto) => {
        products.items.push(produto);
    });

    dataPrices.forEach((price) => {
        prices.priceItem.push(price);
    });
}
