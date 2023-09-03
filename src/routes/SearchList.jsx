import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import PictureCard from "../components/PictureCard";
import { loader as pictureListLoader } from '../routes/PictureList';

function SearchList() {
  const [pictures, listID ] =  useLoaderData();
  const [originalPictures, setOriginalPictures] = useState([])

  // fetch original list to check if picture is already added
  useEffect(() => {
    async function fetchPictures() {
      const [origPictures, id] = await pictureListLoader({params: {id: listID}});
      console.log("original pictures")
      console.log(origPictures);
      setOriginalPictures(origPictures);
    }
    fetchPictures();
  }, []);
  return (
    <>
      <div className="container-fluid justify-content-md-center">
          <Link className="btn btn-primary" to="../pictures">Done</Link>
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
              colortype='bg-secondary'
              type='search'
              listID={listID}
              originalPictures={originalPictures}
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

export async function loader( {params} ) {
  const pictureList = JSON.parse(sessionStorage.getItem("pictures"));
  // console.log(pictureList);
  return [pictureList, params.id];
}
 