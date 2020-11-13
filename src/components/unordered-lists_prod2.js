import React from "react"

function UnorderedListsProd2(props) {
    return <ul className="mr-right navbar-nav unordered-produtos unordered-produtos_prod2">
        <li type="square" className="text-white">{props.item1}</li>
        <li type="square" className="text-white">{props.item2}</li>
        <li type="square" className="text-white">{props.item3}</li>
        <li type="square" className="text-white">{props.item4}</li>
        <li type="square" className="text-white">{props.item5}</li>
        <li type="square" className="text-white">{props.item6}</li>
        <li type="square" className="text-white">{props.item7}</li>
    </ul>
}

export default UnorderedListsProd2;