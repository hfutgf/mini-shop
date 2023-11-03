import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "services/product.service";

const ProductInfo = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams();
  useEffect(() => {
    getProduct(Number(id)).then((res) => setProduct(res));
  }, []);
  return (
    <div className="bg-light min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-[32px] font-[600]">{product?.title}</h2>
        <div className="grid grid-cols-2">
          <img
            src={product?.image}
            alt="image"
            width={320}
            className="w-[320px] h-[410px]"
          />
          <div className="mt-[16px] flex flex-col gap-[16px]">
            <span className="text-[24px] font-[500]">
              Price: {product?.price} $
            </span>
            <p className="text-[18px] font-[400]">{product?.description}</p>
            <button className="w-[150px] text-light text-[18px] rounded-[8px] font-[600] py-[5px] px-[10px] bg-green">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
