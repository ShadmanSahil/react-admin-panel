"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Area, AreaChart } from "recharts"

export default function NoticeChart(){
  const chart = useChart({
    data: [
      { value: 5},
      { value: 12 },
      { value: 8 },
      { value: 20 },
      { value: 15 },
      { value: 30 },
      { value: 20 },
      { value: 50},
      { value: 48},
      { value: 50 },
      { value: 48 },
      { value: 60 },
      { value: 70 },
      { value: 70 },
    ],
    series: [{ name: "value", color: "#85BA49" }],
  })

  return (
    <Chart.Root width="full" h={"80px"} chart={chart}>
      <AreaChart accessibilityLayer data={chart.data}>
        {chart.series.map((item) => (
          <defs key={item.name}>
            <Chart.Gradient
              id={`${item.name}-gradient`}
              stops={[
                { offset: "0%", color: item.color, opacity: 1 },
                { offset: "100%", color: item.color, opacity: 0.01 },
              ]}
            />
          </defs>
        ))}

        {chart.series.map((item) => (
          <Area
            key={item.name}
            type="natural"
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={"#E4F5D1"}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}
