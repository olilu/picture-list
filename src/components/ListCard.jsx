import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { MdList } from "react-icons/md";

function ListCard({id, name, creator}) {
    return (
        <div className="card my-3 mx-2 text-center text-white bg-dark" style={{width: '10rem'}}>
            <Link to={id} className="link-light text-decoration-none">
                <div className="card-body">
                        <MdList size={25}/>
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle fst-italic mb-2">{creator}</h6>
                </div>
            </Link>
        </div>
    )
};

export default ListCard;