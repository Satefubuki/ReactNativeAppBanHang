const initData = ()=>(
    fetch("http://192.168.1.3/app")
    .then(res => res.json())
);

export default initData;