import React from "react"

function UnorderedLists(props) {
    return <ul className="mr-right unordered_list">
        <li type="square"><span>{props.item1}</span></li>
        <li type="square"><span>{props.item2}</span></li>
        <li type="square"><span>{props.item3}</span></li>
        <li type="square"><span>{props.item4}</span></li>
    </ul>
}

export default UnorderedLists;