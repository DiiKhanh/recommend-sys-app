import { Button, Form, InputNumber, Space } from 'antd'
import FoodStoreItem from './common/FoodStoreItem'

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

  const onFinish = (values) => {
    console.log(values)
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

      {/* Select Food Store */}
      <Form.Item
        name={[ 'user', 'foodStores' ]}
        label="Food store"
        hasFeedback
      >
        <FoodStoreItem />
      </Form.Item>

      <Form.Item label={null}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button danger onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default FormWeight
