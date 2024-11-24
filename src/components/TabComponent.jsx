import { FormOutlined, ScheduleOutlined, HeartOutlined, PlusCircleOutlined, FallOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import FormWeight from './FormWeight'

const items = [
  {
    key: 1,
    label: 'Quản lý cân nặng',
    children: <FormWeight />,
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

function TabComponent() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='text-[#1F509A] font-bold text-2xl py-5'>
        <h4>Chọn chủ đề muốn sử dụng</h4>
      </div>
      <Tabs
        defaultActiveKey={1}
        items={items.map(i => {
          return i
        })}
      />
    </div>
  )
}

export default TabComponent