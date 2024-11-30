import { FOOD_STORE, SAMPLE_DATA } from "@/constants/data"
import { Progress, Table, Tag } from 'antd'

const columns = [
  {
    title: "Tên đồ ăn",
    dataIndex: "item",
    key: "item",
    sorter: (a, b) => a.item.localeCompare(b.item)
  },
  {
    title: "Số điểm",
    dataIndex: "match_score",
    key: "match_score",
    render: (value) => <Progress size={100} type="circle" percent={value.toFixed(2)} />,
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
    title: "Cửa hàng",
    dataIndex: "restaurant",
    key: "restaurant",
    sorter: (a, b) => a.restaurant.localeCompare(b.restaurant),
    filters: FOOD_STORE.map(i => ({ text: i.name, value: i.name })),
    onFilter: (value, record) => record.restaurant === value,
    render: (value) => <Tag color="gold">{value}</Tag>
  }
]

const TableComponent= ({ data }) => {
  const dataSource = data || SAMPLE_DATA
  return (
    <Table dataSource={dataSource} pagination={false} columns={columns} bordered/>
  )
}

export default TableComponent