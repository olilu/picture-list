import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function PictureCard({ id, url, alt, photographer, colortype, type, listID, originalPictures }) {
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function pictureAlreadyAdded(){
        for (let i = 0; i < originalPictures.length; i++) {
            if (originalPictures[i].id === id) {
                colortype = 'bg-success';
                return true;
            }
        }
        return false;
    }

    if (type === 'search' && pictureAlreadyAdded()) {
        colortype = 'bg-success';
    }

    async function addPicture() {
        console.log("add picture");
        await fetch(`http://localhost:8080/lists/${listID}/pictures`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: id, url: url, alt: alt, photographer: photographer}),
        })
    }

    async function deletePicture() {
        console.log(`delete picture, http://localhost:8080/lists/${listID}/pictures`);
        await fetch(`http://localhost:8080/lists/${listID}/pictures`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: id, url: url, alt: alt, photographer: photographer}),
        });
        // refresh page
        navigate(0);
    }

    const handleAdd = () => {
        setDisabled(true);
        addPicture();
    }

    const handleDelete = () => {   
        setDisabled(true);
        deletePicture();
    }

    return (
        <div className={`card my-3 mx-2 px-2 py-2 text-white ${colortype}`} style={{ "width": "18rem" }}>
            <img src={url} className="card-img-top rounded" alt={alt} />
            <div className="card-body">
                <h5 className="card-title">{photographer}</h5>
                <p className="card-text">{alt}</p>
            </div>
            <div className='card-footer'>                
                {type === 'search' && (
                    <button disabled={disabled || pictureAlreadyAdded()} type="button" className="btn btn-success" onClick={handleAdd}>Add</button>
                )}
                {type === 'list' && (
                    <button disabled={disabled} type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                )}
            </div>
        </div>
    )
}

export default PictureCard;                