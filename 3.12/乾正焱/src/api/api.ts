import httpAxios from '../utils/request';
export  const hotvotelist = ()=>httpAxios.get('/vode/hotlist');