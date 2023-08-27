import 'bootstrap/dist/css/bootstrap.css';
import { useLoaderData } from "react-router-dom";
import ListCard from "./ListCard";
import AddListCard from './addListCard';


function Lists() {
    const lists =  useLoaderData();
    // every jsx element that is part of a list needs a key prop, ideally the key should be unique
    return (
      <div className="row container-fluid justify-content-md-center">
        {lists.length > 0 && (
            <>
                {lists.map((list) => <ListCard key={list.id} id={list.id} creator={list.creator} name={list.name} />)}
            </> 
        )}
        <AddListCard />
      </div>
    );
}

export default Lists;
