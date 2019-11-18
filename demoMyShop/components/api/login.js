const login =(email, password)=>(
    fetch("http://192.168.1.9/app/login.php",
    {
        method : "POST",
        headers : {
                'Content-Type': 'application/json',
                Accept: 'application/json'
        }, 
        body : JSON.stringify({ email, password}),
    })
    .then(res => res.json())
    
);
module.exports = login;