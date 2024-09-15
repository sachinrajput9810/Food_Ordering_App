import ItemList from "./ItemList"

const MenuItemCategory = ({data , showItem , setShowIndex , dummy}) => {



    const handleClick = () => {
        setShowIndex()
    }

    // console.log(data)
    return (
        <div className="">
            {/* Header of Accordion */}
            <div className="p-4 w-1/2 mx-auto my-4 bg-gray-100 shadow-lg ">
                
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-semibold text-lg">{data.title} ({data.itemCards.length}) </span>
                    {showItem ? <span>🔽</span> : <span>🔼</span> }
                </div>

                <div className=""> 
                    {showItem &&  <ItemList items = {data.itemCards} dummy = {dummy} />} 
                </div>
            </div>

            {/* Body */}


        </div>
    )
}

export default MenuItemCategory