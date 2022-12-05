import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componens/Home/Home';
import About from './componens/About/About';
import Products from './componens/Products/Products';
import Main from './layout/Main';
import Friends from './componens/Firends/Friends';
import FriendDetails from './componens/FriendDetails/FriendDetails';
import Posts from './componens/Posts/Posts';
import PostDetails from './componens/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
      {path:'/',element:<Home></Home>},
      {path:'/home',element:<Home></Home>},
      {path:'/products',element:<Products></Products>},
      {path:'/friends',
      loader:async ()=> {
        return fetch('https://jsonplaceholder.typicode.com/users')
      },
       element:<Friends></Friends>},

       {
        path:`/friend/:friendId`,
        loader:async ({params})=>{
          // console.log(params.friedId);
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        element:<FriendDetails></FriendDetails>
       },
       {
        path:'/posts',
        loader:async()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element:<Posts></Posts>
       },
       {
        path:'/post/:postId',
        loader:async({params})=>{
           return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        element: <PostDetails></PostDetails>
       }

    ]},
    {path:'/about',element:<About></About>},
    {path:'*',element:<div>This route is not founds</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
