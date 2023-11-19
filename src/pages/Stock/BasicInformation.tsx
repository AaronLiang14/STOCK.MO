import { useParams } from "react-router-dom";
import FinanceData from "../../data/TWSE.json";

const financialReports = (
  stockID: string,
  quarter: string,
  year: string,
  category: string,
) => {
  return `https://doc.twse.com.tw/server-java/t57sb01?co_id=${stockID}&colorchg=1&kind=A&step=9&filename=${year}0${quarter}_${stockID}_AI${category}.pdf
  `;
};

const financeYears = [
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
];

export default function BasicInformation() {
  const { id } = useParams();
  const company = FinanceData.filter((item) => item.公司代號 === id);
  console.log(typeof id);
  return (
    <div>
      <div className="mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">
              {company[0].公司代號}
              {company[0].公司名稱}
              {company[0].英文簡稱}
            </h1>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 ">
                  <tr className="divide-x divide-gray-200 ">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-xl font-semibold text-gray-900 sm:pl-6"
                    >
                      成立日期
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-xl font-semibold text-gray-900"
                    >
                      {company[0].成立日期.substring(0, 4)}/
                      {company[0].成立日期.substring(4, 6)}/
                      {company[0].成立日期.substring(6, 8)}
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-xl font-semibold text-gray-900"
                    >
                      上市日期
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-xl font-semibold text-gray-900 sm:pr-6"
                    >
                      {company[0].上市日期.substring(0, 4)}/
                      {company[0].上市日期.substring(4, 6)}/
                      {company[0].上市日期.substring(6, 8)}
                    </th>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-xl font-semibold text-gray-900 sm:pl-6"
                    >
                      已發行股數
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-xl font-semibold text-gray-900"
                    >
                      {company[0].已發行普通股數或TDR原股發行股數.replace(
                        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                        ",",
                      )}
                      股
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-xl font-semibold text-gray-900"
                    >
                      實收資本額
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-xl font-semibold text-gray-900 sm:pr-6"
                    >
                      {company[0].實收資本額.replace(
                        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                        ",",
                      )}
                    </th>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-xl font-semibold text-gray-900 sm:pl-6"
                    >
                      董事長
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-xl font-semibold text-gray-900"
                    >
                      {company[0].董事長}
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-xl font-semibold text-gray-900"
                    >
                      總經理
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-xl font-semibold text-gray-900 sm:pr-6"
                    >
                      {company[0].總經理}
                    </th>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-xl font-semibold text-gray-900 sm:pl-6"
                    >
                      簽證會計師事務所
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-xl font-semibold text-gray-900"
                    >
                      {company[0].簽證會計師事務所}
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-xl font-semibold text-gray-900"
                    >
                      簽證會計師
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-xl font-semibold text-gray-900 sm:pr-6"
                    >
                      {company[0].簽證會計師1}、{company[0].簽證會計師2}
                    </th>
                  </tr>
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-xl font-semibold text-gray-900 sm:pl-6"
                    >
                      公司地址
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-xl font-semibold text-gray-900"
                    >
                      {company[0].住址}
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-xl font-semibold text-gray-900"
                    >
                      公司網址
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-xl font-semibold text-gray-900 sm:pr-6"
                    >
                      <a href={company[0].網址}>{company[0].網址}</a>
                    </th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              歷年財務報表
            </h1>
          </div>
        </div>
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  年度
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  第一季
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  第二季
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  第三季
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  第四季
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  第四季個體
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {financeYears.map((year) => {
                if (typeof id !== "string") {
                  return null;
                }
                return (
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {year}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      <a href={financialReports(id, "1", year, "1")}>
                        {year}Q1
                      </a>
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      <a href={financialReports(id, "2", year, "1")}>
                        {year}Q2
                      </a>
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      <a href={financialReports(id, "3", year, "1")}>
                        {year}Q3
                      </a>
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      <a href={financialReports(id, "4", year, "1")}>
                        {year}Q4
                      </a>
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      <a href={financialReports(id, "4", year, "3")}>
                        {year}Q4個體
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
