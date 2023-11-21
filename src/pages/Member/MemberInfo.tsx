import { useState } from "react";
import StockIcon from "~icons/ant-design/stock-outlined";
import PencilIcon from "~icons/mdi/lead-pencil";
import { auth } from "../../config/firebase";
import FavoriteArticles from "./FavoriteArticles";
import FavoriteStocks from "./FavoriteStocks";

export default function MemberInfo() {
  const [activeBar, setActiveBar] = useState<string>("articles");

  const renderActiveBar = () => {
    switch (activeBar) {
      case "articles":
        return <FavoriteArticles />;
      case "stocks":
        return <FavoriteStocks />;
      default:
    }
  };

  return (
    <>
      <img
        className="m-auto my-10 flex justify-center rounded-full"
        src={auth?.currentUser?.photoURL || ""}
      />
      <div className="m-auto flex justify-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100  focus:z-10  focus:ring-2  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white "
            onClick={() => setActiveBar("stocks")}
          >
            <StockIcon className=" m-auto mb-1" />
            股票收藏
          </button>
          <button
            type="button"
            className="rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100  focus:z-10  focus:ring-2  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white "
            onClick={() => setActiveBar("articles")}
          >
            <PencilIcon className=" m-auto mb-1" />
            我的文章
          </button>
        </div>
      </div>
      {renderActiveBar()}
    </>
  );
}
