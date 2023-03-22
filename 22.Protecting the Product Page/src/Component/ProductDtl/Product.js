import './Product.css'
const Product =(props)=>{
  return (
  <div style={{width:"400px",margin:"20px auto",maxWidth:"90%",border:"1px solid grey",borderRadius:"10px",padding:"10px",textAlign:"center"}}>
    <h1>{props.title}</h1>
    <p>Rs. {props.price}</p>
    <img src={props.imageUrl} className="product-image"/>
  </div>
  );
}
export default Product;