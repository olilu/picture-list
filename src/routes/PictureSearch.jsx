import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../components/SearchBar';
import { Outlet } from 'react-router';

function PictureSearch() {
    return (
        <>
            <div className="row container-fluid justify-content-md-center">
                <SearchBar />
            </div>
            <Outlet />
        </>

    );

};

export default PictureSearch;
