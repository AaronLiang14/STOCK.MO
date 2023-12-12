import api from "@/utils/api";
import { Card } from "@nextui-org/react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { useEffect, useState } from "react";
import timeSelector from "../TimeSelect";

export default function BuyExcess({ id }: { id: string }) {
  const [buyExcess, setBuyExcess] = useState<[]>([]);

  const getTradingDailyReport = async (id: string, startDate: string) => {
    const res = await api.getTradingDailyReport(id, startDate);
    const formatted = res.data.map(
      (item: { securities_trader: string; buy: number; sell: number }) => {
        return [item.securities_trader, (item.buy - item.sell) / 1000];
      },
    );
    setBuyExcess(
      formatted.sort((a: number[], b: number[]) => b[1] - a[1]).slice(0, 15),
    );
  };

  useEffect(() => {
    if (id) getTradingDailyReport(id, timeSelector.lastOpeningDate);
  }, [id]);

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: `券商買超排行（${id}）`,
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    tooltip: {
      split: true,
      style: {
        fontSize: "16px",
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "買超張數",
        color: "#d28d71",
        data: buyExcess,
        showInLegend: false,
      },
    ],
  };

  return (
    <Card className="h-full w-full p-4">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { height: "100%", width: "100%" } }}
      />
    </Card>
  );
}
