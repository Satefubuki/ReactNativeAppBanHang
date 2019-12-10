const initData = () => (
    fetch('http://192.168.1.7/app')
    .then(res => res.json())
);

export default initData ;