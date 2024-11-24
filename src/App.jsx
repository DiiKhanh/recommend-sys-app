import { Layout, Flex } from "antd"
import Header from "@/components/Header"
import TabComponent from "./components/TabComponent"
import ThemeConfigProvider from "./providers/ThemeConfigProvider"
import QueryConfigProvider from "./providers/QueryConfigProvider"

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
    <ThemeConfigProvider>
      <QueryConfigProvider>
        <Flex gap="middle" wrap>
          <Layout style={layoutStyle}>
            <Header />
            <Content style={contentStyle}>
              <TabComponent />
            </Content>
          </Layout>
        </Flex>
      </QueryConfigProvider>
    </ThemeConfigProvider>
  )
}

export default App