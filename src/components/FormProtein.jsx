import { Button, Flex, Form, InputNumber, Space, Tooltip } from 'antd'
import FoodStoreItem from './common/FoodStoreItem'
import { usePostRecommendWeight } from '@/apis/manage-weight/manage-weight.query'
import { useState } from 'react'
import ModalContent from './common/ModalContent'
import ContentFooter from './common/ContentFooter'
import useValues from '@/hooks/useValues'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  },
  size: 'large'
}

const FormProtein = ({ topicId }) => {
  const [ open, setOpen ] = useState(false)
  const [ form ] = Form.useForm()
  const { mutate, isPending, data } = usePostRecommendWeight()
  const setValues = useValues((state) => state.setValues)

  const onFinish = (values) => {
    const data = {
      topic_id: topicId,
      restaurants: values.user.foodStores ?? [],
      form_data: {
        calories: values.user.calories,
        protein: values.user.protein,
        total_fat: values.user.total_fat
      }
    }
    mutate(data)
    setValues(data)
  }

  return (
    <Flex vertical>
      <Form
        {...formItemLayout}
        style={{ maxWidth: 1200, width: '100%' }}
        className="mx-auto"
        onFinish={onFinish}
        form={form}
        disabled={isPending}
      >
        <Tooltip title='Lượng calories nên từ 250 (kcal) đến 810 (kcal)'>
          <Form.Item
            name={[ 'user', 'calories' ]}
            label="Lượng calories (kcal)"
            rules={[ { type: 'number', min: 0, max: 10000, required: true, message: 'Lượng calories (kcal) phải phù hợp' } ]}
            hasFeedback
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </Tooltip>

        <Tooltip title='Lượng protein nên từ 10 (g) đến 45 (g)'>
          <Form.Item
            name={[ 'user', 'protein' ]}
            label="Lượng protein (g)"
            rules={[ { type: 'number', min: 0, max: 10000, required: true, message: 'Lượng protein (g) phải phù hợp' } ]}
            hasFeedback
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </Tooltip>

        <Tooltip title='Lượng chất béo nên từ 8 (g) đến 45 (g)'>
          <Form.Item
            name={[ 'user', 'total_fat' ]}
            label="Lượng chất béo (g)"
            rules={[ { type: 'number', min: 0, max: 10000, required: true, message: 'Lượng chất béo (g) phải phù hợp' } ]}
            hasFeedback
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </Tooltip>

        <Form.Item
          name={[ 'user', 'foodStores' ]}
          label="Cửa hàng"
          hasFeedback
        >
          <FoodStoreItem />
        </Form.Item>

        <Form.Item label={null}>
          <Space >
            <Button type="primary" htmlType="submit" loading={isPending}>
            Xác nhận
            </Button>
            <Button danger onClick={() => form.resetFields()}>
            Đặt lại
            </Button>
          </Space>
        </Form.Item>
      </Form>
      {
        data && <>
          <Button type='primary' className='w-96 mx-auto' onClick={() => setOpen(true)}>Xem kết quả</Button>
          <ContentFooter />
        </>
      }
      <ModalContent open={open} setOpen={setOpen} data={data} />
    </Flex>
  )
}

export default FormProtein
