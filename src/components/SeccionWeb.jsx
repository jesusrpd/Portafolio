import React from 'react';
import Card from '../components/Card';
import useGet from '../hooks/useGet';
import Load from './Load';

const SeccionWeb = ()=>{

    const {data, load} = useGet('web');

    if (load) {
        return <Load/>
    }
    return(
        <div className="portafolio-section">
            <h3>Desarrollo web</h3>
            <div className="portafolio-trabajos-content">
            {data.map(w=>(
                <Card urlImg={w.urlImg} nombre={w.nombre} key={w._id} link={w.link}/>
            ))}
            </div>
        </div>
    );
};

export default SeccionWeb;