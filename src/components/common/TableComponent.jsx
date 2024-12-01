import { FOOD_STORE, SAMPLE_DATA } from "@/constants/data"
import { Button, Progress, Table, Tag } from 'antd'
import {
  MedicineBoxFilled
} from '@ant-design/icons'
import { useState } from "react"
import ModalText from "./ModalText"

const TableComponent= ({ data, text, loading }) => {
  const dataSource = data || SAMPLE_DATA
  const [ open, setOpen ] = useState(false)

  const columns = [
    {
      title: () => (
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Tên đồ ăn
        </div>
      ),
      dataIndex: "item",
      key: "item",
      sorter: (a, b) => a.item.localeCompare(b.item)
    },
    {
      title: () => (
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Cửa hàng
        </div>
      ),
      dataIndex: "restaurant",
      key: "restaurant",
      sorter: (a, b) => a.restaurant.localeCompare(b.restaurant),
      filters: FOOD_STORE.map(i => ({ text: i.name, value: i.name })),
      onFilter: (value, record) => record.restaurant === value,
      render: (value) => <div className="text-center"><Tag color="gold">{value}</Tag></div>
    },
    {
      title: () => (
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Số điểm
        </div>
      ),
      dataIndex: "match_score",
      key: "match_score",
      render: (value) => <div className="text-center"><Progress className="text-center" size={80} type="circle" percent={value.toFixed(2)} /></div>,
      sorter: (a, b) => a.match_score - b.match_score
    },
    {
      title: "Thông tin dinh dưỡng",
      children: [
        {
          title: "Calories",
          dataIndex: [ "nutritional_info", "calories" ],
          key: "calories"
        },
        {
          title: "Cholesterol",
          dataIndex: [ "nutritional_info", "cholesterol" ],
          key: "cholesterol"
        },
        {
          title: "Protein",
          dataIndex: [ "nutritional_info", "protein" ],
          key: "protein"
        },
        {
          title: "Saturated Fat",
          dataIndex: [ "nutritional_info", "sat_fat" ],
          key: "sat_fat"
        },
        {
          title: "Sodium",
          dataIndex: [ "nutritional_info", "sodium" ],
          key: "sodium"
        },
        {
          title: "Sugar",
          dataIndex: [ "nutritional_info", "sugar" ],
          key: "sugar"
        },
        {
          title: "Total Carb",
          dataIndex: [ "nutritional_info", "total_carb" ],
          key: "total_carb"
        },
        {
          title: "Total Fat",
          dataIndex: [ "nutritional_info", "total_fat" ],
          key: "total_fat"
        },
        {
          title: "Trans Fat",
          dataIndex: [ "nutritional_info", "trans_fat" ],
          key: "trans_fat"
        }
      ]
    }
  ]
  return (
    <>
      <Table dataSource={dataSource} columns={columns} bordered pagination={dataSource.length > 5 ? { pageSize: 5 } : false}/>
      <div className="my-4 flex items-center justify-center">
        <Button type="primary" icon={<MedicineBoxFilled />} onClick={() => setOpen(true)} >
          Trợ lý AI
        </Button>
      </div>
      <ModalText data={text} openText={open} setOpenText={setOpen} loading={loading}/>
    </>
  )
}

export default TableComponent