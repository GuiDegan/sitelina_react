import React, { Fragment } from "react"
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import SideBar from "../components/sidebar"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Title from "../components/title"
import LinhaHorizontal from "../components/linhahorizontal"
import Subtitle from "../components/subtitulo"
import UnorderedLists from "../components/unordered-lists"

function Products() {
    return (
        <Fragment>
            <main className="conteudo d-flex">
                <SideBar></SideBar>
                <Container>
                    <Row>
                        <Col md="11">
                            <Navbar />
                        </Col>
                    </Row>
                </Container>
            </main>
        </Fragment>
    )
}

export default Products;