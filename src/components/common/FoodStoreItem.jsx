import { FOOD_STORE } from '@/constants/data'
import { Select } from 'antd'

const { Option } = Select

function FoodStoreItem({ value = [], onChange }) {
  const handleChange = (selectedValues) => {
    if (selectedValues.length > 3) {
      onChange(selectedValues.slice(0, 3))
    } else {
      onChange(selectedValues)
    }
  }

  return (
    <Select
      mode="multiple"
      value={value}
      onChange={handleChange}
      maxTagCount={3}
      placeholder="Chọn tối đa 3 cửa hàng"
      allowClear
    >
      {FOOD_STORE.map((store) => (
        <Option key={store.key} value={store.name}>
          {store.name}
        </Option>
      ))}
    </Select>
  )
}

export default FoodStoreItem
