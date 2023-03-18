import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import RootLayout from "./Pages/RootLayout";
function App() {
   const router=createBrowserRouter([
    {path:'/',
     element:<RootLayout/>,
     children:[
     {path:'/', element:<Home/>},
     {path:'/Store', element:<Store/>},
     {path:'/About', element:<About/>},
     ],
    },
   ])
  

  return (
   <RouterProvider router={router}/>
  );
}

export default App;
