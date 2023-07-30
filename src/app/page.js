"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/redux/Cartslice";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product))
  }

  return (
    <div className="m-5 md:grid grid-cols-3 gap-5">
      {products.map((product) => (
        <div key={product.id} className="">
          <div className="flex gap-5 items-center shadow-xl p-5">
            <div>
              <Image
                src={product.image}
                alt="image"
                width={100}
                height={100}
              ></Image>
            </div>
            <div>
              <h4 className="font-bold text-xl">{product.title.slice(0,20)}</h4>
              <p>{product.description.slice(0,100)}</p>
              <p className="text-red-600 font-bold py-3 text-xl">${product.price}</p>
              <button onClick={()=> handleAdd(product)} className="bg-teal-600 text-white px-3 py-1 rounded-md ">Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
