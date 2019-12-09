const recovery = (email) => (
    fetch("http://192.168.1.3/app/recovery_pass.php",
        {   
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res => res.text())

 );

 module.exports= recovery;
