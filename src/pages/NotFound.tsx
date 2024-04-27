import React from "react";
import { Layout } from "antd";
const { Content } = Layout;

const NotFound: React.FC = () => {
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          backgroundColor: "white",
          color:"red"
        }}
      >
        <h3 style={{textAlign:"center",}}>Unable to find the information</h3>
      </Content>
    </Layout>
  );
};

export default NotFound;
