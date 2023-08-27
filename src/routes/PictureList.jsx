import { useLoaderData } from "react-router-dom";
import PictureCard from "../components/PictureCard";
import SearchBar from "../components/SearchBar";
import 'bootstrap/dist/css/bootstrap.css';

function PictureList() {
  const pictures =  useLoaderData();
  return (
    <>
      <div className="row container-fluid justify-content-md-center">
        <SearchBar/>
      </div>
      <div className="row container-fluid justify-content-md-center">
        {pictures.length > 0 && (
          <>
            {pictures.map((picture) => <PictureCard 
              key={picture.id} 
              id={picture.id} 
              photographer={picture.photographer} 
              url={picture.url}
              alt={picture.alt}
              />)}
          </>
        )}
        {pictures.length === 0 && (
          <div className="mt-3 text-black text-center">
            <h2>There are no pictures yet</h2>
            <p>Start by searching for new pictures</p>
          </div>
        )}
      </div>
    </>
  );
}

export default PictureList;

export async function loader({ params }) {
  console.log(params.id);
  const res = await fetch(`http://localhost:8080/lists/${params.id}/pictures`);
  const resData = await res.json();
  console.log(resData.pictures);
  return resData.pictures;
}
 