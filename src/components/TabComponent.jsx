import { FormOutlined, ScheduleOutlined, HeartOutlined, PlusCircleOutlined, FallOutlined } from '@ant-design/icons'
import { Button, Tabs, Tour } from 'antd'
import FormWeight from './FormWeight'
import { useRef, useState } from 'react'

function TabComponent() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)

  const items = [
    {
      key: 1,
      label: <span ref={ref1}>Quản lý cân nặng</span>,
      children: <div ref={ref2}><FormWeight topicId={1} ref3={ref3}/></div>,
      icon: <FormOutlined />
    },
    {
      key: 2,
      label: 'Hỗ trợ sức khỏe tim mạch',
      children: '2',
      icon: <HeartOutlined />
    },
    {
      key: 3,
      label: 'Chế độ ăn giàu protein',
      children: '2',
      icon: <PlusCircleOutlined />
    },
    {
      key: 4,
      label: 'Hạn chế sodium (giảm muối)',
      children: '2',
      icon: <FallOutlined />
    },
    {
      key: 5,
      label: 'Chế độ ăn kiêng đặc biệt',
      children: '2',
      icon: <ScheduleOutlined />
    }
  ]

  const [ open, setOpen ] = useState(false)

  const steps = [
    {
      title: 'Choose',
      description: 'Select your type',
      target: () => ref1.current
    },
    {
      title: 'Input',
      description: 'Field your information',
      target: () => ref2.current
    },
    {
      title: 'Submit',
      description: 'Click to view result or reset',
      target: () => ref3.current
    }
  ]

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='text-[#1F509A] font-bold text-2xl py-5 flex items-center justify-center'>
        <h4>Chọn chủ đề muốn sử dụng</h4>
        <Button type="primary" onClick={() => setOpen(true)}
          className='ml-4'
        >
        Hướng dẫn
        </Button>
      </div>
      <Tabs
        defaultActiveKey={1}
        items={items.map(i => {
          return i
        })}
      />
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </div>
  )
}

export default TabComponent