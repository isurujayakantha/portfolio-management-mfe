import React, { useEffect, useState } from "react";
import {
  Descriptions,
  DescriptionsProps,
  Layout,
  Table, 
  Tabs,
  theme,
} from "antd";
import PortfolioService from "../services/PortfolioService";
import PositionService from "../services/PositionService";
import { Position, positionColumns } from "../props/PositionProps";
const { Content } = Layout;

const PortfolioSummary: React.FC = () => { 
  const [portfolio, setPortfolio] = useState<any>([]);
  const [positions, setPositions] = useState<any>([]);
  const [customerName, setCustomerName] = useState<string>(); 
 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const tabs: any[] = [
    {
      label: `Positions`,
      key: 1,
      children: <Table columns={positionColumns} dataSource={positions} />,
    },
    {
      label: `Audit`,
      key: 2,
      children: `Content of Tab Pane 2`,
    },
  ];

  useEffect(() => { 
    populatePortfolioDetails();
    populatePositionDetails();
  }, [customerName]);

  function populatePortfolioDetails() {
    const portfolioData: Promise<Portfolio> =
      PortfolioService.getPortfolios("111");
    const portfolios: DescriptionsProps["items"] = [];
    portfolioData.then((portf: Portfolio) => {
      portfolios.push(
        {
          key: "1",
          label: "Portfolio Number",
          children: portf.portfolioNumber,
        },
        {
          key: "2",
          label: "Portfolio Value",
          children: portf.portfolioValue,
        },
        {
          key: "3",
          label: "Current Performance",
          children: portf.currentPerformance,
        },
        {
          key: "4",
          label: "Investment Stratergy",
          children: portf.investmentStrategy,
        }
      );
      setCustomerName(portf.customerName);
      setPortfolio(portfolios);
    });
  }


  function populatePositionDetails() {
    const positionData: Promise<Position[]> = PositionService.getPositions("111");
    const data: any[] = [];
    
    positionData.then((portf: Position[]) => {
      
      portf?.map((item: Position, index: any) => {
        data.push({
          key: index,
          instrumentId: item.instrumentId,
          instrumentName: item.instrumentName,
          instrumentPrice: item.instrumentPrice,
          units: item.units,
        });
      });
  
      setPositions(data);
    });
  }

  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Descriptions title={customerName} items={portfolio} />
        <Tabs defaultActiveKey="1" items={tabs} />
      </Content>
    </Layout>
  );
};

export default PortfolioSummary;


