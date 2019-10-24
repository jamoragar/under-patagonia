import React, {useState} from "react";
import {Card, Button} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from '../Image/Image';


import './Promotion.css';

const Promotion = (models) => {

    
    const [imageModalShow, setImageModalShow] = useState(false);
    const [selectedModel, setSelectedModel] = useState('');

    let promotionModels = [];
    models.models.map((model, index) => {
        if(model.promo === true){
            promotionModels[index] = model
        }
    });

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

    return (
        <div className="Promotion">
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container-with-dots"
                autoPlay={3000}
                draggable
                focusOnSelect={false}
                infinite={true}
                keyBoardControl
                minimumTouchDrag={80}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
            {
                promotionModels.map((model, key) => { 
                    let creationDate = new Date(model.creationDate).toLocaleDateString("en-GB");
                    return(
                        <Card className="Card" key={key} > 
                            <Card.Body>
                                <Card.Title>
                                    {model.name}
                                </Card.Title>
                                <img className="Img" src={model.thumbnail} alt={"Under-Patagonia" + model.name}/>
                            </Card.Body>
                            <Button className="ButtonCard" variant="danger" onClick={() => {
                                                setImageModalShow(true)
                                                setSelectedModel(model)}
                                                }>
                                Ver
                            </Button>
                            <Card.Footer>
                                <small className="text-muted">{"Subido el " + creationDate}</small>
                            </Card.Footer>
                        </Card>
                    )
                })
            }
            </Carousel>
                <Image
                    show={imageModalShow}
                    onHide={() => setImageModalShow(false)}
                    model={selectedModel}
                />
        </div>
        
    );
}
export default Promotion;