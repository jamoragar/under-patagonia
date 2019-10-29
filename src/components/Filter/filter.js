import React from 'react';
import './filter.css'

const Filter = (criteria) => {
    console.log(criteria);
    return (
        <div>
            <div class="sortby">
                <ul id="nav">
                    <li class="dropdown">
                        <a href="#" id="texto-calificacion">recién llegadas</a>
                        <span class="pe-angle-down"></span>
                        <div class="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCalificacion" calificacion="0">Todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchRating" idficha="">Mejor Rating</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchRetoque" idficha="">Menor Retoque</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCalificacion" calificacion="1">Con Calificacion</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchAnal" anal="0">La mejor en sexo anal</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchOral" oral="0">La mejor en sexo oral</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" calificadas="103" class="searchCalificadas">Las mas calificadas</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" id="texto-contextura">contextura</a>
                        <span class="pe-angle-down"></span>
                        <div class="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchContextura" idcontextura="0">Todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchContextura" idcontextura="3">Muy delgada</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchContextura" idcontextura="4">Delgada</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchContextura" idcontextura="5">Media / Normal</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchContextura" idcontextura="9">Normal / Voluptuosa</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchContextura" idcontextura="8">Tonificada</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchContextura" idcontextura="7">Media / Gruesa	</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="dropdown">
                        <a href="#" id="texto-color-piel">color de piel</a>
                        <span class="pe-angle-down"></span>
                        <div class="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchPiel" idcolorpiel="0">Todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchPiel" idcolorpiel="3">Blanca </a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchPiel" idcolorpiel="4">Morena</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchPiel" idcolorpiel="5">Mulata</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchPiel" idcolorpiel="9">Mulato</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchPiel" idcolorpiel="6">Negra</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchPiel" idcolorpiel="7">Trigueña</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="dropdown">
                        <a href="#" id="texto-color-cabello">color de cabello</a>
                        <span class="pe-angle-down"></span>
                        <div class="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCabello" idcolorcabello="0">Todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCabello" idcolorcabello="8">Castaño</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCabello" idcolorcabello="13">Castaño oscuro</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCabello" idcolorcabello="10">Colorina</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCabello" idcolorcabello="14">Morado</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCabello" idcolorcabello="9">Negro</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCabello" idcolorcabello="11">Otro</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCabello" idcolorcabello="12">Rojizo</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchCabello" idcolorcabello="7">Rubio</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="dropdown">
                        <a href="#" id="texto-color-ojo">color de ojos</a>
                        <span class="pe-angle-down"></span>
                        <div class="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchOjo" idcolorojo="0">Todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchOjo" idcolorojo="4">Azules</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchOjo" idcolorojo="7">Celestes</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchOjo" idcolorojo="2">Marrones</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchOjo" idcolorojo="8">Miel</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchOjo" idcolorojo="9">Morados</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchOjo" idcolorojo="3">Negros</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchOjo" idcolorojo="6">Pardos</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" class="searchOjo" idcolorojo="5">Verdes</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="#" id="texto-estatura">estatura</a>
                        <span class="pe-angle-down"></span>
                        <div class="dropdown-content">
                            <ul>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" idestaura="0" class="searchEstatura">todas</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" idestaura="145" class="searchEstatura">pocket</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" idestaura="160" class="searchEstatura">hasta 1,60 cm</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" idestaura="170" class="searchEstatura">hasta 1,70 cm.</a>
                                </li>
                                <li>
                                    <span>&nbsp;</span>
                                    <a href="#" idestaura="175" class="searchEstatura">sobre 1,75 cm.</a>
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