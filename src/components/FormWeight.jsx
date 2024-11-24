import { Alert, Button, Flex, Form, Input, InputNumber, Modal, notification, QRCode, Space, Tag, Tooltip } from 'antd'
import {
  FacebookOutlined,
  LinkedinOutlined,
  CopyOutlined,
  YoutubeOutlined
} from '@ant-design/icons'
import FoodStoreItem from './common/FoodStoreItem'
import { usePostRecommendWeight } from '@/apis/manage-weight/manage-weight.query'
import Marquee from 'react-fast-marquee'
import { useState } from 'react'
import TableComponent from './common/TableComponent'

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

const FormWeight = ({ topicId, ref3 }) => {
  const [ open, setOpen ] = useState(false)
  const [ form ] = Form.useForm()
  const { mutate, isPending, data } = usePostRecommendWeight()

  const onFinish = (values) => {
    const data = {
      topic_id: topicId,
      restaurants: values.user.foodStores ?? [],
      form_data: {
        calories: values.user.calories,
        total_carb: values.user.total_carb,
        sugar: values.user.sugar
      }
    }
    mutate(data)
  }

  console.log(data)

  return (
    <Flex vertical>
      <Form
        {...formItemLayout}
        style={{ maxWidth: 800, width: '100%' }}
        className="mx-auto"
        onFinish={onFinish}
        form={form}
        disabled={isPending}
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
          name={[ 'user', 'sugar' ]}
          label="Sugar"
          rules={[ { type: 'number', min: 0, max: 10000, required: true, message: 'sugar must be between 0 and 10,000' } ]}
          hasFeedback
        >
          <InputNumber className="w-full" />
        </Form.Item>

        <Form.Item
          name={[ 'user', 'total_carb' ]}
          label="Total carb"
          rules={[ { type: 'number', min: 0, max: 10000, required: true, message: 'Total carb must be between 0 and 10,000' } ]}
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
          <Space ref={ref3}>
            <Button type="primary" htmlType="submit" loading={isPending}>
            Submit
            </Button>
            <Button danger onClick={() => form.resetFields()}>
            Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
      {
        !data && <Button type='primary' className='w-96 mx-auto' onClick={() => setOpen(true)}>View result</Button>
      }

      {data && <div className='flex mx-auto mt-10 flex-col items-center gap-4'>
        <Alert
          type='success'
          banner
          message={
            <Marquee pauseOnHover gradient={false}>
            Scan QR to learn Health instructions for using fast food
            </Marquee>
          }
        />
        <QRCode value='https://www.landofrost.com/six-simple-rules-to-follow-for-eating-nutritiously-at-fast-food-restaurants/' />
        <Input
          className='max-w-[500px]'
          value='https://www.landofrost.com/six-simple-rules-to-follow-for-eating-nutritiously-at-fast-food-restaurants/'
          addonAfter={<Tooltip title='Click to copy clipboard'>
            <CopyOutlined className='cursor-pointer' onClick={() => {
              navigator.clipboard.writeText('https://www.landofrost.com/six-simple-rules-to-follow-for-eating-nutritiously-at-fast-food-restaurants/')
                .then(() => {
                  notification.success({
                    description: 'Copied to clipboard!'
                  })
                })
                .catch(() => {
                  notification.error({
                    description: 'Failed to copy!'
                  })
                })
            }}/>
          </Tooltip>}
        />
        <Flex gap="4px 0" wrap>
          <Tag icon={<YoutubeOutlined />} color="#cd201f">
            Youtube
          </Tag>
          <Tag icon={<FacebookOutlined />} color="#3b5999">
            Facebook
          </Tag>
          <Tag icon={<LinkedinOutlined />} color="#55acee">
            LinkedIn
          </Tag>
        </Flex>
      </div>}
      <Modal
        title="Result"
        centered
        open={open}
        onOk={() => setOpen(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        width="100%"
      >
        <TableComponent />
      </Modal>
    </Flex>
  )
}

export default FormWeight
