import { ConfigProvider } from "antd"

function ThemeConfigProvider({ children }) {
  return (
    <ConfigProvider theme={{
      token: {
        fontFamily: "'Roboto', sans-serif",
        colorPrimary: '#1F509A',
        colorFillSecondary: '#80C4E9'
      }
    }}>
      {children}
    </ConfigProvider>
  )
}

export default ThemeConfigProvider