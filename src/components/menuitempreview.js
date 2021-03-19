export default function MenuItemPreview(props) {
    return (
        <>
            {props.image ? <div className="menu-item-img col-12 col-lg-3 mb-4"><img src={props.image} alt={props.name} loading="lazy" /></div> : undefined }
            <div className="menu-item-description col-12 col-lg-3 mb-4 text-center text-lg-left">
                <h2>{props.name}</h2>
                <p><span dangerouslySetInnerHTML={{ __html: props.description}}></span></p>
                <p className="text-center text-lg-left">${props.price}</p>
                <a class="btn btn-primarycolor d-sm-inline-block text-white" href="#0">View {props.name}</a>
            </div>
        </>
    )
}
