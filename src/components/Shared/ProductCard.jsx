import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import {  TruncateText } from "../../Utils/TruncateText";
import ProductViewModal from "./ProductViewModal";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Action";
import toast from "react-hot-toast";

const ProductCard = ({
  productId,
  productName,
  Image,
  description,
  quantity,
  price,
  discount,
  specialPrice,
  about = false,
}) => {
  const [openProductViewModal, setOpenProductViewModal] = useState(false);
  const btnLoader = false;
  const [selectedViewProduct, setSelectedViewProduct] = useState(null);
  const isAvailable = quantity && Number(quantity) > 0;
  const dispatch = useDispatch();
  const handleProductView = (product) => {
    if (!about) {
      setSelectedViewProduct(product);
      setOpenProductViewModal(true);
    }
  };
  const addToCartHandler = (cartItems) =>{
    dispatch(addToCart(cartItems,1,toast));
  }

  return (
    <div className="rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
      <div
        onClick={() => {
          handleProductView({
            productId,
            productName,
            Image,
            description,
            quantity,
            price,
            discount,
            specialPrice,
          });
        }}
        className="w-full overflow-hidden aspect-3/2"
      >
        <img
          className="w-full h-full cursor-pointer transition-transform duration-300 hover:scale-105"
          src={Image}
          alt={productName}
        />
      </div>
      <div className="p-4">
        <h2
          onClick={() => {
            handleProductView({
              productId,
              productName,
              Image,
              description,
              quantity,
              price,
              discount,
              specialPrice,
            });
          }}
          className="tex-lg font-semibold mb-2 cursor-pointer"
        >
          {TruncateText(productName, 50)}
        </h2>
        <div className="min-h-20 max-h-20 line-clamp-3">
          <p className="text-gray-600 tex-sm">
            {TruncateText(description, 80)}
          </p>
        </div>
        {!about && (
          <div className="flex items-center justify-between">
            {specialPrice ? (
              <div className="flex flex-col">
                <span className="text-gray-700 line-through">
                  ${Number(price).toFixed(2)}
                </span>
                <span className="text-xl font-bold text-slate-700">
                  ${Number(specialPrice).toFixed(2)}
                </span>
              </div>
            ) : (
              <div className="flex flex-col">
                <span className="invisible">Placeholder</span>
                <span className="text-xl font-bold text-slate-700">
                  ${Number(price).toFixed(2)}
                </span>
              </div>
            )}
            <button
              disabled={!isAvailable || btnLoader}
              onClick={() => addToCartHandler({
                Image,
                productId,
                productName,
                description,
                specialPrice,
                price,
                discount,
                quantity,
              })}
              className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"}
                        text-white py-2 px-3 rounded-lg transition-colors duration-300 w-36 flex justify-center items-center `}
            >
              <FaShoppingCart className="mr-2" />
              {isAvailable ? "Add to Cart" : "Stocks Out"}
            </button>
          </div>
        )}
      </div>
      <ProductViewModal
        open={openProductViewModal}
        setOpen={setOpenProductViewModal}
        product={selectedViewProduct}
        isAvailable={isAvailable}
      />
    </div>
  );
};
export default ProductCard;
