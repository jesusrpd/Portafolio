import React from 'react';
import useGet from '../hooks/useGet';
import Card from '../components/Card';
import Load from './Load';

const SeccionDiseño = ()=>{

    const {data,load} = useGet('diseño');

    if (load) {
        return <Load/>
    }
    return(
        <div className="portafolio-section">
            <h3>Diseño</h3>
            <div className="portafolio-trabajos-content">
            {data.map(d =>(
                <Card urlImg={d.urlImg} nombre={d.nombre} key={d._id} link={d.link}/>
                    ))};
            </div>
        </div> 
    );
};

export default SeccionDiseño;