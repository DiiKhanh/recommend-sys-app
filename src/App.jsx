import ConfigProvider from "./configs/theme/ConfigProvider"
import { Layout, Flex } from "antd"
import Header from "@/components/Header"
import TabComponent from "./components/TabComponent"

const { Content } = Layout

const contentStyle = {
  minHeight: 120,
  backgroundColor: '#E5E3D4',
  paddingInline: 48
}

const layoutStyle = {
  overflow: 'hidden',
  width: '100vw',
  maxWidth: '100vw',
  minHeight: '100vh'
}

function App() {
  return (
    <ConfigProvider>
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header />
          <Content style={contentStyle}>
            <TabComponent />
          </Content>
        </Layout>
      </Flex>
    </ConfigProvider>
  )
}

export default App