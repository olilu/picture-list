import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout';
import PictureList, {loader as pictureListLoader} from './routes/PictureList';
import PictureSearch from './routes/PictureSearch';
import ListOverview, {loader as listLoader}  from './routes/ListOverview';
import NewList, {action as newListAction} from './routes/NewList';
import SearchList, {loader as searchListLoader} from './routes/SearchList';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  [
    { path: '/', element: <RootLayout />, children: [
      { path: '/', element: <ListOverview />, loader: listLoader},
      { path: 'new-list', element: <NewList />, action: newListAction},
      { path: ':id', element: <PictureSearch />, children: [
        { path: 'search', element: <SearchList />, loader: searchListLoader},
        { path: 'pictures', element: <PictureList />, loader: pictureListLoader},
    ]},
  ]},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
