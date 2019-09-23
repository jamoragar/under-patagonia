import React, {useState, useEffect} from 'react';
import firebase from '../../Firebase/firebase';
import './UploadInformation.css';
import axios from 'axios';
import { Modal } from 'react-bootstrap';




export const submitInformation = (e) => {
    e.preventDefault();


    const name = e.target.elements.txt_name.value.trim();
    const lastName = e.target.elements.txt_lastName.value.trim();
    const nacionality = e.target.elements.slt_nacionality.value;
    const age = e.target.elements.txt_age.value;
    const gender = e.target.elements.slt_gender.value;
    const peso = e.target.elements.txt_peso.value;
    const estatura = e.target.elements.txt_estatura.value;
    const busto = e.target.elements.txt_busto.value;
    const cintura = e.target.elements.txt_cintura.value;
    const ass = e.target.elements.txt_ass.value;
    const hairColor = e.target.elements.txt_hairColor.value;
    const serverDate = e.target.elements.txt_serverDate.value;

    const nameSplited = name.split(" ");
    let indexName;

    if(nameSplited.length > 1) indexName = nameSplited[0] + '_' + nameSplited[1];
    else indexName = 'none';

    console.log(gender);

    firebase.database().ref('Models/' + indexName).set({
        name: name,
        lastName: lastName,
        nacionality: nacionality,
        age: age,
        gender : gender,
        weight: peso,
        height: estatura,
        boobs: busto,
        waist: cintura,
        ass: ass,
        hairColor: hairColor,

        creationDate: firebase.database.ServerValue.TIMESTAMP
    });
}

const UploadInformation = (props) => {
    const [date, setDate] = useState('');

    useEffect(() =>{
        axios.post(
            'https://us-central1-models-gallery-puq.cloudfunctions.net/date',
            {
                format: 'DD/MM/YYYY HH:mm:ss'
            }
        )
        .then((response) => setDate(response.data))
        .catch((error) => console.log(error))
    });
    

    return (
        <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Crear Modelo
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="album py-5 bg-light UploadInformation">
            <div className="container">
                <div className="row">
                    <form className="col-md-12" onSubmit={submitInformation}>

                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label>Nombre</label>
                                <input type="text" name="txt_name" className="form-control" placeholder="Nombre" />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Apellido</label>
                                <input type="text" name="txt_lastName" className="form-control" placeholder="Apellido" />
                            </div>
                            
                            <div className="form-group col-md-2">
                                <label>Nacionalidad</label>
                                <select name="slt_nacionality" className="form-control">
                                    <option value="Chile">Chile</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Perú">Perú</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="República Dominicana">República Dominicana</option>
                                    <option value="Cuba">Cuba</option>
                                </select>
                            </div>

                            <div className="form-group col-md-2">
                                <label>Edad</label>
                                <input type="text" name="txt_age" className="form-control" placeholder="Edad" />
                            </div>

                            <div className="form-group col-md-2">
                                <label>Genero</label>
                                <select name='slt_gender' className="form-control" defaultValue='Femenino'>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Trans">Trans</option>
                                    <option value="Locacion">Habitación</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label>Peso</label>
                                <div className="input-group">
                                    <input type="text" name='txt_peso' className="form-control" placeholder="Peso"  />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Kg.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-3">
                                <label>Estatura</label>
                                <div className="input-group">
                                    <input name='txt_estatura' type="text" className="form-control" placeholder="Estatura"  />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Mt.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Medidas</label>
                                <div className="input-group">
                                    <input name='txt_busto' type="text" className="form-control" placeholder="Busto"  />
                                    <input name='txt_cintura' type="text" className="form-control" placeholder="Cintura"  />
                                    <input name='txt_ass' type="text" className="form-control" placeholder="Cadera"  />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Color de Cabello</label>
                                <div className="input-group">
                                    <input name='txt_hairColor' type="text" className="form-control" placeholder="Color de Cabello"  />
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <label>Servicios</label>
                                <select className="form-control" defaultValue='Convencional'>
                                    <option value='Convencional'>Convencional</option>
                                    <option value='Completos'>Completos</option>
                                    <option value='Extras'>Convencional + Extras($)</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label>Lugar</label>
                                <br/>
                                <div className="form-check-inline">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Propio</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Domicilio</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Moteles</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label>Ubicación</label>
                                <select className="form-control" name="" id="">
                                    <option value="Punta Arenas">Punta Arenas</option>
                                    <option value="Puerto Natales">Puerto Natalanes</option>
                                    <option value="Porvenir">Porvenir</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label>Horario</label>
                                <select className="form-control" name="" id="">
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Part-Time">Part-Time</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label>Precio</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Precio"  />
                                </div>
                            </div>
                            <div className="form-group col-md-2">
                                <label>Certificada</label>
                                <select className="form-control" defaultValue='0' name="" id="">
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label>Promo</label>
                                <select className="form-control" defaultValue='0' name="" id="">
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                        </div>
                        <input type="hidden" name="txt_serverDate" className="form-control" value={date}/>
                        <button type="submit" onClick={props.onHide} className="btn btn-primary">Crear</button>
                    </form>
                </div>
            </div>
        </div>          
        </Modal.Body>
      </Modal>
    );
}

export default UploadInformation;