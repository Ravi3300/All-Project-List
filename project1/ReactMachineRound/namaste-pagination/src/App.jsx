
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import ProductList from './components/ProductList';

function App() {
const[productList,setProductList] = useState([]);
const [currentPage,setCurrentPage] = useState(0)
const PAGE_SIZE = 10;

const getProductList = async() =>{
  let url = 'https://dummyjson.com/products?limit=500'
  const data = await fetch(url);
  const productCardData = await data.json()
  setProductList(productCardData?.products)
}

useEffect(()=>{
     getProductList();
},[])

const totalPage = productList?.length;
const noOfPage = Math.ceil(totalPage/PAGE_SIZE);

const previousPage = () =>{
  console.log("prev called")
      setCurrentPage((prev)=>prev-1)
}

const nextPage = () =>{
  console.log("next called")
    if(currentPage <= noOfPage){
      setCurrentPage((prev)=> prev+1)
    }
}
const start = currentPage*PAGE_SIZE;
const end = start+10
 console.log(currentPage,"curr")
  return (
      <div>
        {productList.length == 0?(<span>No Result Found</span>):(
          <div>
           <div>
           <button onClick={previousPage} disabled={currentPage == 0} className='cursor-pointer'>◀️</button> 
           {[...Array(noOfPage).keys()].map((page) =>(<button className='mx-2 font-semibold hover:border-2 px-2 py-2 cursor-pointer' key={page} onClick={()=> setCurrentPage(page)}>{page}</button>))} 
           <button onClick={nextPage} disabled={currentPage == noOfPage-1} className='cursor-pointer'>▶️</button>
           </div>
        <div className='flex flex-wrap'>
        {
          productList?. slice(start,end)?.map((product)=>(
            <ProductList productList={product} key={product.id}/>
          ))
          } 
        </div>
          </div>
        )}
      </div>
  )
}

export default App
