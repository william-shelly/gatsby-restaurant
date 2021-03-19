import React from 'react'
import Default from "../layouts/default.js"

export default function MenuContentPage({pageContext}) {
    const { menuContent } = pageContext;

    return (
        <Default>
            <h1>{menuContent.name}</h1>
            <img src={menuContent.image.file.url} alt={menuContent.name} />
            <p>{menuContent.description.description}</p>
        </Default>
    )
}
