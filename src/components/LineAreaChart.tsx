"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const chartData = [
  { date: "2025-01-01", desktop: 222 },
  { date: "2025-01-02", desktop: 97 },
  { date: "2025-01-03", desktop: 167 },
  { date: "2025-01-04", desktop: 242 },
  { date: "2025-01-05", desktop: 373 },
  { date: "2025-01-06", desktop: 301 },
  { date: "2025-01-07", desktop: 245 },
  { date: "2025-01-08", desktop: 0 },
  { date: "2025-01-09", desktop: 59 },
  { date: "2025-01-10", desktop: 261 },
  { date: "2025-01-11", desktop: 327 },
  { date: "2025-01-12", desktop: 292 },
  { date: "2025-01-13", desktop: 342 },
  { date: "2025-01-14", desktop: 137 },
  { date: "2025-01-15", desktop: 120 },
  { date: "2025-01-16", desktop: 138 },
  { date: "2025-01-17", desktop: 446 },
  { date: "2025-01-18", desktop: 364 },
  { date: "2025-01-19", desktop: 243 },
  { date: "2025-01-20", desktop: 89 },
  { date: "2025-01-21", desktop: 137 },
  { date: "2025-01-22", desktop: 224 },
  { date: "2025-01-23", desktop: 138 },
  { date: "2025-01-24", desktop: 387 },
  { date: "2025-01-25", desktop: 215 },
  { date: "2025-01-26", desktop: 75 },
  { date: "2025-01-27", desktop: 383 },
  { date: "2025-01-28", desktop: 122 },
  { date: "2025-01-29", desktop: 315 },
  { date: "2025-01-30", desktop: 454 },
  { date: "2025-02-01", desktop: 165 },
  { date: "2025-02-02", desktop: 293 },
  { date: "2025-02-03", desktop: 247 },
  { date: "2025-02-04", desktop: 385 },
  { date: "2025-02-05", desktop: 481 },
  { date: "2025-02-06", desktop: 498 },
  { date: "2025-02-07", desktop: 388 },
  { date: "2025-02-08", desktop: 149 },
  { date: "2025-02-09", desktop: 227 },
  { date: "2025-02-10", desktop: 293 },
  { date: "2025-02-11", desktop: 335 },
  { date: "2025-02-12", desktop: 197 },
  { date: "2025-02-13", desktop: 197 },
  { date: "2025-02-14", desktop: 448 },
  { date: "2025-02-15", desktop: 473 },
  { date: "2025-02-16", desktop: 338 },
  { date: "2025-02-17", desktop: 499 },
  { date: "2025-02-18", desktop: 315 },
  { date: "2025-02-19", desktop: 235 },
  { date: "2025-02-20", desktop: 177 },
  { date: "2025-02-21", desktop: 82 },
  { date: "2025-02-22", desktop: 81 },
  { date: "2025-02-23", desktop: 252 },
  { date: "2025-02-24", desktop: 294 },
  { date: "2025-02-25", desktop: 201 },
  { date: "2025-02-26", desktop: 213 },
  { date: "2025-02-27", desktop: 420 },
  { date: "2025-02-28", desktop: 233 },
  { date: "2025-02-29", desktop: 78 },
  { date: "2025-02-30", desktop: 340 },
  { date: "2025-02-31", desktop: 178 },
  { date: "2025-03-01", desktop: 178 },
  { date: "2025-03-02", desktop: 470 },
  { date: "2025-03-03", desktop: 103 },
  { date: "2025-03-04", desktop: 439 },
  { date: "2025-03-05", desktop: 88 },
  { date: "2025-03-06", desktop: 294 },
  { date: "2025-03-07", desktop: 323 },
  { date: "2025-03-08", desktop: 385 },
  { date: "2025-03-09", desktop: 438 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(210, 100%, 50%)",
  },
} satisfies ChartConfig;

export function LineAreaChart() {
  const [timeRange, setTimeRange] = useState("7d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    // Find the latest date in the data
    const maxDate = chartData.reduce((latest, curr) => {
      const currDate = new Date(curr.date);
      return currDate > latest ? currDate : latest;
    }, new Date(chartData[0].date));
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(maxDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>See your cases</CardTitle>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis tickLine={true} axisLine={true} tickMargin={8} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
