import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../../services/slice/favoriteSlice";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state: any) => state.favorite);

  const onRemoveFavoriteHandler = (productId: string) => {
    dispatch(removeFavorite(productId));
  };

  const noFavoriteFound = favoriteProducts.length === 0 && (
    <h2 className="text-stone-500">No Favorite Found.</h2>
  );

  return (
    <div className="container mx-auto w-3/5">
      <h1>Your Favorites</h1>
      {noFavoriteFound}
      {favoriteProducts.map((product: any) => (
        <div className="rounded-md flex flex-row border-1 border-slate-200 bg-white  border-solid rounded-lg hover:shadow-2xl   p-4 h-50 w-3/4 my-0 mx-auto">
          <img
            src={product.avatar}
            className="object-contain h-48 w-1/3  flex-1 "
          />
          <div className="flex flex-col flex-wrap flex-1 px-10">
            <h2>{product.name}</h2>
            <h4>$ {product.price}</h4>
            <p>{product.description.slice(0, 100) + "..."}</p>
            <div className="flex flex-row">
              <button
                className="p-2 bg-white border-5 border-rose-600 text-black shadow-md rounded-lg cursor-pointer hover:text-white hover:border-rose-900 hover:bg-rose-900"
                onClick={() => onRemoveFavoriteHandler(product._id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoritePage;
