import { ConfigProvider as ConfigProviderAnt } from "antd"

function ConfigProvider({ children }) {
  return (
    <ConfigProviderAnt theme={{
      token: {
        fontFamily: "'Roboto', sans-serif",
        colorPrimary: '#1F509A',
        colorFillSecondary: '#80C4E9'
      }
    }}>
      {children}
    </ConfigProviderAnt>
  )
}

export default ConfigProvider