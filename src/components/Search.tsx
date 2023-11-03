import React, { FC } from "react";
import lupa from "assets/images/lupa.png";

const Search: FC = () => {
  return (
    <form className="w-[320px] flex items-center border-[2px] rounded-[8px] border-grey border-solid  justify-between p-[8px]">
      <input type="text" className="outline-none" />
      <button type="submit">
        <img src={lupa} alt="lupa-img" width={24} height={24} />
      </button>
    </form>
  );
};

export default Search;
