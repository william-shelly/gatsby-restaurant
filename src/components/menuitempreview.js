import React from 'react'

export default function MenuItemPreview({node}) {
    return (
        <>
            <div className="col-12 col-lg-6 mb-4">
                <div className="row">
                    {node.image.file.url ? <div className="menu-item-img col-12 col-lg-6"><img src={node.image.file.url} alt={node.name} loading="lazy" /></div> : undefined }
                    <div className="menu-item-description col-12 col-lg-6 text-center text-lg-left">
                        <h2>{node.name}</h2>
                        <p><span dangerouslySetInnerHTML={{ __html: node.description.description}}></span></p>
                        <p className="text-center text-lg-left">${node.price}</p>
                        <a className="btn btn-primarycolor d-sm-inline-block text-white" href="#0">View {node.name}</a>
                    </div>
                </div>
            </div>
        </>
    )
}
