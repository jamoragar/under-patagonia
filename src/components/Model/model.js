import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase';
import { Spinner, Col, Row } from 'react-bootstrap'
import TabImageGallery from '../TabImageGallery/tabImageGallery';
import './model.css';


const Model = (props) => {
    const param = props.match.params.id;
    const ModelId = param.split("_")[0];
    const [model, setModel] = useState(null);

    useEffect(() => {
        firebase.database().ref('Models/' + ModelId).on('value', (snapshot) => {
            // var key = Object.keys(snapshot.val());
            setModel(snapshot.val())
        });

    }, [ModelId]);

    
    if(model){
        console.log(model)
        return (
            <div className='Model'>
                <div className="bg-light">
                    <div className="tittle">
                        <h1>{model.name.toUpperCase()}</h1>
                        <p>Ubicada en {model.city}</p>
                    </div>
                    <div className='review'>
                        <Row>
                            <Col>
                                <TabImageGallery />
                            </Col>
                            <Col>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Incluidos</th>
                                            <th scope="col">Adicionales</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Test1</th>
                                            <th>Test2</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="Loading">
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="danger" />
            </div>
        )
    }
}

export default Model;