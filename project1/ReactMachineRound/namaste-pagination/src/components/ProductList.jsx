const ProductList = ({productList}) =>{
    return(
        <div className="mx-3 mb-2 mt-3 ">
          <div className="shadow-lg rounded-lg text-center px-2 py-3 hover:bg-fuchsia-300 bg-gray-200 max-w-80">
            <img src={productList?.images[0]} alt="produclist" className="h-56"/>
            <div className="font-bold mt-2">
                {productList?.title}
            </div>
         </div>   
        </div>
    )
}

export default ProductList;