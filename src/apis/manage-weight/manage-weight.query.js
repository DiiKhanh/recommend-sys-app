import { useMutation } from '@tanstack/react-query'

import manageWeightApi from './manage-weight.api'
import { notification } from 'antd'


export const usePostRecommendWeight = () => {
  return useMutation({
    mutationFn: manageWeightApi.postRecommend,
    onSuccess: () => {
      notification.success({
        message: 'Success',
        description: 'Your data was submitted successfully.'
      })
    },
    onError: (error) => {
      notification.error({
        message: 'Error',
        description: error?.message || 'An error occurred while processing your request.'
      })
    }
  })
}