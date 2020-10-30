import React from "react"
import SideBar from "../components/sidebar"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Title from "../components/title"
import LinhaHorizontal from "../components/linhahorizontal"
import Subtitle from "../components/subtitulo"
import UnorderedLists from "../components/unordered-lists"

function Products() {
    return (
        <main className="conteudo">
            <div className="container">
                <Navbar />
                <SideBar />
                <Footer />
                <Title />
                <UnorderedLists />
                <Subtitle />
                <LinhaHorizontal />
            </div>
        </main>
    )
}

export default Products;