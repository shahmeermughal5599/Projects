import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useQuery } from "react-query";
import { DashboardService } from "../../services/dashboard.service";
import { Spin } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = [
  "Post Count",
  "Comments Count",
  "Users Count",
  "Category Count",
];

function Dashboard() {
  const { data: dashboardData, isLoading: dashboardDataLoader } = useQuery(
    "dashboardData",
    () => DashboardService.getDashboardAnalytic()
  );

  const {
    post_count = 0,
    comment_count = 0,
    user_count = 0,
    category_count = 0,
  } = dashboardData?.data?.results ?? {};

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [post_count, comment_count, user_count, category_count],
        backgroundColor: "blue",
      },
    ],
  };
  return (
    <Spin spinning={dashboardDataLoader}>
      <h2>Dashboard</h2>

      <Bar options={options} data={data} />
    </Spin>
  );
}

export default Dashboard;
