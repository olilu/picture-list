import { Form, Outlet, redirect } from "react-router-dom";

function SearchBar() {
    return (
        <>
            <Form method='post' className="d-flex justify-content-center col-6" role="search">
                <input className="form-control me-2" name="query" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-dark" type="submit">Search</button>
            </Form>
            <Outlet />
        </>
    );
}

export default SearchBar;