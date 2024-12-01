import { Button, Flex, Form, InputNumber, Space, Tooltip } from 'antd'
import FoodStoreItem from './common/FoodStoreItem'
import { usePostRecommendText, usePostRecommendWeight } from '@/apis/manage-weight/manage-weight.query'
import { useState } from 'react'
import ModalContent from './common/ModalContent'
import ContentFooter from './common/ContentFooter'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  },
  size: 'large'
}

const FormSpecial = ({ topicId }) => {
  const [ open, setOpen ] = useState(false)
  const [ form ] = Form.useForm()
  const { mutate, isPending, data } = usePostRecommendWeight()
  const { mutate: viewText, data: text, isPending: loadingAI } = usePostRecommendText()

  const onFinish = (values) => {
    const data = {
      topic_id: topicId,
      restaurants: values.user.foodStores ?? [],
      form_data: {
        trans_fat: values.user.trans_fat,
        total_carb: values.user.total_carb,
        total_fat: values.user.total_fat,
        calories: values.user.calories
      }
    }
    mutate(data)
    viewText(data)
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
        <Tooltip title='Lượng calo nên từ 250 đến 810'>
          <Form.Item
            name={[ 'user', 'calories' ]}
            label="Số liệu về lượng calo"
            rules={[ { type: 'number', min: 0, max: 10000, required: true, message: 'Lượng calo phải phù hợp' } ]}
            hasFeedback
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </Tooltip>

        <Tooltip title='Lượng chuyển đổi chất béo nên từ 0 đến 2'>
          <Form.Item
            name={[ 'user', 'trans_fat' ]}
            label="Số liệu về lượng chuyển đổi chất béo"
            rules={[ { type: 'number', min: 0, max: 10000, required: true, message: 'Lượng chuyển đổi chất béo phải phù hợp' } ]}
            hasFeedback
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </Tooltip>

        <Tooltip title='Lượng chất béo nên từ 8 đến 45'>
          <Form.Item
            name={[ 'user', 'total_fat' ]}
            label="Số liệu về lượng chất béo"
            rules={[ { type: 'number', min: 0, max: 10000, required: true, message: 'Lượng chất béo phải phù hợp' } ]}
            hasFeedback
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </Tooltip>
        <Tooltip title='Lượng tinh bột nên từ 20 đến 70'>
          <Form.Item
            name={[ 'user', 'total_carb' ]}
            label="Số liệu về lượng tinh bột"
            rules={[ { type: 'number', min: 0, max: 10000, required: true, message: 'Lượng tinh bột phải phù hợp' } ]}
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
      <ModalContent open={open} setOpen={setOpen} data={data} loading={loadingAI} text={text}/>
    </Flex>
  )
}

export default FormSpecial
