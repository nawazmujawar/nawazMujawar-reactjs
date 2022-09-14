import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductCategory } from "../../services/slice/categorySlice";
const { useState } = React;

interface PropsType {
  style: string;
  value: string;
  onChangeHandler: any;
  categories: any[];
}

const CategoryDropdown = (props: PropsType) => {
  const { value, onChangeHandler, categories, style } = props;

  return (
    <select value={value} onChange={onChangeHandler} className={style}>
      {categories?.map((category: any) => (
        <option key={category._id} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
