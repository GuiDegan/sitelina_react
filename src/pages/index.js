import React, { Fragment } from "react"
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import CookieConsent from "react-cookie-consent"
import Navbar from "../components/navbar"
import SideBar from "../components/sidebar"
import Footer from "../components/footer"
import Titulo from "../components/titulo"
import TituloLiquidacao from "../components/titulo_liq"
import TituloPeso from "../components/titulopeso"
import TituloPesoLiquidacao from "../components/titulopeso_liq"
import Paragrafo from "../components/paragrafo"
import ParagrafoLiquidacao from "../components/paragrafo_liq"
import Retangulo from "../components/retangulo"
import RetanguloLiquidacao from "../components/retangulo_liq"
import LinhaVertical from "../components/linhavertical_somos"
import LinhaVerticalLiquidacao from "../components/linhavertical_liq"
import LinhaVerticalTec from "../components/linhavertical_tec"
import ImagemSecaoSomos from "../components/imagem_somos"
import ImagemSecaoSomos_Mobile from "../components/imagem_somosM"
import ImagemSecaoLiquidacao from "../components/imagem_liq"
import ImagemSecaoLiquidacao_Mobile from "../components/imagem_liqM"
import ImagemSecaoTecnologia from "../components/imagem_tec"
import ImagemSecaoTecnologia_Mobile from "../components/imagem_tecM"
import BtnSecondary from "../components/btnsecondary"
import BtnInfo from "../components/btninfo"
import ModalSecao from "../components/modal"

function Home() {
  return (
    <Fragment>
      <main className="conteudo d-flex">
        <CookieConsent
          location="bottom"
          buttonText="Compreendo!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#ffffff", fontSize: "16px", color: "#000000", fontFamily: "Gilroy" }}
          buttonStyle={{ color: "#ffffff", fontSize: "16px", backgroundColor: "#006566", fontWeight: 600, letterSpacing: 1.2 }}
          expires={150}
        >
          Este site usa cookies para garantir que você obtenha a melhor experiência em nosso site. <a href="/politica">Saiba Mais</a>{" "}
        </CookieConsent>
        <SideBar></SideBar>
        <Container>
          <section>
            <Row>
              <Col md="12">
                <Navbar />
              </Col>
            </Row>
          </section>
          <section className="secao1">
            <Col md="7">
              <ImagemSecaoSomos_Mobile />
            </Col>
            <Row>
              <Col md="12">
                <Titulo titulo="somos" />
              </Col>
            </Row>
            <Row>
              <Col md="11">
                <TituloPeso tituloSomos="infratech" />
              </Col>
              <Col md="1">
                <Retangulo />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Paragrafo paragrafo="A Lina é a mais nova infraestrutura de pagamentos do mercado brasileiro. Somos um hub de conectividade para FinTechs e negócios digitais, e nascemos com o propósito de transformar o Sistema Financeiro Nacional, promovendo interoperabilidade e convivência entre os meios atuais e os novos ecossistemas de pagamentos instantâneos PIX e Open Banking" />
              </Col>
              <Col md="7">
                <ImagemSecaoSomos />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <LinhaVertical />
              </Col>
            </Row>
            <Row>
              <Col md="5">
                <BtnSecondary />
              </Col>
            </Row>
          </section>
          <section className="secao2">
            <Col md="7">
              <ImagemSecaoLiquidacao_Mobile />
            </Col>
            <Row>
              <Col md="12">
                <TituloLiquidacao titulo="descomplicamos a" />
              </Col>
            </Row>
            <Row>
              <Col md="1">
                <RetanguloLiquidacao />
              </Col>
              <Col md="11">
                <TituloPesoLiquidacao tituloSomos="liquidação" />
              </Col>
            </Row>
            <Row>
              <Col md="7">
                <ImagemSecaoLiquidacao />
              </Col>
              <Col md="4">
                <ParagrafoLiquidacao paragrafo="A combinação ÚNICA de expertise técnica, domínio do negócio e invoação tecnológica, capaz de possibilitar processos de liquidação financeira inteligentes e simplificados.Liquidamos pagamentos de forma intuitiva e inovadora, não importa o instrumento!" />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <LinhaVerticalLiquidacao />
              </Col>
            </Row>
            <Row>
              <Col md="7">
                <BtnSecondary />
              </Col>
            </Row>
          </section>
          <section className="secao3">
            <Col md="7">
              <ImagemSecaoTecnologia_Mobile data-aos="fade-up" />
            </Col>
            <Row>
              <Col md="12">
                <Titulo titulo="apaixonados por" />
              </Col>
            </Row>
            <Row>
              <Col md="11">
                <TituloPeso tituloSomos="tecnologia" />
              </Col>
              <Col md="1">
                <Retangulo />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Paragrafo paragrafo="Nos orgulhamos de ser uma empresa de tecnologia e somos apaixonados por nossas soluções. E é exatamente por isso que integrar com a Lina é um processo fácil e transparente. É sempre um prazer falar dos nossos serviços e das nossas APIs" />
              </Col>
              <Col md="7">
                <ImagemSecaoTecnologia />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <LinhaVerticalTec />
              </Col>
            </Row>
            <Row>
              <Col md="5">
                <BtnSecondary />
              </Col>
            </Row>
          </section>
          <section>
            <Row>
              <Col md="6">
                <BtnInfo btninfo="faça parte!" />
              </Col>
              <Col className="btn_info_API" md="6">
                <BtnInfo btninfo="referência API" />
              </Col>
            </Row>
          </section>
        </Container>
      </main>
      <ModalSecao />
      <Footer />
    </Fragment >
  )
}

export default Home;