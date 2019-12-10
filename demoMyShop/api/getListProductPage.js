const getListProductPage = ( idtype, page ) =>{
    const url = `http://192.168.1.3/app/product_by_type.php?id_type=${idtype}&page=${page}`;
    return fetch(url)
    .then(res => res.json())
}
export default getListProductPage;