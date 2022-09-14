import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoryDropdown from "../../components/Dropdown/Dropdown";

const { useState } = React;

const POST_PRODUCT_URL =
  "https://upayments-studycase-api.herokuapp.com/api/products";

const commonInputStyle = "p-2 mb-4 rounded-md";

const NewProduct = () => {
  const navigate = useNavigate();
  const productCategory = useSelector((state: any) => state.category);

  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    category: "Electronics",
    description: "",
    avatar: "",
    developerEmail: "nawazgmujawar21@gmail.com",
  });

  const onCategoryChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setProductData({ ...productData, category: event.target.value });
  };

  const onSubmitProductHandler = (event: any) => {
    event.preventDefault();

    fetch(POST_PRODUCT_URL, {
      method: "post",
      headers: new Headers({
        Authorization: ` Bearer ${import.meta.env.VITE_TOKEN}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(productData),
    })
      .then((res) => navigate("/"))
      .catch((err) => alert(err));
  };

  return (
    <div className="container mx-auto w-3/4 mt-10">
      <h1 className="my-0 mx-auto w-1/4">Add Product</h1>
      <form
        onSubmit={onSubmitProductHandler}
        className="flex flex-col w-1/4 my-8 mx-auto"
      >
        <input
          className={commonInputStyle}
          type="text"
          placeholder="Name of product"
          value={productData.name}
          onChange={(e) =>
            setProductData({ ...productData, name: e.target.value })
          }
          required
        />
        <input
          className={commonInputStyle}
          type="number"
          placeholder="Price"
          value={productData.price}
          onChange={(e) =>
            setProductData({ ...productData, price: parseInt(e.target.value) })
          }
          required
        />
        <div className="flex flex-row items-center flex-wrap">
          <p>Category</p>
          <CategoryDropdown
            style="w-40 p-2 rounded-lg mx-auto my-4"
            value={productData.category}
            onChangeHandler={onCategoryChangeHandler}
            categories={productCategory.productCategories}
          />
        </div>
        <textarea
          className={commonInputStyle}
          placeholder="Product description"
          value={productData.description}
          onChange={(e) =>
            setProductData({ ...productData, description: e.target.value })
          }
          required
        />
        <input
          className={commonInputStyle}
          type="text"
          placeholder="image url"
          value={productData.avatar}
          onChange={(e) =>
            setProductData({ ...productData, avatar: e.target.value })
          }
          required
        />
        <button
          className="p-2 bg-teal-500 border-teal-500 shadow-md text-white mx-auto  rounded-lg cursor-pointer hover:border-teal-900 hover:bg-teal-900 shadow-slate-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
