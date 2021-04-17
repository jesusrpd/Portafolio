import {useState, useEffect} from 'react';
import axios from 'axios';

const useGet = seccion =>{

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(()=>{
        const getTrabajos = async ()=>{
            const date = new Date();
            const res = await axios.get(`/api/trabajos/${seccion}`,{
                headers:{
                    'If-Modified-Since': date
                }
            });
            setData(res.data);
            setLoad(false);
        };
        getTrabajos();
    },[seccion]);

    return {data, load};
};

export default useGet;