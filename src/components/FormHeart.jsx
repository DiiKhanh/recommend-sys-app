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

const FormHeart = ({ topicId }) => {
  const [ open, setOpen ] = useState(false)
  const [ form ] = Form.useForm()
  const { mutate, isPending, data } = usePostRecommendWeight()

  const onFinish = (values) => {
    const data = {
      topic_id: topicId,
      restaurants: values.user.foodStores ?? [],
      form_data: {
        trans_fat: values.user.trans_fat,
        total_fat: values.user.total_fat,
        cholesterol: values.user.cholesterol,
        sat_fat: values.user.sat_fat
      }
    }
    mutate(data)
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
        <Tooltip title='Lượng cholesterol nên từ 9 đến 135'>
          <Form.Item
            name={[ 'user', 'cholesterol' ]}
            label="Số liệu về lượng cholesterol"
            rules={[ { type: 'number', min: 1, max: 10000, required: true, message: 'Lượng cholesterol phải phù hợp' } ]}
            hasFeedback
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </Tooltip>

        <Tooltip title='Lượng trans_fat nên từ 0 đến 1.3'>
          <Form.Item
            name={[ 'user', 'trans_fat' ]}
            label="Số liệu về lượng trans_fat"
            rules={[ { type: 'number', min: 1, max: 10000, required: true, message: 'Lượng trans_fat phải phù hợp' } ]}
            hasFeedback
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </Tooltip>

        <Tooltip title='Lượng sat_fat nên từ 2 đến 15'>
          <Form.Item
            name={[ 'user', 'sat_fat' ]}
            label="Số liệu về lượng sat_fat"
            rules={[ { type: 'number', min: 1, max: 10000, required: true, message: 'Lượng sat_fat phải phù hợp' } ]}
            hasFeedback
          >
            <InputNumber className="w-full" />
          </Form.Item>
        </Tooltip>

        <Tooltip title='Lượng total_fat nên từ 8 đến 45'>
          <Form.Item
            name={[ 'user', 'total_fat' ]}
            label="Số liệu về lượng total_fat"
            rules={[ { type: 'number', min: 1, max: 10000, required: true, message: 'Lượng total_fat phải phù hợp' } ]}
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
          <div className='flex mx-auto mt-10 flex-col items-center gap-4'>
            <Alert
              type='success'
              banner
              message={
                <Marquee pauseOnHover gradient={false}>
            Quét mã QR để xem hướng dẫn về đồ ăn nhanh
                </Marquee>
              }
            />
            <QRCode value='https://www.landofrost.com/six-simple-rules-to-follow-for-eating-nutritiously-at-fast-food-restaurants/' />
            <Input
              className='max-w-[500px]'
              value='https://www.landofrost.com/six-simple-rules-to-follow-for-eating-nutritiously-at-fast-food-restaurants/'
              addonAfter={<Tooltip title='Bấm để sao chép'>
                <CopyOutlined className='cursor-pointer' onClick={() => {
                  navigator.clipboard.writeText('https://www.landofrost.com/six-simple-rules-to-follow-for-eating-nutritiously-at-fast-food-restaurants/')
                    .then(() => {
                      notification.success({
                        description: 'Đã sao chép!'
                      })
                    })
                    .catch(() => {
                      notification.error({
                        description: 'Có lỗi khi sao chép!'
                      })
                    })
                }}/>
              </Tooltip>}
            />
            <Flex gap="4px 0" wrap>
              <a href="https://www.youtube.com/@DiiKhanh" target="_blank" rel="noopener noreferrer">
                <Tag icon={<YoutubeOutlined />} color="#cd201f" className='cursor-pointer text-xl'>
                  Youtube
                </Tag>
              </a>
              <a href="https://www.facebook.com/dikhanhnek/" target="_blank" rel="noopener noreferrer">
                <Tag icon={<FacebookOutlined />} color="#3b5999" className='cursor-pointer text-xl'>
                  Facebook
                </Tag>
              </a>
              <a href="https://www.linkedin.com/in/ph%E1%BA%A1m-duy-kh%C3%A1nh-740465233/" target="_blank" rel="noopener noreferrer" style={{ all: 'unset', display: 'inline-block' }}>
                <Tag icon={<LinkedinOutlined />} color="#55acee" className='cursor-pointer text-xl'>
                  LinkedIn
                </Tag>
              </a>
            </Flex>
          </div>
        </>
      }
      <Modal
        title="Kết quả"
        centered
        open={open}
        onOk={() => setOpen(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        width="100%"
      >
        <TableComponent data={data?.recommendations}/>
      </Modal>
    </Flex>
  )
}

export default FormHeart
