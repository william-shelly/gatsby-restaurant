export default function MenuItemPreview(data) {
    const menuContents = data.allContentfulMenuContents.edges;
    return (
        <>
            {menuContents.map( ({ node, index}) => (
                <div>
                    {node.image.file.url ? <div className="menu-item-img col-12 col-lg-3 mb-4"><img src={node.image.file.url} alt={node.name} loading="lazy" /></div> : undefined }
                    <div className="menu-item-description col-12 col-lg-3 mb-4 text-center text-lg-left">
                        <h2>{node.name}</h2>
                        <p><span dangerouslySetInnerHTML={{ __html: node.description.description}}></span></p>

                        <p className="text-center text-lg-left">${node.price}</p>
                        <a className="btn btn-primarycolor d-sm-inline-block text-white" href="#0">View {node.name}</a>
                    </div>
                </div>
            ))}
        </>
    )
}
