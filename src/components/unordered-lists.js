import React from "react"

function UnorderedLists(props) {
    return <ul className="mr-right navbar-nav unordered-produtos">
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
        <li>{props.item4}</li>
        <li>{props.item5}</li>
    </ul>
}

export default UnorderedLists;