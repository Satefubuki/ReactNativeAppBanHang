const deleteproduct = (id) => (
    fetch('http://192.168.1.7/app/admin/delete_product.php',
    {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
        }, 
        body: JSON.stringify({ id }),
    })
    .then(res => res.text())
    
);
module.exports = deleteproduct;