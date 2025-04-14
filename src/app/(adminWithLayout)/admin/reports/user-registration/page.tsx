"use client";
import { useState } from "react";
import { Download, Calendar, Eye } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialoge";
import StatCard from "@/components/stat-card";
import {
  PharmaTable,
  PharmaTableBody,
  PharmaTableCell,
  PharmaTableHead,
  PharmaTableHeader,
  PharmaTableRow,
} from "@/components/ui/table";
import Pagination from "@/components/pagination";
import Button from "@/components/ui/button";

interface UserRegistration {
  id: string;
  name: string;
  email: string;
  location: string;
  source: string;
  registrationDate: string;
  status: "active" | "pending" | "inactive";
  completedProfile: boolean;
  verifiedEmail: boolean;
}

const registrationData: UserRegistration[] = [
  {
    id: "u1",
    name: "John Smith",
    email: "john.smith@example.com",
    location: "New York, USA",
    source: "Organic Search",
    registrationDate: "2025-04-15T09:24:00",
    status: "active",
    completedProfile: true,
    verifiedEmail: true,
  },
  {
    id: "u2",
    name: "Emma Johnson",
    email: "emma.j@example.com",
    location: "London, UK",
    source: "Social Media",
    registrationDate: "2025-04-15T14:35:00",
    status: "active",
    completedProfile: true,
    verifiedEmail: true,
  },
  {
    id: "u3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    location: "Toronto, Canada",
    source: "Referral",
    registrationDate: "2025-04-14T11:15:00",
    status: "active",
    completedProfile: false,
    verifiedEmail: true,
  },
  {
    id: "u4",
    name: "Sophia Garcia",
    email: "sophia.g@example.com",
    location: "Barcelona, Spain",
    source: "Paid Campaign",
    registrationDate: "2025-04-14T16:42:00",
    status: "pending",
    completedProfile: false,
    verifiedEmail: false,
  },
  {
    id: "u5",
    name: "James Wilson",
    email: "james.w@example.com",
    location: "Sydney, Australia",
    source: "Organic Search",
    registrationDate: "2025-04-13T08:30:00",
    status: "active",
    completedProfile: true,
    verifiedEmail: true,
  },
  {
    id: "u6",
    name: "Olivia Martinez",
    email: "olivia.m@example.com",
    location: "Chicago, USA",
    source: "Social Media",
    registrationDate: "2025-04-13T13:20:00",
    status: "inactive",
    completedProfile: false,
    verifiedEmail: true,
  },
  {
    id: "u7",
    name: "William Lee",
    email: "william.l@example.com",
    location: "Tokyo, Japan",
    source: "Referral",
    registrationDate: "2025-04-12T10:15:00",
    status: "active",
    completedProfile: true,
    verifiedEmail: true,
  },
  {
    id: "u8",
    name: "Ava Thompson",
    email: "ava.t@example.com",
    location: "Berlin, Germany",
    source: "Organic Search",
    registrationDate: "2025-04-12T15:50:00",
    status: "active",
    completedProfile: true,
    verifiedEmail: true,
  },
  {
    id: "u9",
    name: "Ethan Davis",
    email: "ethan.d@example.com",
    location: "Paris, France",
    source: "Paid Campaign",
    registrationDate: "2025-04-11T09:05:00",
    status: "pending",
    completedProfile: false,
    verifiedEmail: false,
  },
  {
    id: "u10",
    name: "Isabella Rodriguez",
    email: "isabella.r@example.com",
    location: "Miami, USA",
    source: "Social Media",
    registrationDate: "2025-04-11T14:30:00",
    status: "active",
    completedProfile: true,
    verifiedEmail: true,
  },
];

// Prepare chart data
const prepareChartData = () => {
  const dailyData = [
    { name: "Apr 9", value: 12 },
    { name: "Apr 10", value: 19 },
    { name: "Apr 11", value: 15 },
    { name: "Apr 12", value: 22 },
    { name: "Apr 13", value: 18 },
    { name: "Apr 14", value: 25 },
    { name: "Apr 15", value: 30 },
  ];

  // Registration sources
  const sourceData = [
    { name: "Organic Search", value: 35 },
    { name: "Social Media", value: 30 },
    { name: "Referral", value: 20 },
    { name: "Paid Campaign", value: 15 },
  ];

  // Completion rate
  const completionData = [
    { name: "Completed Profile", value: 65 },
    { name: "Incomplete Profile", value: 35 },
  ];

  return { dailyData, sourceData, completionData };
};

