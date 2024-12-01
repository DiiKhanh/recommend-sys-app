import { Modal } from 'antd'
import TableComponent from './TableComponent'

const ModalContent = ({ data, open, setOpen, loading, text }) => {
  return (
    <Modal
      title="Kết quả"
      centered
      open={open}
      onOk={() => setOpen(false)}
      cancelButtonProps={{ style: { display: 'none' } }}
      width="100%"
      onCancel={() => setOpen(false)}
    >
      <TableComponent data={data?.recommendations} loading={loading} text={text}/>
    </Modal>
  )
}

export default ModalContent