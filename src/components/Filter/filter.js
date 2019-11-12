import React from 'react';
import './filter.css'

const Filter = (criteria) => {
    console.log(criteria);
    return (
        <div>
            <div className="sortby">
                <ul id="nav">
                    <li className="dropdown">
                        <a href="#" id="texto-calificacion">recién llegadas</a>
                        <span className="pe-angle-down"></span>
                        <div className="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCalificacion" calificacion="0">Todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchRating" idficha="">Mejor Rating</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchRetoque" idficha="">Menor Retoque</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCalificacion" calificacion="1">Con Calificacion</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchAnal" anal="0">La mejor en sexo anal</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchOral" oral="0">La mejor en sexo oral</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" calificadas="103" className="searchCalificadas">Las mas calificadas</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#" id="texto-contextura">contextura</a>
                        <span className="pe-angle-down"></span>
                        <div className="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchContextura" idcontextura="0">Todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchContextura" idcontextura="3">Muy delgada</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchContextura" idcontextura="4">Delgada</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchContextura" idcontextura="5">Media / Normal</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchContextura" idcontextura="9">Normal / Voluptuosa</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchContextura" idcontextura="8">Tonificada</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchContextura" idcontextura="7">Media / Gruesa	</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="dropdown">
                        <a href="#" id="texto-color-piel">color de piel</a>
                        <span className="pe-angle-down"></span>
                        <div className="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchPiel" idcolorpiel="0">Todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchPiel" idcolorpiel="3">Blanca </a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchPiel" idcolorpiel="4">Morena</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchPiel" idcolorpiel="5">Mulata</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchPiel" idcolorpiel="9">Mulato</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchPiel" idcolorpiel="6">Negra</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchPiel" idcolorpiel="7">Trigueña</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="dropdown">
                        <a href="#" id="texto-color-cabello">color de cabello</a>
                        <span className="pe-angle-down"></span>
                        <div className="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCabello" idcolorcabello="0">Todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCabello" idcolorcabello="8">Castaño</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCabello" idcolorcabello="13">Castaño oscuro</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCabello" idcolorcabello="10">Colorina</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCabello" idcolorcabello="14">Morado</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCabello" idcolorcabello="9">Negro</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCabello" idcolorcabello="11">Otro</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCabello" idcolorcabello="12">Rojizo</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchCabello" idcolorcabello="7">Rubio</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="dropdown">
                        <a href="#" id="texto-color-ojo">color de ojos</a>
                        <span className="pe-angle-down"></span>
                        <div className="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchOjo" idcolorojo="0">Todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchOjo" idcolorojo="4">Azules</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchOjo" idcolorojo="7">Celestes</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchOjo" idcolorojo="2">Marrones</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchOjo" idcolorojo="8">Miel</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchOjo" idcolorojo="9">Morados</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchOjo" idcolorojo="3">Negros</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchOjo" idcolorojo="6">Pardos</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" className="searchOjo" idcolorojo="5">Verdes</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#" id="texto-estatura">estatura</a>
                        <span className="pe-angle-down"></span>
                        <div className="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" idestaura="0" className="searchEstatura">todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" idestaura="145" className="searchEstatura">pocket</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" idestaura="160" className="searchEstatura">hasta 1,60 cm</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" idestaura="170" className="searchEstatura">hasta 1,70 cm.</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" idestaura="175" className="searchEstatura">sobre 1,75 cm.</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;