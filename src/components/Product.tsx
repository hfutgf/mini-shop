import React, { FC } from "react";
import basket from "assets/svg/basket.svg";
import { Link } from "react-router-dom";

type ProductProps = {
  id: number;
  image: string;
  title: string;
  price: string;
};

const Product: FC<ProductProps> = ({ image, title, price, id }) => {
  return (
    <Link
      to={`/products/${id}`}
      className="w-[212px] border-[1px] border-solid border-dark rounded-[8px]  cursor-pointer p-[5px]"
    >
      <div>
        <img
          src={image}
          width={212}
          height={212}
          className="rounded-[8px] w-[212px] h-[250px]"
          alt="img"
        />
      </div>
      <div className="p-[16px] flex flex-col">
        <h3 className="h-[48px] font-[500]">
          {title.length < 32 ? title : title.slice(0, 32) + "..."}
        </h3>
        <div className=" flex items-center justify-between">
          <span>{price} $</span>
          <button className="py-[2px] px-[4px] rounded-[8px] border-[1px] border-solid w-[35px]">
            <img src={basket} alt="basket" width={24} height={24} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
