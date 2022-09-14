import React, { FC } from "react";
import CategoryDropdown from "../../components/Dropdown/Dropdown";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  setProductCategory,
} from "../../services/slice/categorySlice";
import { getProducts } from "../../services/slice/productSlice";
import { setLoading } from "../../services/slice/loadingSlice";

const { useEffect } = React;

const FETCH_CATEGORIES_URL =
  "https://upayments-studycase-api.herokuapp.com/api/categories/";

const FETCH_PRODUCTS =
  "https://upayments-studycase-api.herokuapp.com/api/products";

const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const productCategory = useSelector((state: any) => state.category);
  const products = useSelector((state: any) => state.product);
  const isLoading = useSelector((state: any) => state.loading);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(FETCH_CATEGORIES_URL, {
        method: "get",
        headers: new Headers({
          Authorization: ` Bearer ${import.meta.env.VITE_TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
      const data = await response.json();
      dispatch(getCategories([...data.categories, { _id: 10, name: "All" }]));
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(FETCH_PRODUCTS, {
        method: "get",
        headers: new Headers({
          Authorization: ` Bearer ${import.meta.env.VITE_TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
      const data = await response.json();
      dispatch(getProducts(data.products));
      dispatch(setLoading(false));
    }
    fetchProducts();
  }, []);

  const categoryWiseProduct = products.filter((product: any) => {
    if (productCategory.selectedCategory === "All") {
      return product;
    }
    return productCategory.selectedCategory === product.category;
  });

  const onCategoryChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    event.preventDefault();
    dispatch(setProductCategory(event.target.value));
  };

  return (
    <div className="flex flex-col align-center">
      {!isLoading ? (
        <>
          <CategoryDropdown
            style=" w-40 p-4 rounded-lg mx-auto my-8"
            value={productCategory.selectedCategory}
            onChangeHandler={onCategoryChangeHandler}
            categories={productCategory.productCategories}
          />
          <div className=" container mx-auto w-3/5 flex flex-col flex-wrap ">
            {categoryWiseProduct.map((product: any) => (
              <div key={product._id} className="mx-5 my-5 justify-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Dashboard;
