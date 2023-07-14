import React from "react";
import styles from "./index.module.css";
// import Card from "../common/Card";
// import { PieChart, Pie, ResponsiveContainer } from "recharts";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MainPage = () => {
    const data = [
        {
          name: "3 June",
          Workers: 100,
        },
        {
          name: "4 June",
          Workers: 150,
        },
        {
          name: "5 June",
          Workers: 150,
        },
        {
          name: "6 June",
          Workers: 250,
        },
        {
          name: "7 June",
          Workers: 290,
        },
        {
          name: "8 June",
          Workers: 230,
        },
        {
          name: "9 June",
          Workers: 250,
        },
        {
          name: "10 June",
          Workers: 100,
        },
        {
          name: "11 June",
          Workers: 280,
        },
        {
          name: "12 June",
          Workers: 300,
        },
        {
            name: "13 June",
            Workers: 350,
        },
        {
            name: "14 June",
            Workers: 400,
        },
      
      ];
  const data02 = [
    {
      name: "passed",
      value: 1423,
    },
    {
      name: "failed",
      value: 134,
    },
  ];

  const data2 = [
    {
      day: "S",
      training: 30,
    },
    {
      day: "M",
      training: 60,
    },
    {
      day: "T",
      training: 40,
    },
    {
      day: "W",
      training: 60,
    },
    {
      day: "T",
      training: 40,
    },
    {
      day: "F",
      training: 70,
    },
    {
      day: "S",
      training: 40,
    },
    {
      day: "M",
      training: 30,
    },
    {
      day: "T",
      training: 50,
    },
    {
      day: "W",
      training: 45,
    },
  
  ];

  const rangeData = [
    {
      day: "M",
      Workers: 0,
    },
    {
      day: "T",
      Workers: 7,
    },
    {
      day: "W",
      Workers: 5,
    },
    {
      day: "T",
      Workers: 6,
    },
    {
      day: "F",
      Workers: 3,
    },
    {
      day: "S",
      Workers: 2,
    },
    {
      day: "S",
      Workers: 0,
    },
  ];
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainHeader}>
        <div>
          <h1>Hello, Puneet Dhiman</h1>
          <p>Following Is Your Organization’s Performance Summary</p>
        </div>
      </div>
      {/* <div>
        hello
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={500} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
      </div> */}

      <div className={styles.mainBody}>
        <div className={styles.mainFirst}>
          <div className={styles.card}>
            <div className={styles.cardHeading}>In Training Workers</div>
            <div className={styles.cardBody}>
              <div>3354</div>
              <div className={styles.areaChart}>
                <ResponsiveContainer width="100%" aspect={1}>
                  <AreaChart
                    //   width={150}
                    //   height={150}
                    data={rangeData}
                    margin={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                  >
                    <XAxis dataKey="day" />
                    {/* <YAxis /> */}
                    <Area
                      dataKey="Workers"
                      stroke="#018E42"
                      fill="#018E42"
                    />
                    {/* <Tooltip /> */}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeading}>Video Watch-Time(Hrs)</div>
            <div className={styles.cardBody}>
              <div>5647</div>
              <div className={styles.areaChart}>
                <ResponsiveContainer width="100%" aspect={1}>
                  <AreaChart
                    //   width={150}
                    //   height={150}
                    data={rangeData}
                    margin={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                  >
                    <XAxis dataKey="day" />
                    {/* <YAxis /> */}
                    <Area
                      dataKey="Workers"
                      stroke="#ED1C24"
                      fill="#ED1C24"
                    />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeading}>%Workers Passing Quiz</div>
            <div className={styles.cardBody}>
              <div>5647</div>
              <div className={styles.areaChart}>
                <ResponsiveContainer width="100%" aspect={1}>
                  <AreaChart
                    //   width={150}
                    //   height={150}
                    data={rangeData}
                    margin={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                  >
                    <XAxis dataKey="day" />
                    {/* <YAxis /> */}
                    <Area dataKey="Workers" stroke="#018E42" fill="#018E42" />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeading}>Avg. Days Taken</div>
            <div className={styles.cardBody}>
              <div>5647</div>
              <div className={styles.areaChart}>
                <ResponsiveContainer width="100%" aspect={1}>
                  <AreaChart
                    //   width={150}
                    //   height={150}
                    data={rangeData}
                    margin={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                  >
                    <XAxis dataKey="day" />
                    {/* <YAxis /> */}
                    <Area dataKey="Workers" stroke="#018E42" fill="#018E42" />
                    <Tooltip />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainSecond}>
          <div className={styles.card}>
            <div className={styles.card1}>
              <div className={styles.cardHeading}>Chapter Wise Status</div>
              <div className={styles.cardBody}>
                <div>5647</div>
                <div className={styles.areaChart}>
                  <ResponsiveContainer width="100%" aspect={1}>
                    <PieChart>
                      <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={70}
                        fill="#82ca9d"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardSecond}>
            <div className={styles.card}>
              <div className={styles.card1}>
                <div className={styles.cardHeading}>
                  Last 14 Days Active Workers In Training
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.areaChart}>
                    <ResponsiveContainer width="100%" aspect={2}>
                      <BarChart width="100%" data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="Workers" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainThird}>
          <div>
            <div className={styles.card}>
              <div className={styles.cardHeading}>
                Monthly Training Activity
              </div>
              <p>16% more enrollees this month</p>
              <div className="">
                <div>
                    <h6>course a</h6>
                    <p>23 workers took this course this week</p>
                </div>
                <div>
                    <h6>course b</h6>
                    <p>253 workers took this course this week</p>
                </div>
                <div>
                    <h6>course c</h6>
                    <p>253 workers took this course this week</p>
                </div>
                <div>
                    <h6>course d</h6>
                    <p>253 workers took this course this week</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.cardHeading}>Quiz Passing %</div>
              <div className={styles.cardBody}>
                <div>5647</div>
                <div className={styles.areaChart}>
                  <ResponsiveContainer width="100%" aspect={1}>
                    <PieChart>
                      <Pie
                        data={data02}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        fill="#82ca9d"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.cardHeading}>
                Daily Training Completions
              </div>
              <div className={styles.cardBody}>
                  <div className={styles.areaChart}>
                    <ResponsiveContainer width="100%" aspect={2}>
                      <BarChart width="100%" data={data2}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="training" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
