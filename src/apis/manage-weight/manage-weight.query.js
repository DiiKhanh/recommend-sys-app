import { useMutation } from '@tanstack/react-query'
import manageWeightApi from './manage-weight.api'
import { notification } from 'antd'


export const usePostRecommendWeight = () => {
  return useMutation({
    mutationFn: manageWeightApi.postRecommend,
    onSuccess: (data) => {
      notification.success({
        message: 'Success',
        description: data?.message ?? 'Your data was submitted successfully.'
      })
    },
    onError: (error) => {
      notification.error({
        message: 'Error',
        description: error?.message ?? 'Something error when recommend'
      })
    }
  })
}