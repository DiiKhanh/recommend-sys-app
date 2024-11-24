import { useMutation } from '@tanstack/react-query'

import manageWeightApi from './manage-weight.api'
import { notification } from 'antd'


export const useAddTodoMutation = () => {
  return useMutation({
    mutationFn: manageWeightApi.postRecommend,
    onSuccess: () => {
      notification.success('success')
    },
    onError: () => {
      notification.error('failed')
    }
  })
}