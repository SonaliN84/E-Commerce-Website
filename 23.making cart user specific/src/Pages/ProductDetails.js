import { useParams } from "react-router-dom";
import Product from "../Component/ProductDtl/Product";
const ProductDetails = () => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const params = useParams();
   const product1=productsArr.find((p)=>p.title===params.productTitle)
  return (<div>
 
    <Product title={product1.title} price={product1.price} imageUrl={product1.imageUrl}/>
  </div>);
};
export default ProductDetails;
