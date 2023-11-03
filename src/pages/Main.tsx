import Product from "components/Product";
import React, { useEffect, useState } from "react";
import { getProductOnCategory, getCategories } from "services/product.service";
import { useStore } from "store/index";

const Main = () => {
  const [categories, setCategories] = useState<string[] | null>(null);
  const { products, setProducts } = useStore((state: any) => state);
  const [changeCategory, setChangeCategory] = useState<string>("");

  useEffect(() => {
    // getProductOnCategory(changeCategory).then((res) => setCategories(res));
  }, [changeCategory]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <div className="min-h-screen bg-light my-[32px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-[24px]">
            {categories?.map((category, i) => (
              <span
                key={i}
                onClick={() => setChangeCategory(category)}
                className={`cursor-pointer p-[5px] rounded-[24px] hover:bg-dark hover:text-light duration-200 ${
                  changeCategory === category ? "bg-dark text-light" : ""
                }`}
              >
                {category.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-[24px] mt-[32px]">
          {products?.map((product: IProduct) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
