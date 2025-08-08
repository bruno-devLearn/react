const getData = () => JSON.parse(localStorage.getItem("list")) || [];
const setData = (list) => localStorage.setItem("list", JSON.stringify(list));

const list = getData();
export { setData, getData, list };
