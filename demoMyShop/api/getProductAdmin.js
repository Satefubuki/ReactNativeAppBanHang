const getProductAdmin = () => {
    const url = 'http://192.168.1.7/app/admin/get_productadmin.php';
    return fetch(url)
    .then(res => res.json());
};

export default getProductAdmin ;