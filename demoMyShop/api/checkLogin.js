const checkLogin = (token) => (
    fetch('http://192.168.1.7/app/check_login.php',
    {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
        }, 
        body: JSON.stringify({ token }),
    })
    .then(res => res.json())
    .catch(err => console.log(err))
    
);
module.exports = checkLogin;