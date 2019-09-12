import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

import './UploadGallery.css';

const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const UploadGallery = () => {

    const [images, setImages] = useState({preview:[], raw:[]})
  
    const handleChange = (e) => {
        let files = e.target.files;
        let fileUrl = [];
        let file = [];
        Array.from(files).map((fileName,i) => {
            fileUrl[i] = URL.createObjectURL(fileName);
            file[i] = fileName;
            return (<></>);
        });
        setImages({
            preview: fileUrl,
            raw: file
        });

        
        // setImage({
        //     preview: URL.createObjectURL(e.target.files[0]),
        //     raw: e.target.files[0]
        // })
    }
  const handleUpload = (e) => {
    e.preventDefault()
    console.log(images)
    // console.log(image)
    // const formData = new FormData()
    // formData.append('image', image.raw)
  }
    return (
        <div>
            <div className="album py-5 bg-light UploadGallery">
                <h2>Subir Galería de Imágenes</h2>
                <div className="container">
                    <div className="row">
                            {
                            images.preview.length > 0 ?
                                images.preview.map((image, i) => {
                                    return (
                                        <div key={i} className="col-md-4">
                                            <div className="card mb-4 box-shadow">
                                                <img className="card-img-top" width="250" height="300" src={image} alt="Uploaded files" />
                                                <div className="card-body">
                                                    <ul>
                                                        <li>Nombre: {images.raw[i].name}</li>
                                                        <li>Tipo: {images.raw[i].type}</li>
                                                        <li>Tamaño: {formatBytes(images.raw[i].size)}</li>
                                                    </ul>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn btn-sm btn-outline-danger">Eliminar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        );
                                    }
                                ) 
                                :
                                (
                                    <>
                                        <h5 className="text-center"> Seleccione las imágenes que desea subir.</h5>
                                    </>
                                )
                            }
                    </div>
                    <div className="input-group mb-3">
                         <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputFile01" multiple onChange={handleChange} lang="es" />
                            <label className="custom-file-label" htmlFor="inputFile01" data-browse="Buscar">Seleccionar Archivos</label>
                        </div>
                    </div>
                    <br />
                    <div className="btn btn-primary btn-block"
                         onClick={handleUpload}
                         role="button">
                        Subir
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default UploadGallery;