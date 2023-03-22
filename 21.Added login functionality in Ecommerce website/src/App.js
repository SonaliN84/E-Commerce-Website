import { Switch, Route,Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs'
import RootLayout from "./Pages/RootLayout";
import ProductDetails from "./Pages/ProductDetails";
import Authentication from './Pages/Authentication';
function App() {
  //  const router=createBrowserRouter([
  //   {path:'/',
  //    element:<RootLayout/>,
  //    children:[
  //    {path:'/', element:<Home/>},
  //    {path:'/Store', element:<Store/>},
  //    {path:'/About', element:<About/>},
  //    {path:'/ContactUs',element:<ContactUs/>},
  //    {path:'/Store/:productTitle',element:<ProductDetails/>}
  //    ],
  //   },
  //  ])
  

  return (
   <RootLayout>
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/Store' exact>
        <Store/>
      </Route>
      <Route path='/About'>
        <About/>
      </Route>
      <Route path='/ContactUs' exact>
        <ContactUs/>
      </Route>
      <Route path='/Store/:productTitle'>
        <ProductDetails/>
      </Route>
      <Route path='/Auth' exact>
        <Authentication/>
      </Route>
      </Switch>
    {/* </Routes> */}
   </RootLayout>
  );
}

export default App;
