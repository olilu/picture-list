import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { MdPlaylistAdd } from "react-icons/md";

function AddListCard() {
    return (
        <div className="card my-3 mx-2 text-center text-white bg-secondary" style={{ width: '10rem' }}>
            <Link to="/new-list" className="link-light text-decoration-none">
                <div className="card-body">
                    <MdPlaylistAdd size={25} />
                    <h5 className="card-title">Add List</h5>
                    <h6 className="card-subtitle fst-italic mb-2">click me</h6>
                </div>
            </Link>
        </div>
    )
};

export default AddListCard;