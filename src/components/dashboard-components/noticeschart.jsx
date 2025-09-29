// NoticesChart.tsx
"use client"
import { Chart, useChart } from "@chakra-ui/charts"
import { Area, AreaChart, ResponsiveContainer } from "recharts"

export default function NoticesChart() {
  const chart = useChart({
    data: [ /* ... */ ],
    series: [{ name: "value", color: "teal.solid" }],
  })

  return (
    <Chart.Root w="100px" h="100%" chart={chart}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chart.data}>
          {/* defs + Area as before */}
          {chart.series.map((item) => (
            <Area
              key={item.name}
              type="natural"
              isAnimationActive={false}
              dataKey={chart.key(item.name)}
              fill={`url(#${item.name}-gradient)`}
              stroke={chart.color(item.color)}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </Chart.Root>
  )
}
