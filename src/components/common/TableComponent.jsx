import { FOOD_STORE, SAMPLE_DATA } from "@/constants/data"
import { Button, Modal, Progress, Space, Table, Tag } from 'antd'
import { useState } from "react"

const TableComponent= ({ data }) => {
  const [ open, setOpen ] = useState(false)
  const dataSource = data || SAMPLE_DATA
  const columns = [
    {
      title: "Tên đồ ăn",
      dataIndex: "item",
      key: "item",
      sorter: (a, b) => a.item.localeCompare(b.item)
    },
    {
      title: "Cửa hàng",
      dataIndex: "restaurant",
      key: "restaurant",
      sorter: (a, b) => a.restaurant.localeCompare(b.restaurant),
      filters: FOOD_STORE.map(i => ({ text: i.name, value: i.name })),
      onFilter: (value, record) => record.restaurant === value,
      render: (value) => <Tag color="gold">{value}</Tag>
    },
    {
      title: "Số điểm",
      dataIndex: "match_score",
      key: "match_score",
      render: (value) => <Progress size={80} type="circle" percent={value.toFixed(2)} />,
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
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => {
        return (
          <>
            <Space size="middle">
              <Button onClick={() => setOpen(true)}>Xem chi tiết</Button>
            </Space>
            <Modal
              title="Thông tin chi tiết"
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              cancelButtonProps={{ style: { display: 'none' } }}
              width="100%"
            >
              <div>123</div>
            </Modal>
          </>
        )
      }
    }
  ]
  return (
    <Table dataSource={dataSource} columns={columns} bordered pagination={dataSource.length > 5 ? { pageSize: 5 } : false}/>
  )
}

export default TableComponent