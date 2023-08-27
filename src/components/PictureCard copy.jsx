import 'bootstrap/dist/css/bootstrap.min.css';

function PictureCard({ url, alt, photographer }) {
    return (
        <div className="card my-3 mx-2 px-2 py-2 text-white bg-dark">
            <div className="row g-0">
                <div className="col-md-auto">
                    <img src={url} className="card-img-top rounded center-block" alt={alt} />
                </div>
                <div className="col-md-auto">
                    <div className="card-body text-center">
                        <h5 className="card-title">{photographer}</h5>
                        <p className="card-text">{alt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PictureCard;                