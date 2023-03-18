import { Container } from "react-bootstrap";
import './AvailableItems.css'
import ShowItem from "./ShowItem";
const AvailableItems = () => {
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




  return(

    <div className="items">
    <div className="d-flex flex-wrap justify-content-between">
    {
    productsArr.map((item)=>(
    <ShowItem  title={item.title} price={item.price} image={item.imageUrl}/>
   ))
   }
   </div>

   </div>
  );
};
export default AvailableItems;
