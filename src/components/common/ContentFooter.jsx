import { Alert, Input, notification, QRCode, Tag, Tooltip, Flex } from 'antd'
import React from 'react'
import Marquee from 'react-fast-marquee'
import {
  FacebookOutlined,
  LinkedinOutlined,
  CopyOutlined,
  YoutubeOutlined
} from '@ant-design/icons'

const ContentFooter = () => {
  return (
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
  )
}

export default ContentFooter