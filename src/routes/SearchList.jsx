import { useLoaderData } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import PictureCard from "../components/PictureCard";

function SearchList() {
  const pictures =  useLoaderData();
  return (
    <>
      <div className="row container-fluid justify-content-md-center">
        {pictures.length > 0 && (
          <>
            {pictures.map((picture) => <PictureCard 
              key={picture.id} 
              id={picture.id} 
              photographer={picture.photographer} 
              url={picture.url}
              alt={picture.alt}
              colortype='bg-secondary'
              />)}
          </>
        )}
        {pictures.length === 0 && (
          <div className="mt-3 text-black text-center">
            <p>No pictures found</p>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchList;

export async function loader() {
  const pictureList = JSON.parse(sessionStorage.getItem("pictures"));
  console.log(pictureList);
  return pictureList;
}
 