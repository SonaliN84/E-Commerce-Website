import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs'
import RootLayout from "./Pages/RootLayout";
import ProductDetails from "./Pages/ProductDetails";
function App() {
   const router=createBrowserRouter([
    {path:'/',
     element:<RootLayout/>,
     children:[
     {path:'/', element:<Home/>},
     {path:'/Store', element:<Store/>},
     {path:'/About', element:<About/>},
     {path:'/ContactUs',element:<ContactUs/>},
     {path:'/Store/:productTitle',element:<ProductDetails/>}
     ],
    },
   ])
  

  return (
   <RouterProvider router={router}/>
  );
}

export default App;
