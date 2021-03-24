import React from 'react'
import { Link } from 'gatsby'
import Default from "../layouts/default.js"

export default function MenuContentPage({pageContext}) {
    const { menuContent } = pageContext;

    return (
        <Default>
            <div className="menu-content-page container">
                <div className="row mx-0 px-0 mb-4 text-center text-lg-left">
                    {menuContent.image.file.url ? <div className="menu-item-img col-12 col-lg-8 mb-4"><img src={menuContent.image.file.url} alt={menuContent.name} loading="lazy" /></div> : undefined }
                    <div className="menu-item-copy col-12 col-lg-4">
                        <h1>{menuContent.name}</h1>
                        <p><span dangerouslySetInnerHTML={{ __html: menuContent.description.description}}></span></p>
                        <p><Link className="btn btn-primarycolor d-sm-inline-block text-white" to="/">Return to Home</Link></p>
                    </div>
                </div>
            </div>
        </Default>
    )
}
