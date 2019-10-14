import React, { useState } from 'react';

import './Upload.css';

import UploadInformation from './Information/UploadInformation';

import {Models} from '../Gallery/gallery'; 


const Upload = () => {

    const [modalShow, setModalShow] = useState(false);
    
    let models = Models();
    let content = [];

    if(!models){
        return(
            <div className='loading'>
                <h2>Loading....</h2>
            </div>
        )
    }
    
    else{
        Object.keys(models).map((key, index) => 
            content[index] = models[key]
         );
        return (
            <div className="col-md-9 ml-sm-auto col-lg-10 px-4 Upload">
                <div className="text-right mb-3">
                    <button onClick={() => setModalShow(true)} className="btn btn-success">Nueva(o) Modelo</button>
                </div>
                <UploadInformation 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
                {/* <UploadCover />
                <UploadGallery /> */}
                <table className="table table-dark table-hover">
                    <thead>
                        <tr className="bg-primary text-white">
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Fecha</th>
                            <th>Promo</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content.sort((a,b) => {
                        a = new Date(a.creationDate);
                        b = new Date (b.creationDate);
                        return a > b ? -1 : a < b ? 1 : 0;
                    }).map((model, i) => {
                        let date = new Date(model.creationDate).toLocaleDateString("en-GB");
                        let hour = new Date(model.creationDate).toLocaleTimeString("en-GB")
                            return (
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{model.name + ' ' + model.lastName}</td>
                                    <td>{model.age}</td>
                                    <td>{date + ' ' + hour}</td>
                                    <td>{model.promo === true ? 'SI' : 'NO' }</td>
                                    <td align="center">
                                        <a href='# ' className="text-primary"><i className="fa fa-fw fa-edit"></i> Editar</a> | 
                                        <a href='# ' className="text-danger"><i className="fa fa-fw fa-trash"></i> Borrar</a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default Upload;