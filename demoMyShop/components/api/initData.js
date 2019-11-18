const initData = ()=>(
    fetch("http://192.168.1.9/app")
    .then(res => res.json())
);

export default initData;