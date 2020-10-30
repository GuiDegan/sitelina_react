import React from "react"
import SideBar from "../components/sidebar"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Title from "../components/title"
import TitlePeso from "../components/title-peso"
import Paragrafo from "../components/paragrafo"
import Retangulo from "../components/retangulo"
import BotaoSaibaMais from "../components/botao"
import LinhaVertical from "../components/linhavertical"

var nome = "Este é o paragrafo da 1° seção.";

function Home() {
  return (
    <main className="conteudo">
      <div className="container">
        <Navbar />
        <SideBar />
        <Footer />
        <Title />
        <LinhaVertical />
        <Retangulo />
        <TitlePeso />
        <Paragrafo />
        <BotaoSaibaMais />
      </div>
    </main>
  )
}

export default Home;