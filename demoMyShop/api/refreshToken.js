import saveToken from '../api/saveToken';

const refreshToken = (token) => {
    fetch('http://192.168.1.7/app/refresh_token.php',
    {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
        }, 
        body: JSON.stringify({ token }),
    })
    .then(res => res.text())
    // eslint-disable-next-line no-shadow
    .then(token => saveToken(token))
    .catch(err => console.log(err));
};

export default refreshToken;