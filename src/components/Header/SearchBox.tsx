import stockCode from "@/data/StockCode.json";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SearchIcon from "~icons/ic/round-search";

export default function SearchBox() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterOptions, setFilterOptions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    if (isNaN(parseInt(e.target.value))) {
      const filter = stockCode.filter((item) => {
        return item.stockName.includes(e.target.value);
      });
      setFilterOptions(
        filter.map((item) => item.stockCode + "/" + item.stockName),
      );
    }

    if (!isNaN(parseInt(e.target.value))) {
      const filter = stockCode.filter((item) => {
        return item.stockCode.toString().includes(e.target.value);
      });
      setFilterOptions(
        filter.map((item) => item.stockCode + "/" + item.stockName),
      );
    }
  };

  const handleSearch = () => {
    if (isNaN(parseInt(search))) {
      const searchStock = stockCode.filter((item) => {
        return item.stockName === search;
      });
      if (searchStock.length === 0) {
        toast.error("查無此檔股票");
        return;
      }
      navigate(`/stock/${searchStock[0].stockCode}`);
      setSearch("");
    } else {
      const searchStock = stockCode.filter((item) => {
        return item.stockCode === parseInt(search);
      });
      if (searchStock.length === 0) {
        toast.error("查無此檔股票");
        return;
      }
      navigate(`/stock/${searchStock[0].stockCode}`);
      setSearch("");
    }
  };

  return (
    <>
      <form className="mr-12 flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div>
          <Input
            type="text"
            id="simple-search"
            isClearable
            placeholder="股票代碼/股票名稱"
            value={search}
            onClear={() => setSearch("")}
            startContent={
              <SearchIcon
                className="  h-9 w-9 cursor-pointer "
                onClick={() => handleSearch()}
              />
            }
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
              }
            }}
          />
          <div className="fixed z-10 mt-2 rounded-lg bg-gray-100 ">
            {search && filterOptions.length > 0 && (
              <ul className="max-h-60  overflow-y-scroll py-2 text-sm text-gray-700 dark:text-gray-200">
                {filterOptions.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={`/stock/${item.split("/")[0]}`}
                      className="block px-4 py-2  text-black hover:rounded-lg hover:bg-gray-200"
                      onClick={() => setFilterOptions([])}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </form>
    </>
  );
}