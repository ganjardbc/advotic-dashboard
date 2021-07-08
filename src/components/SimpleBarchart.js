import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    gross: 590,
    nett: 800,
    apv: 1400,
    upt: 798
  },
  {
    name: 'Tues',
    gross: 868,
    nett: 967,
    apv: 1506,
    upt: 500
  },
  {
    name: 'Wed',
    gross: 1397,
    nett: 1098,
    apv: 989,
    upt: 200
  },
  {
    name: 'Thu',
    gross: 1480,
    nett: 1200,
    apv: 1228,
    upt: 1100
  },
  {
    name: 'Fri',
    gross: 1520,
    nett: 1108,
    apv: 1100,
    upt: 450
  },
  {
    name: 'Sat',
    gross: 1400,
    nett: 680,
    apv: 1700,
    upt: 890
  },
  {
    name: 'Sun',
    gross: 900,
    nett: 850,
    apv: 1340,
    upt: 546
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="gross" stackId="a" barSize={20} fill="#37B04C" />
          <Bar dataKey="nett" stackId="b" barSize={20} fill="#289E45" />
          <Bar dataKey="apv" stackId="c" barSize={20} fill="#7AE28C" />
          {/* <Bar dataKey="upt" stackId="d" barSize={20} fill="#707070" /> */}
          <Line type="monotone" dataKey="upt" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}