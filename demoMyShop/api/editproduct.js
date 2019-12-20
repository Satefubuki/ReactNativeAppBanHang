const editproduct = (id, name, price, description) => (
    fetch('http://192.168.1.7/app/admin/edit_product.php',
    {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
        }, 
        body: JSON.stringify({ id, name, price, description }),
    })
    .then(res => res.text())
    
);
module.exports = editproduct;