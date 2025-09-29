"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export default function AnalyticsChart() {
  const chart = useChart({
    data: [
      { type: "Jan", "Listings Removed": 5000, "Notices Sent": 6000, "Notices Rejected": 1000 },
      { type: "Feb", "Listings Removed": 3800, "Notices Sent": 5000, "Notices Rejected": 800 },
      { type: "Mar", "Listings Removed": 4500, "Notices Sent": 5200, "Notices Rejected": 800 },
      { type: "Apr", "Listings Removed": 3500, "Notices Sent": 4200, "Notices Rejected": 800 },
      { type: "May", "Listings Removed": 4000, "Notices Sent": 4500, "Notices Rejected": 500 },
      { type: "Jun", "Listings Removed": 4800, "Notices Sent": 5200, "Notices Rejected": 500 },
      { type: "Jul", "Listings Removed": 5000, "Notices Sent": 5800, "Notices Rejected": 800 },
      { type: "Aug", "Listings Removed": 5500, "Notices Sent": 6000, "Notices Rejected": 500 },
      { type: "Sep", "Listings Removed": 5200, "Notices Sent": 5500, "Notices Rejected": 200 },
      { type: "Oct", "Listings Removed": 4800, "Notices Sent": 5000, "Notices Rejected": 200 },
      { type: "Nov", "Listings Removed": 4500, "Notices Sent": 4800, "Notices Rejected": 200 },
      { type: "Dec", "Listings Removed": 4200, "Notices Sent": 4200, "Notices Rejected": 200 },
    ],
    series: [
      { name: "Listings Removed", color: "#D7F0FC" },
      { name: "Notices Sent", color: "#CDEFD9" },
      { name: "Notices Rejected", color: "#FEA4A3" },
    ],
  })

  return (
    <Chart.Root h={"full"} chart={chart}>
      <BarChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border")} vertical={false} strokeDasharray="3 3" />
        <XAxis
          tickLine={false}
          dataKey={chart.key("type")}
          stroke={chart.color("border")}
          dy={10}
          fontFamily="Inter"
          fontWeight={400}
          color="#161819"
        />
        <YAxis tickLine={false} stroke={chart.color("border.muted")} ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]} dx={-10}/>
        <Tooltip
          cursor={{ fill: chart.color("bg.muted") }}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        {/* <Legend
          layout="horizontal"
          align="right"
          verticalAlign="top"
          wrapperStyle={{ paddingLeft: 30 }}
          content={<Chart.Legend orientation="horizontal" />}
        /> */}
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}