// Colors for charts
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export default function UserRegistrationPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [exportFormat, setExportFormat] = useState("csv");
  const [isGenerating, setIsGenerating] = useState(false);

  const { dailyData, sourceData, completionData } = prepareChartData();

  // Function to generate and export data
  const generateExport = () => {
    setIsGenerating(true);

    // Simulate export generation
    setTimeout(() => {
      alert(`User registration data exported as ${exportFormat.toUpperCase()}`);
      setIsGenerating(false);
      setModalOpen(false);
    }, 1000);
  };
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(registrationData.length / pageSize);

  return (
    <div className="space-y-6 p-6 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            User Registration
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Monitor user registrations and conversion metrics
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm" className="h-9">
            <Calendar className="w-4 h-4 mr-2" /> Last 7 days
          </Button>
          <Button onClick={() => setModalOpen(true)}>
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value={10} />
        <StatCard title="Active Users" value={10} />
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">User List</TabsTrigger>
          <TabsTrigger value="sources">Registration Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Registration Trend</CardTitle>
                <CardDescription>
                  Daily user registrations over the last 7 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={dailyData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorValue"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#0ea5e9"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#0ea5e9"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#0ea5e9"
                        fillOpacity={1}
                        fill="url(#colorValue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Registration Sources</CardTitle>
                <CardDescription>Where users are coming from</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="h-[300px] w-full max-w-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {sourceData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
                <CardDescription>
                  Percentage of users with completed profiles
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="h-[300px] w-full max-w-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={completionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        <Cell fill="#0ea5e9" />
                        <Cell fill="#94a3b8" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Registration by Hour</CardTitle>
                <CardDescription>Peak registration times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { hour: "6am", value: 5 },
                        { hour: "9am", value: 12 },
                        { hour: "12pm", value: 18 },
                        { hour: "3pm", value: 25 },
                        { hour: "6pm", value: 30 },
                        { hour: "9pm", value: 22 },
                        { hour: "12am", value: 8 },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#8b5cf6"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Registrations</CardTitle>
              <CardDescription>10 users found</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto rounded-lg">
                <PharmaTable>
                  <PharmaTableHeader>
                    <PharmaTableRow>
                      <PharmaTableHead>Serial</PharmaTableHead>
                      <PharmaTableHead>User</PharmaTableHead>
                      <PharmaTableHead>Location</PharmaTableHead>
                      <PharmaTableHead>Source</PharmaTableHead>
                      <PharmaTableHead>Registration Date</PharmaTableHead>
                      <PharmaTableHead>Status</PharmaTableHead>
                      <PharmaTableHead>Action</PharmaTableHead>
                    </PharmaTableRow>
                  </PharmaTableHeader>
                  <PharmaTableBody>
                    {registrationData.length > 0 ? (
                      registrationData.map((user, index) => (
                        <PharmaTableRow key={user.id}>
                          <PharmaTableCell>
                            <div className="bg-teal-600 text-white p-1 px-2 w-fit rounded-md">
                              {(page - 1) * pageSize + index + 1}
                            </div>
                          </PharmaTableCell>
                          <PharmaTableCell>{user.name}</PharmaTableCell>
                          <PharmaTableCell>{user.email}</PharmaTableCell>
                          <PharmaTableCell>{user.location}</PharmaTableCell>
                          <PharmaTableCell>
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                user.status === "active"
                                  ? "bg-teal-100 text-teal-800"
                                  : "bg-red-100 text-red-600"
                              }`}
                            >
                              {user.status}
                            </span>
                          </PharmaTableCell>
                          <PharmaTableCell>
                            <button className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700">
                              <Eye className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                            </button>
                          </PharmaTableCell>
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

                {registrationData.length === 0 && (
                  <div className="text-center py-8 text-slate-500">
                    No users found matching your filters.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          {totalPages > 1 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Registration Sources</CardTitle>
                <CardDescription>
                  Distribution of user acquisition channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={sourceData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={true}
                        vertical={false}
                      />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" width={150} />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="value"
                        name="Users"
                        fill="#0ea5e9"
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Source Performance</CardTitle>
                <CardDescription>Conversion rates by source</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Organic Search
                      </span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Social Media</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
                      <div
                        className="bg-blue-500 h-2.5 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Referral</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
                      <div
                        className="bg-purple-500 h-2.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Paid Campaign</span>
                      <span className="text-sm font-medium">55%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
                      <div
                        className="bg-orange-500 h-2.5 rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Source Trends</CardTitle>
                <CardDescription>
                  Registration sources over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        {
                          date: "Apr 9",
                          organic: 5,
                          social: 4,
                          referral: 2,
                          paid: 1,
                        },
                        {
                          date: "Apr 10",
                          organic: 7,
                          social: 6,
                          referral: 3,
                          paid: 3,
                        },
                        {
                          date: "Apr 11",
                          organic: 6,
                          social: 4,
                          referral: 4,
                          paid: 1,
                        },
                        {
                          date: "Apr 12",
                          organic: 9,
                          social: 7,
                          referral: 3,
                          paid: 3,
                        },
                        {
                          date: "Apr 13",
                          organic: 8,
                          social: 5,
                          referral: 4,
                          paid: 1,
                        },
                        {
                          date: "Apr 14",
                          organic: 11,
                          social: 9,
                          referral: 3,
                          paid: 2,
                        },
                        {
                          date: "Apr 15",
                          organic: 12,
                          social: 8,
                          referral: 5,
                          paid: 5,
                        },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="organic"
                        name="Organic Search"
                        stroke="#0ea5e9"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="social"
                        name="Social Media"
                        stroke="#8b5cf6"
                      />
                      <Line
                        type="monotone"
                        dataKey="referral"
                        name="Referral"
                        stroke="#10b981"
                      />
                      <Line
                        type="monotone"
                        dataKey="paid"
                        name="Paid Campaign"
                        stroke="#f59e0b"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Export Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Export User Registration Data</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div>
              <h4 className="mb-2 text-sm font-medium">Export Format</h4>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="format"
                    value="csv"
                    checked={exportFormat === "csv"}
                    onChange={() => setExportFormat("csv")}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  <span>CSV (.csv)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="format"
                    value="excel"
                    checked={exportFormat === "excel"}
                    onChange={() => setExportFormat("excel")}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  <span>Excel (.xlsx)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="format"
                    value="pdf"
                    checked={exportFormat === "pdf"}
                    onChange={() => setExportFormat("pdf")}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  <span>PDF Report (.pdf)</span>
                </label>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-2 text-sm font-medium">Data to Include</h4>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  <span>User Details</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  <span>Registration Sources</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={true}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  <span>Summary Statistics</span>
                </label>
              </div>
            </div>
          </div>

          <DialogFooter className="sm:justify-between">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              onClick={generateExport}
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Export Data"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
