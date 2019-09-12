import React, { Fragment, useState } from 'react';
import axios from 'axios';

import './Upload.css';

import UploadInformation, {submitInformation} from './Information/UploadInformation';
import UploadCover from './Cover/UploadCover';
import UploadGallery from './Gallery/UploadGallery';

import {Models} from '../Gallery/gallery'; 


const Upload = () => {

    const [modalShow, setModalShow] = useState(false);
    
    let models = Models();
    let content = [];

    if(!models){
        return(
            <div>
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
                {/* <UploadCover />
                <UploadGallery /> */}
                <div class="text-right mb-3">
                    <a onClick={() => setModalShow(true)} class="btn btn-success">Nueva(o) Modelo</a>
                </div>
                <UploadInformation 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
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
                        {content.map((model, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{model.name + ' ' + model.lastName}</td>
                                    <td>{model.age}</td>
                                    <td>{model.creationDate}</td>
                                    <td>{model.promo === true ? 'SI' : 'NO' }</td>
                                    <td align="center">
                                        <a class="text-primary"><i class="fa fa-fw fa-edit"></i> Editar</a> | 
                                        <a class="text-danger"><i class="fa fa-fw fa-trash"></i> Borrar</a>
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