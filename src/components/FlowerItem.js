import React from "react"

const FlowerItem = ({onClick, bought, text}) => (
    <li
        onClick = {onClick}
        style = {{
            textDecoration: bought ? "line-through" : "none"
        }}>
        {text}
    </li>
)

export default FlowerItem