import HomePageItem from "./HomePageItem";
const HomePage=()=>{
  const toursArray=[
    {
      date:"JUL16",
        a:"DETROIT MI",
        b:"DTE ENERGY MUSIC THEATRE"
    },
    {
      date:"JUL19",
        a:"TORONTO,ON",
         b:"BUDWEISER STAGE"
    },
      {
        date:"JUL 22",
         a:"BRISTOW, VA",
        b:"JIGGY LUBE LIVE"
    }
  ]
 
 
    return (
       <div style={{width:"800px",margin:"20px auto",maxWidth:"90%"}}>
        <h1 className="text-center">Tours</h1>
        <ul className="d-flex flex-column my-4">
            {toursArray.map((item)=>(
               <HomePageItem date={item.date} a={item.a} b={item.b}/>
            ))}
        </ul>
       </div>

 );
}
export default HomePage;