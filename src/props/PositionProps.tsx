import { TableProps } from "antd";

export interface Position {
  instrumentId: string,
  instrumentName: string;
  instrumentPrice: string;
  units: string;
}

export const positionColumns: TableProps<any>["columns"] = [
  {
    title: "Instrument Id",
    dataIndex: "instrumentId",
    key: "instrumentId",
    render: (text) => <>{text}</>,
  },
  {
    title: "Instrument Name",
    dataIndex: "instrumentName",
    key: "instrumentName",
    render: (text) => <>{text}</>,
    onFilter: (value, record) =>
      record.instrumentName.indexOf(value as string) === 0,
    sorter: (a, b) => a.instrumentName.length - b.instrumentName.length,
    filters: [
      {
        text: "111",
        value: "111",
      },
    ],
  },
  {
    title: "Instrument Price",
    dataIndex: "instrumentPrice",
    key: "instrumentPrice",
    render: (text) => <>{text}</>,
  },
  {
    title: "Units",
    dataIndex: "units",
    key: "units",
    render: (text) => <>{text}</>,
  },
];
