import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div>
			<footer className="page-footer font-small cyan darken-3">
				<div className="container">
					<div className="row">
						<div className="col-md-12 py-5">
							<div className="mb-5 flex-center">
								<h3>Contáctanos</h3>
								<p>Queremos resolver tus inquietudes.</p>
								<a className="fb-ic" href='# '>
									<i className="fab fa-facebook-f fa-lg white-text mr-md-2"> /Under-Patagonia</i>
								</a>
								<a className="tw-ic" href='https://twitter.com/PatagoniaUnder' target='_blank' rel="noopener noreferrer">
									<i className="fab fa-twitter fa-lg white-text mr-md-2"> @PatagoniaUnder</i>
								</a>
								<br/><br/>
								<a className="gplus-ic" href='mailto:magallanesescort@gmail.com'>
									<i className="fa fa-envelope fa-lg white-text mr-md-2"> magallanesescort@gmail.com</i>
								</a>
								<br/><br/>
								<a className="ins-ic" href='https://www.instagram.com/under.patagonia/' target='_blank' rel="noopener noreferrer">
									<i className="fab fa-instagram fa-lg white-text mr-md-2"> Under.Patagonia</i>
								</a>
								<a className="wha-ic" href='https://wa.me/56941235790' target="_blank" rel="noopener noreferrer">
									<i className="fab fa-whatsapp fa-lg white-text mr-md-2"> +56 9 4123 5790</i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<section className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-md-12 ">
							<div className="text-center text-white">
								&copy; 2019 Under Patagonia. Todos los derechos reservados.
							</div>
						</div>
					</div>
				</div>
			</section>
        </div>
    );
}

export default Footer;