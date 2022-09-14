import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite } from "../../services/slice/favoriteSlice";
import { removeProduct } from "../../services/slice/productSlice";

interface PropsType {
  product: {
    _id: string;
    avatar: string;
    category: string;
    description: string;
    developerEmail: string;
    name: string;
    price: number;
  };
}

const ProductCard = (props: PropsType) => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state: any) => state.favorite);

  const { avatar, description, name, price, _id } =
    props.product;

  const onAddToFavoriteHandler = (product: any) => {
    const alreadyFavoriteProduct = favoriteProducts.filter(
      (favoriteProduct: any) => favoriteProduct._id === product._id
    );
    alreadyFavoriteProduct.length >= 1
      ? alert("Item already in Favorite")
      : dispatch(addFavorite(product));
  };

  const onDeleteProductHandler = (product: any) => {
    dispatch(removeProduct(product._id));
  };

  return (
    <div className="rounded-md flex flex-row border-1 border-slate-200 bg-white  border-solid rounded-lg hover:shadow-2xl   p-4 h-50 w-3/4 my-0 mx-auto">
      <img src={avatar} className="object-contain h-48 w-1/3  flex-1 " />
      <div className="flex flex-col flex-wrap flex-1 px-10">
        <Link
          to={`/product/${_id}`}
          className="no-underline text-black hover:text-amber-500"
        >
          <h2>{name}</h2>
        </Link>
        <h4>$ {price}</h4>
        <p>{description.slice(0, 100) + "..."}</p>
        <div className="flex flex-row">
          <button
            className="p-2 bg-teal-500 border-teal-500 shadow-md text-white mr-4 rounded-lg cursor-pointer hover:border-teal-900 hover:bg-teal-900 shadow-slate-500 "
            onClick={() => onAddToFavoriteHandler(props.product)}
          >
            Add to favorite
          </button>
          <button
            className="p-2 bg-white border-5 border-rose-600 text-black shadow-md rounded-lg cursor-pointer hover:text-white hover:border-rose-900 hover:bg-rose-900 "
            onClick={() => onDeleteProductHandler(props.product)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
