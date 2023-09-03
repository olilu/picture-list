import 'bootstrap/dist/css/bootstrap.css';
import Lists from "../components/Lists";

function ListOverview() {
    return (
        <>
            <Lists />
        </>
    );
}

export default ListOverview;

export async function loader() {
    const response = await fetch('http://localhost:8080/lists');
    const resData = await response.json();
    // console.log(resData.lists);
    return resData.lists;
};