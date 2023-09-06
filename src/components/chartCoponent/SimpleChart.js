import React from "react";
import Chart from "react-apexcharts";
const data = {
    series: [
        {
            name: "Kg",
            data: [100, 95, 85, 90, 85, 77, 73, 68, 65],
        },
    ],
    options: {
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        title: {
            text: "Weight in relation to months of diet",
            align: "left",
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
            ],
        },
    },
};
function ApexLineChart() {
    return (
        <div>
            <Chart
                options={data.options}
                series={data.series}
                type="line"
                height={350}
            />
        </div>
    );
}
export default ApexLineChart;