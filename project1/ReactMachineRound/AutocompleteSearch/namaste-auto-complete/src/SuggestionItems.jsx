const SuggestionItems = ({filterItems}) =>{
    return(
        <div className="w-96 h-auto rounded-2xl shadow-2xl px-2 py-3">
            <div>
            {filterItems?.map((items,index)=>(
                    <div key={index} className="px-2 py-1 font-mono">
                        {items?.name}
                    </div>
                  ))} 
            </div>
        </div>
    )
}
export default SuggestionItems;

