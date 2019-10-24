import React from 'react';
import firebase from '../../Firebase/firebase';
import './UploadInformation.css';
import { Modal } from 'react-bootstrap';

const UploadInformation = (props) => {
    const submitInformation = (e) => {

        e.preventDefault();
    
        const modelID = e.target.elements.txt_modelID.value.trim();
        const name = e.target.elements.txt_name.value.trim();
        const nacionality = e.target.elements.slt_nacionality.value;
        const age = e.target.elements.txt_age.value;
        const gender = e.target.elements.slt_gender.value;
        const peso = e.target.elements.txt_peso.value;
        const estatura = e.target.elements.txt_estatura.value;
        const boobs = e.target.elements.txt_busto.value;
        const cintura = e.target.elements.txt_cintura.value;
        const ass = e.target.elements.txt_ass.value;
        const hairColor = e.target.elements.txt_hairColor.value;
        const services = e.target.elements.slct_services.value;
        const placePropio = e.target.elements.chk_propio.checked;
        const placeDomicilio = e.target.elements.chk_domicilio.checked;
        const placeMotel = e.target.elements.chk_moteles.checked;
        const city = e.target.elements.slct_city.value;
        const times = e.target.elements.slct_times.value;
        const certified = e.target.elements.chk_certified.checked;
        const contact_number = e.target.elements.txt_num_contacto.value;
        const promo = e.target.elements.chk_promo.checked;
        const priceMomento = e.target.elements.txt_price_momento.value;
        const priceMedia = e.target.elements.txt_price_media.value;
        const priceHr = e.target.elements.txt_price_hr.value;
    
    
        firebase.database().ref('Models/' + modelID).set({
            name: name,
            nacionality: nacionality,
            age: age,
            gender : gender,
            weight: peso,
            height: estatura,
            boobs: boobs,
            waist: cintura,
            ass: ass,
            hairColor: hairColor,
            services: services,
            place: {
                propio: placePropio,
                domicilio: placeDomicilio,
                motel: placeMotel
            },
            thumbnail: '',
            images: {
                0: '',
                1: '',
                2: ''
            },
            city: city,
            times: times,
            price: {
                hr: priceHr,
                media_hr: priceMedia,
                momento: priceMomento
            },
            contact_number: contact_number,
            certified: certified,
            promo: promo,

    
            creationDate: firebase.database.ServerValue.TIMESTAMP
        });
        props.onHide();
    }
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
                                        <label><b>Model ID</b></label>
                                        <input type="text" name="txt_modelID" className="form-control" placeholder="ID de Modelo" required/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Nombre</label>
                                        <input type="text" name="txt_name" className="form-control" placeholder="Nombre" required/>
                                    </div>
                                    
                                    <div className="form-group col-md-2">
                                        <label>Nacionalidad</label>
                                        <select name="slt_nacionality" className="form-control" required>
                                            <option value="Chile">Chile</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Perú">Perú</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="República Dominicana">República Dominicana</option>
                                            <option value="Cuba">Cuba</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label>Edad</label>
                                        <input type="text" name="txt_age" className="form-control" placeholder="Edad" required/>
                                    </div>

                                    <div className="form-group col-md-2">
                                        <label>Genero</label>
                                        <select name='slt_gender' className="form-control" defaultValue='Femenino' required>
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
                                            <input type="text" name='txt_peso' className="form-control" placeholder="Peso"  required/>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Kg.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Estatura</label>
                                        <div className="input-group">
                                            <input name='txt_estatura' type="text" className="form-control" placeholder="Estatura"  required/>
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
                                            <input name='txt_hairColor' type="text" className="form-control" placeholder="Color de Cabello"  required/>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Servicios</label>
                                        <select name="slct_services" className="form-control" defaultValue='Convencional' required>
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
                                                <input name="chk_propio" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">Propio</label>
                                            </div>
                                            <div className="form-check">
                                                <input name="chk_domicilio" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">Domicilio</label>
                                            </div>
                                            <div className="form-check">
                                                <input name="chk_moteles" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">Moteles</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label>Ubicación</label>
                                        <select name="slct_city" className="form-control" defaultValue='Punta Arenas'>
                                            <option value="Punta Arenas">Punta Arenas</option>
                                            <option value="Puerto Natales">Puerto Natalanes</option>
                                            <option value="Porvenir">Porvenir</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label>Horario</label>
                                        <select name='slct_times' className="form-control" id="">
                                            <option value="Full-Time">Full-Time</option>
                                            <option value="Part-Time">Part-Time</option>
                                        </select>
                                    </div>
                                    <div className="form-check-inline">
                                        <div className="form-check">
                                            <input name="chk_certified" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">Certificada</label>
                                        </div>
                                        <div className="form-check">
                                            <input name="chk_promo" className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label className="form-check-label" htmlFor="inlineCheckbox1">Promo</label>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Número de Contacto</label>
                                        <div className="input-group">
                                            <input type="text" name='txt_num_contacto' className="form-control" placeholder="Teléfono"  required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>Valor Hora</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input name='txt_price_hr' type="text" className="form-control" placeholder="Hora"  />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4">
                                    <label>Valor Media Hr.</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input name='txt_price_media' type="text" className="form-control" placeholder="Media Hr."  />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4">
                                    <label>Valor Momento</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input name='txt_price_momento' type="text" className="form-control" placeholder="Momento"  />
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <button type="submit" className="btn btn-primary">Crear</button>
                            </form>
                        </div>
                    </div>
                </div>          
            </Modal.Body>
        </Modal>
    );
}

export default UploadInformation;