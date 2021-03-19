import React from 'react'
import Default from "../layouts/default.js"

export default function MenuContentPage({pageContext}) {
    const { menuContent } = pageContext;

    return (
        <Default>
            <div className="menu-item-description col-12 mx-0 px-0 mb-4 text-center text-lg-left">
                {menuContent.image.file.url ? <div className="menu-item-img col-12 col-lg-12 mb-4"><img src={menuContent.image.file.url} alt={menuContent.name} loading="lazy" /></div> : undefined }
                <h1>{menuContent.name}</h1>
                <p><span dangerouslySetInnerHTML={{ __html: menuContent.description.description}}></span></p>
            </div>
        </Default>
    )
}
