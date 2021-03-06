import React, { Fragment } from "react"
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SideBar from "../components/sidebar"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Title from "../components/title"
import TitlePeso from "../components/title-peso"
import Paragrafo from "../components/paragrafo"
import Retangulo from "../components/retangulo"
import LinhaVertical from "../components/linhavertical"
import ImagemSecaoSomos from "../components/imagemsecao"

function Home() {
  return (
    <Fragment>
      <main className="conteudo d-flex">
        <SideBar></SideBar>
        <Container>
          <Row>
            <Col md="11" sm="12">
              <Navbar />
            </Col>
            <Col md="12">
              <Title />
            </Col>
            <Col md="12">
              <TitlePeso />
            </Col>
            <Col md="4">
              <Paragrafo />
            </Col>
            <Col md="7">
              <ImagemSecaoSomos />
            </Col>
            <Col md="1">
              <Retangulo />
            </Col>
          </Row>
        </Container>
      </main>
    </Fragment>
  )
}

export default Home;