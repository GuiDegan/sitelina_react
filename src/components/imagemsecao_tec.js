import React, { useEffect } from "react"
import ImagemSecaoTec from '../assets/Home_Lina_3.png'
import ScrollAnimation from 'react-animate-on-scroll'

function ImagemSecaoTecnologia() {
    return <ScrollAnimation animateIn="testandoslide">
        <img className="imagem testandoslide hide-m" src={ImagemSecaoTec} alt="Imagem da Seção Tecnologia." />
    </ScrollAnimation>
}

export default ImagemSecaoTecnologia;