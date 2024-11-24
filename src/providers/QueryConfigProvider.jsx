import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { notification } from 'antd'

const QueryConfigProvider = ({ children }) => {
  const [ queryClient ] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            onError: (error) => {
              notification.error({
                message: 'Something went wrong',
                description:
                  error?.message || 'An unexpected error occurred.',
                duration: 5
              })
            }
          }
        }
      })
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryConfigProvider