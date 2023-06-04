import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const AdminHome = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["adminstats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminstats");
      return res.data;
    },
  });

  const { data: orderStatesData } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  console.log(orderStatesData);
  //for barchart
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //for pie chart

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042","pink"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <h1>Admin Home</h1>
      <div className="grid  grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="bg-orange-400 rounded-xl mt-8 h-32">
          <div className="flex justify-center flex-col h-full items-center">
            <h1>Total Customers</h1>
            {data?.customers}
          </div>
        </div>
        <div className="bg-orange-400 rounded-xl mt-8 h-32">
          <div className="flex justify-center flex-col h-full items-center">
            <h1>Total Orders</h1>
            {data?.orders}
          </div>
        </div>
        <div className="bg-orange-400 rounded-xl mt-8 h-32">
          <div className="flex justify-center flex-col h-full items-center">
            <h1>Total Products</h1>
            {data?.products}
          </div>
        </div>
        <div className="bg-orange-400 rounded-xl mt-8 h-32">
          <div className="flex justify-center flex-col h-full items-center">
            <h1>Total Revenue</h1>
            {data?.revenue}
          </div>
        </div>
      </div>
      <div className="grid  gap-6 grid-cols-1 lg:grid-cols-2">
        <div>
          <BarChart
            width={500}
            height={300}
            data={orderStatesData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="total"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {orderStatesData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
            <Legend></Legend>
              <Pie
                data={orderStatesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {orderStatesData?.map((entry, index) => (
                  <Cell name={entry.category}
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
