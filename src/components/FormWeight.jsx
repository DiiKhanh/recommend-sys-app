import { Button, Form, InputNumber, Space } from 'antd'
import FoodStoreItem from './common/FoodStoreItem'
import { usePostRecommendWeight } from '@/apis/manage-weight/manage-weight.query'

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

const FormWeight = () => {
  const [ form ] = Form.useForm()
  const { mutate, isPending } = usePostRecommendWeight()

  const onFinish = (values) => {
    const data = {
      topic_id11: 1,
      restaurants1s: [],
      form_data: {
        calories: 500,
        total_carb: 50,
        sugar: 10
      }
    }
    mutate(data)
  }

  return (
    <Form
      {...formItemLayout}
      style={{ maxWidth: 800 }}
      className="mx-auto"
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        name={[ 'user', 'calories' ]}
        label="Calories"
        rules={[ { type: 'number', min: 0, max: 10000, required: true, message: 'Calories must be between 0 and 10,000' } ]}
        hasFeedback
      >
        <InputNumber className="w-full" />
      </Form.Item>

      <Form.Item
        name={[ 'user', 'foodStores' ]}
        label="Food store"
        hasFeedback
      >
        <FoodStoreItem />
      </Form.Item>

      <Form.Item label={null}>
        <Space>
          <Button type="primary" htmlType="submit" loading={isPending}>
            Submit
          </Button>
          <Button danger onClick={() => form.resetFields()} disabled={isPending}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default FormWeight
