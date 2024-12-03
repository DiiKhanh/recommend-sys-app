import { FOOD_STORE, SAMPLE_DATA } from "@/constants/data"
import { Button, notification, Progress, Table, Tag } from 'antd'
import {
  MedicineBoxFilled
} from '@ant-design/icons'
import { useState } from "react"
import ModalText from "./ModalText"
import useValues from "@/hooks/useValues"
import { usePostRecommendText } from "@/apis/manage-weight/manage-weight.query"

const TableComponent= ({ data }) => {
  const dataSource = data || SAMPLE_DATA
  const [ open, setOpen ] = useState(false)
  const values = useValues((state) => state.values)
  const { mutate: viewText, data: textAI, isPending: loadingAI, isError } = usePostRecommendText()

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
          title: () => (
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Calories
            </div>
          ),
          dataIndex: [ "nutritional_info", "calories" ],
          key: "calories",
          render: (value) => <p className="text-center">{value}</p>
        },
        {
          title: () => (
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Cholesterol
            </div>
          ),
          render: (value) => <p className="text-center">{value}</p>,
          dataIndex: [ "nutritional_info", "cholesterol" ],
          key: "cholesterol"
        },
        {
          title: () => (
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Protein
            </div>
          ),
          render: (value) => <p className="text-center">{value}</p>,
          dataIndex: [ "nutritional_info", "protein" ],
          key: "protein"
        },
        {
          title: () => (
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Saturated Fat
            </div>
          ),
          render: (value) => <p className="text-center">{value}</p>,
          dataIndex: [ "nutritional_info", "sat_fat" ],
          key: "sat_fat"
        },
        {
          title: () => (
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Sodium
            </div>
          ),
          render: (value) => <p className="text-center">{value}</p>,
          dataIndex: [ "nutritional_info", "sodium" ],
          key: "sodium"
        },
        {
          title: () => (
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Sugar
            </div>
          ),
          render: (value) => <p className="text-center">{value}</p>,
          dataIndex: [ "nutritional_info", "sugar" ],
          key: "sugar"
        },
        {
          title: () => (
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Total Carb
            </div>
          ),
          render: (value) => <p className="text-center">{value}</p>,
          dataIndex: [ "nutritional_info", "total_carb" ],
          key: "total_carb"
        },
        {
          title: () => (
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Total Fat
            </div>
          ),
          render: (value) => <p className="text-center">{value}</p>,
          dataIndex: [ "nutritional_info", "total_fat" ],
          key: "total_fat"
        },
        {
          title: () => (
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Trans Fat
            </div>
          ),
          render: (value) => <p className="text-center">{value}</p>,
          dataIndex: [ "nutritional_info", "trans_fat" ],
          key: "trans_fat"
        }
      ]
    }
  ]

  const handleClickAI = () => {
    setOpen(true)
    viewText(values)
  }

  return (
    <>
      <Table dataSource={dataSource} columns={columns} bordered pagination={dataSource.length > 5 ? { pageSize: 5 } : false}
        rowKey='item'
      />
      <div className="my-4 flex items-center justify-center">
        <Button type="primary" icon={<MedicineBoxFilled />} onClick={() => {
          if (!values) {
            notification.error({
              message: 'Vui lòng thử lại',
              duration: 5
            })
          }
          handleClickAI()
        }} >
          Trợ lý AI
        </Button>
      </div>
      <ModalText data={textAI} openText={open} setOpenText={setOpen} loading={loadingAI} isError={isError}/>
    </>
  )
}

export default TableComponent