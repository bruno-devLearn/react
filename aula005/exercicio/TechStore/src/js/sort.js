export function sortProducts(products, sort, order) {
    if (!sort || !order) return products;

    // garante que não altera o array original
    const sorted = [...products];

    sorted.sort((a, b) => {
        const valueA = a[sort];
        const valueB = b[sort];

        // se for string
        if (typeof valueA === "string" && typeof valueB === "string") {
            return order === "asc"
                ? valueA.toLowerCase().localeCompare(valueB.toLowerCase())
                : valueB.toLowerCase().localeCompare(valueA.toLowerCase());
        }

        // se for número
        if (typeof valueA === "number" && typeof valueB === "number") {
            return order === "asc" ? valueA - valueB : valueB - valueA;
        }

        return 0; // caso não bata em nada
    });

    return sorted;
}
