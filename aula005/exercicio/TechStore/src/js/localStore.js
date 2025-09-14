// pega os dados, se não existir, retorna array vazio
export const getData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

// salva os dados no localStorage
export const setData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
