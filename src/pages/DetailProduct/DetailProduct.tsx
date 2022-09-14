import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../services/slice/loadingSlice";

const { useState, useEffect } = React;

const FETCH_PRODUCT =
  "https://upayments-studycase-api.herokuapp.com/api/products/";

interface ProductType {
  _id: string;
  avatar: string;
  category: string;
  description: string;
  developerEmail: string;
  name: string;
  price: number;
}


const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.loading);

  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(FETCH_PRODUCT + id, {
          method: "get",
          headers: new Headers({
            Authorization: ` Bearer ${import.meta.env.VITE_TOKEN}`,
            "Content-Type": "application/x-www-form-urlencoded",
          }),
        });
        const data = await response.json();
        setProduct(data.product);
        dispatch(setLoading(false));
      } catch (err) {
        alert(err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col  bg-white  b rounded-lg   p-4 h-50 w-1/4 mt-10 mx-auto ">
      {!isLoading && product ? (
        <>
          <div>
            <img
              src={product.avatar}
              className="object-contain h-full w-full  flex-1 "
            />
          </div>
          <div>
            <h2>{product.name}</h2>
            <h4>$ {product.price}</h4>
            <p>Category : {product.category}</p>
            <p>{product.description}</p>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailProduct;
