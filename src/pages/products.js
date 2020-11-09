import React, { Fragment } from "react"
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import SideBar from "../components/sidebar"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Titulo2 from "../components/titulo2"
import TituloPeso2 from "../components/titulopeso2"
import Subtitle from "../components/subtitulo"
import SubtitleProd2 from "../components/subtitulo_prod2"
import LinhaHorizontal from "../components/linhahorizontal"
import LinhaHorizontalVerde from "../components/linhahorizontal_Verde"
import QuadroTitulo from "../components/quadro-titulo"
import UnorderedLists from "../components/unordered-lists"
import QuadroTituloProd2 from "../components/quadro-titulo_prod2"
import UnorderedListsProd2 from "../components/unordered-lists_prod2"
import ObjetoProd1 from "../components/objeto_prod1"
import ObjetoProd3 from "../components/objeto_prod3"

function Products() {
    return (
        <Fragment>
            <main className="conteudo-produtos d-flex">
                <SideBar></SideBar>
                <Container>
                    <section className="produto1">
                        <Row>
                            <Col md="11">
                                <Navbar />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <Titulo2 titulo="soluções em" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <TituloPeso2 tituloSomos="conectividade e infraestrutura" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <LinhaHorizontal />
                                <div className="quadro">
                                    <ObjetoProd1 />
                                    <QuadroTitulo titulo="Para instituições financeiras, fintechs e negócios digitais" />
                                    <Subtitle subtitulo="Conectamos a sua instituição ao SFN de forma, ágil, eficiente e segura!" />
                                    <UnorderedLists item1="Serviços de PSTI" item2="Mensageira SPB e SPI ISO 20022" item3="Load Balance - alta performance para picos de utilização" item4="Stand-in - conexão ininterrupta com a RSFN" />
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="produto2">
                        <Row>
                            <Col md="12">
                                <LinhaHorizontalVerde />
                                <div className="quadro quadro-prod2">
                                    <QuadroTituloProd2 titulo="Plataforma Lina BaaS" />
                                    <SubtitleProd2 subtitulo="Solução cloud-native de alta disponibilidade, 100% whitelabel." />
                                    <UnorderedListsProd2 item1="Conta digital" item2="Aplicativo iOS e Android
" item3="Pagamentos PIX, TED, Boleto e Cartões
" item4="Split de pagamentos
" />
                                </div>
                            </Col>
                        </Row>
                    </section>
                    <section className="produto3">
                        <Row>
                            <Col md="12">
                                <LinhaHorizontal />
                                <div className="quadro">
                                    <ObjetoProd3 />
                                    <QuadroTitulo titulo="Securities Settlement Services" />
                                    <Subtitle subtitulo="Serviços de compensação, liquidação e reconciliação de pagamentos, voltados a
Infraestruturas do Mercado Financeiro (IMF)." />
                                    <UnorderedLists item1="LBTR - Liquidação Bruta em Tempo Real
" item2="Plataforma LDL - Liquidação Diferida Liquida" item3="Compensação de saldos bilaterais e multilaterais entre participantes" item4="DvP - Delivery vs. Payment" />
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </main>
            <Footer />
        </Fragment >
    )
}

export default Products;