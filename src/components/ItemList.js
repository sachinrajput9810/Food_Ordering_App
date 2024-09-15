import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items , dummy}) => {

//   console.log(items);

const dispatch = useDispatch()

const handleAddItem = (item) =>{
  dispatch(addItem(item))
}


// console.log(dummy)
  return (
    <div>
      {items.map(item => (

        <div className="flex justify-between" key={item.card.info.id}>
          <div className="p-2 m-2 w-9/12 border-gray-300 border-b-2 text-left">
            <div className="text-gray-600 font-semibold">
              <span className="pr-2">{item.card.info.name}</span>
              <span>- ₹ {(item.card.info.price ? item.card.info.price / 100 : item.card.info.finalPrice / 100)}</span>
            </div>
            <p className="text-xs font-semibold pt-3 pb-2 text-slate-500">{item.card.info.description}</p>
          </div>

          <div className="relative w-36 h-36 mb-12">
            <img className="w-36 h-36 rounded-xl object-cover" src={CDN_URL + item.card.info.imageId} alt="" />
            <button className="absolute bottom-0 left-1/2  hover:bg-slate-800 transform -translate-x-1/2 translate-y-3 p-1 shadow-lg w-16 rounded-lg text-slate-50 bg-slate-500"
                    onClick={() => handleAddItem(item)} >ADD</button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ItemList;
