import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

function SearchBar() {
    const { register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        // console.log(data.search);
        const res = await fetch(`http://localhost:8080/search/${data.search}`);
        if (!res.ok) {
            console.log("error");
            console.log(`${res.url} returned ${res.status} ${res.statusText}`);
        }
        // console.log(res);
        const resData = await res.json();
        // console.log(resData.pictures);
        let pictures;
        if (!resData.pictures) {
            console.log("no pictures");
            pictures = [];
        } else {
            pictures = resData.pictures;
        }
        sessionStorage.setItem("pictures", JSON.stringify(pictures));
        navigate('search');
    };

    return (
        <>
            <Form method='post' className="d-flex justify-content-center col-6" role="search" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control me-2" name="search" type="search" placeholder="Search" aria-label="Search" {...register("search", { required: true })}/>
                <button className="btn btn-dark" type="submit">Search</button>
            </Form>
        </>
    );
}

export default SearchBar;

