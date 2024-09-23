import { FC } from "react";

interface PagiantionProps {
  title1: string;
  title2: string;
  maintitle: string;
}

const Pagination: FC<PagiantionProps> = ({ title1, title2, maintitle }) => {
  return (
    <>
      {/* <div className="bg-bgBrown py-36"> */}
      <div className="py-36">
        <div>
          <h1 className="text-5xl font-semibold text-white text-center">
            {maintitle}
          </h1>
          <div className="flex text-white font-semibold justify-center items-center mt-5 gap-5">
            <p className="text-center">{title1}</p>
            <p>*</p>
            <p className="text-yellow-300">{title2}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
