import logo from './logo.svg';
import './App.css';
import Card from './Component/Card';
import './CssFiles/Card.css'
import { useState } from 'react';
import Paginate from './Component/Paginate';
function App() {

  const Swiggy = [
    { hotel_Name: "vasant Bhavan", cuisine: "Indian", rating: "4", distance: "4" },
    { hotel_Name: "A2B", cuisine: "Indian", rating: "3", distance: "3" },
    { hotel_Name: "Saravana Bhavan", cuisine: "Indian", rating: "4", distance: "4" },
    { hotel_Name: "Dominos", cuisine: "American", rating: "4", distance: "3" },
    { hotel_Name: "Taco bell", cuisine: "Mexican", rating: "3", distance: "14" },
    { hotel_Name: "KFC", cuisine: "American", rating: "2", distance:"10"},
  ]
  const [data ,SetData]= useState(Swiggy)
  const [currentPage,setcurrentpage]=useState(1)
  const [PostperPage,setPostperPage]=useState(2)
  const handleClick =(value)=>{
    if(value==="all"){
      SetData(Swiggy)
      return
    }
    
    const DuplicateData=[...Swiggy];
    const filterData =DuplicateData.filter(c=>c.cuisine===value)
    SetData(filterData)
  }
  const handleSort=(value)=>{
    const DuplicateData=[...Swiggy]
    if(value==="near"){
      const sortNearData=DuplicateData.sort((a,b)=>a.rating-b.rating)
      SetData(sortNearData)
      return
    }
    const sortData =DuplicateData.sort((a,b)=>b.rating-a.rating)
    SetData(sortData)
  } 
  const paginate=(pagenumber)=>setcurrentpage(pagenumber)

  const indexofLastPost=currentPage * PostperPage
  const indexofFirstPost=indexofLastPost-PostperPage
  let currentPost=data.slice(indexofFirstPost,indexofLastPost);
  return (
   <div >
    <div className='Button'>
      <button onClick={()=>handleSort("near")}>near</button>
      <button onClick={()=>handleSort("far")}>far</button>
      <button onClick={()=>handleClick("all")}>show all</button>
      <button onClick={()=> handleClick("Indian")}>Indian</button>
      <button onClick={()=> handleClick("American")}>American</button>
      <button onClick={()=> handleClick("Mexican")}>Mexican</button>
   </div>   
      <div>
        {currentPost.map(v=>(
          <Card hotel_Name={v.hotel_Name} cuisine={v.cuisine} rating={v.rating} distance={v.distance}/>
        ))}
      </div>
    <Paginate postperpage={PostperPage} totalpost={Swiggy.length} paginate={paginate} />
    </div>  

  );
}

export default App;
