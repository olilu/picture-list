import 'bootstrap/dist/css/bootstrap.min.css';

function PictureCard({ url, alt, photographer }) {
    return (

        <div className="card my-3 mx-2 px-2 py-2 text-white bg-dark" style={{"width": "18rem"}}>
            <img src={url} class="card-img-top rounded" alt={alt}/>
            <div className="card-body">
                <h5 className="card-title">{photographer}</h5>
                <p className="card-text">{alt}</p>
            </div>
        </div>
    )
}

export default PictureCard;                