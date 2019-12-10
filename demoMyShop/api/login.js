const login = (email, password, roleId) => (
    // eslint-disable-next-line no-undef
    fetch('http://192.168.1.3/app/login.php',
    {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
        }, 
        body: JSON.stringify({ email, password, roleId }),
    })
    .then(res => res.json())
    
);
module.exports = login ;