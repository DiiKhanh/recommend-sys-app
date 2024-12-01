import { FormOutlined, ScheduleOutlined, HeartOutlined, PlusCircleOutlined, FallOutlined } from '@ant-design/icons'
import { Button, Collapse, Tabs, Tour } from 'antd'
import FormWeight from './FormWeight'
import { useRef, useState } from 'react'
import FormHeart from './FormHeart'
import FormProtein from './FormProtein'
import FormSodium from './FormSodium'
import FormSpecial from './FormSpecial'

const text = `
Xác định các thành phần: Trước tiên, hãy liệt kê đầy đủ các nguyên liệu chính được sử dụng trong món ăn (ví dụ: gạo, thịt, rau, dầu ăn).<br />
Tra cứu giá trị dinh dưỡng: Tìm kiếm thông tin lượng kcal tương ứng cho mỗi nguyên liệu. Bạn có thể tra cứu trên nhãn sản phẩm, sách dinh dưỡng, hoặc các trang web uy tín.<br />
Nhập số lượng nguyên liệu: Nhập khối lượng (gram/ml) của từng nguyên liệu vào ô tương ứng trong ứng dụng. Đảm bảo đơn vị đo chính xác để kết quả kcal được tính đúng.<br />
Kiểm tra tổng kcal: Ứng dụng sẽ tự động tính toán và hiển thị tổng lượng kcal của món ăn dựa trên dữ liệu bạn cung cấp.<br />
<b>Lưu ý:</b><br />
Nếu món ăn có các thành phần chế biến (như nước sốt, gia vị), hãy ước tính và nhập lượng kcal của chúng.<br />
Đối với các món ăn được mua sẵn, có thể nhập trực tiếp tổng kcal nếu thông tin đã được cung cấp trên bao bì.<br />
Hãy nhập liệu cẩn thận để có thông tin dinh dưỡng chính xác và phục vụ tốt hơn cho chế độ ăn uống của bạn!<br />
`

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
      children: <FormHeart topicId={2} />,
      icon: <HeartOutlined />
    },
    {
      key: 3,
      label: 'Chế độ ăn giàu protein',
      children: <FormProtein topicId={3} />,
      icon: <PlusCircleOutlined />
    },
    {
      key: 4,
      label: 'Hạn chế sodium (giảm muối)',
      children: <FormSodium topicId={4} />,
      icon: <FallOutlined />
    },
    {
      key: 5,
      label: 'Chế độ ăn kiêng đặc biệt',
      children: <FormSpecial topicId={5} />,
      icon: <ScheduleOutlined />
    }
  ]

  const [ open, setOpen ] = useState(false)
  const [ activeTab, setActiveTab ] = useState(1)

  const steps = [
    {
      title: 'Chủ đề',
      description: 'Lựa chọn chủ đề',
      target: () => ref1.current
    },
    {
      title: 'Dữ liệu',
      description: 'Nhập dữ liệu của bạn',
      target: () => ref2.current
    },
    {
      title: 'Xác nhận',
      description: 'Bấm để xem kết quả hoặc đặt lại dữ liệu',
      target: () => ref3.current
    }
  ]

  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='text-[#1F509A] font-bold text-2xl py-5 flex items-center justify-center'>
        <h4>Chọn chủ đề muốn sử dụng</h4>
        <Button type="primary" onClick={() => {
          setActiveTab(1)
          setOpen(true)
        }}
        className='ml-4'
        >
        Hướng dẫn
        </Button>
      </div>
      <div className='w-full flex justify-center my-1'>
        <Collapse
          items={[ { key: '1', label: 'Hướng dẫn nhập liệu lượng kcal dinh dưỡng của từng thành phần trong món ăn', children: <p dangerouslySetInnerHTML={{ __html: text }} /> } ]}
        />
      </div>
      <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        items={items}
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