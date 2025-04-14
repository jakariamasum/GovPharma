"use client";
import { Download, Filter, Calendar } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Button from "@/components/ui/button";
import {
  PharmaTable,
  PharmaTableBody,
  PharmaTableCell,
  PharmaTableHead,
  PharmaTableHeader,
  PharmaTableRow,
} from "@/components/ui/table";
import { useState } from "react";
import Pagination from "@/components/pagination";
import StatCard from "@/components/stat-card";

interface SalesItem {
  product: string;
  category: string;
  quantity: number;
  revenue: number;
  date: string;
}

interface CategorySummary {
  [key: string]: {
    revenue: number;
    quantity: number;
  };
}

interface ChartDataItem {
  name: string;
  revenue: number;
  quantity: number;
}

const reportData: SalesItem[] = [
  {
    product: "Product A",
    category: "Category 1",
    quantity: 20,
    revenue: 400,
    date: "2025-04-15",
  },
  {
    product: "Product B",
    category: "Category 2",
    quantity: 15,
    revenue: 300,
    date: "2025-04-15",
  },
  {
    product: "Product C",
    category: "Category 1",
    quantity: 30,
    revenue: 600,
    date: "2025-04-14",
  },
  {
    product: "Product D",
    category: "Category 3",
    quantity: 10,
    revenue: 500,
    date: "2025-04-14",
  },
  {
    product: "Product E",
    category: "Category 2",
    quantity: 25,
    revenue: 450,
    date: "2025-04-13",
  },
];

// Chart data preparation
const chartData: ChartDataItem[] = reportData.map((item) => ({
  name: item.product,
  revenue: item.revenue,
  quantity: item.quantity,
}));

// Category summary
const categorySummary: CategorySummary = reportData.reduce(
  (acc: CategorySummary, item) => {
    if (!acc[item.category]) {
      acc[item.category] = { revenue: 0, quantity: 0 };
    }
    acc[item.category].revenue += item.revenue;
    acc[item.category].quantity += item.quantity;
    return acc;
  },
  {}
);

const categoryChartData: ChartDataItem[] = Object.entries(categorySummary).map(
  ([category, data]) => ({
    name: category,
    revenue: data.revenue,
    quantity: data.quantity,
  })
);

export default function SalesReportPage() {
  const totalRevenue = reportData.reduce((acc, cur) => acc + cur.revenue, 0);
  const totalQuantity = reportData.reduce((acc, cur) => acc + cur.quantity, 0);
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(reportData.length / pageSize);

  return (
    <div className="space-y-6 p-6 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            Sales Report
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Overview of sales performance and metrics
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <Calendar className="w-4 h-4 mr-2" /> Apr 10 - Apr 15
          </Button>
          <Button>
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Revenue" value={totalRevenue} />
        <StatCard title="Total Quantity" value={totalQuantity} />
        <StatCard title="Average Order Value" value={5} />
      </div>

      <Tabs defaultValue="table" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="chart">Chart View</TabsTrigger>
          <TabsTrigger value="category">Category Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="table">
          <Card>
            <CardHeader>
              <CardTitle>Sales Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto rounded-lg">
                <PharmaTable>
                  <PharmaTableHeader>
                    <PharmaTableRow>
                      <PharmaTableHead>Serial</PharmaTableHead>
                      <PharmaTableHead>Product</PharmaTableHead>
                      <PharmaTableHead>Category</PharmaTableHead>
                      <PharmaTableHead>Quantity</PharmaTableHead>
                      <PharmaTableHead>Revenue</PharmaTableHead>
                      <PharmaTableHead>Date</PharmaTableHead>
                    </PharmaTableRow>
                  </PharmaTableHeader>
                  <PharmaTableBody>
                    {reportData?.length > 0 ? (
                      reportData.map((report, index) => (
                        <PharmaTableRow key={index}>
                          <PharmaTableCell>
                            <div className="bg-teal-600 text-white p-1 px-2 w-fit rounded-md">
                              {(page - 1) * pageSize + index + 1}
                            </div>
                          </PharmaTableCell>
                          <PharmaTableCell>{report.product}</PharmaTableCell>
                          <PharmaTableCell>{report.category}</PharmaTableCell>
                          <PharmaTableCell>{report.quantity}</PharmaTableCell>
                          <PharmaTableCell>{report.revenue}</PharmaTableCell>
                          <PharmaTableCell>{report.date}</PharmaTableCell>
                        </PharmaTableRow>
                      ))
                    ) : (
                      <PharmaTableRow>
                        <PharmaTableCell
                          colSpan={6}
                          className="text-center py-6 text-slate-500 dark:text-slate-400"
                        >
                          No users found.
                        </PharmaTableCell>
                      </PharmaTableRow>
                    )}
                  </PharmaTableBody>
                </PharmaTable>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chart">
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="name"
                      stroke="#888"
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis stroke="#888" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        border: "none",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="revenue"
                      name="Revenue ($)"
                      fill="#0ea5e9"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="quantity"
                      name="Quantity"
                      fill="#14b8a6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="category">
          <Card>
            <CardHeader>
              <CardTitle>Category Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={categoryChartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        border: "none",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="revenue"
                      name="Revenue ($)"
                      fill="#8b5cf6"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="quantity"
                      name="Quantity"
                      fill="#ec4899"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
