import { Alert, Modal, Result, Tag } from 'antd'
import React from 'react'
import Markdown from 'react-markdown'

const ModalText = ({ openText, setOpenText, data, loading, isError }) => {
  return (
    <Modal
      title="Gợi ý từ chuyên gia AI FastFood-SYS"
      centered
      open={openText}
      onOk={() => setOpenText(false)}
      cancelButtonProps={{ style: { display: 'none' } }}
      width="60%"
      onCancel={() => setOpenText(false)}
      loading={loading}
    >
      {
        isError ?
          <Result
            status="warning"
            title="There are some problems. Please retry !"
          />
          :
          <>
            <div className='flex items-center justify-center gap-4 my-4'>
              <Alert message={data?.goal} />
              <Tag color='magenta'>{data?.topic_name}</Tag>
            </div>
            <Markdown>{data?.recommendation_text}</Markdown>
          </>
      }
    </Modal>
  )
}

export default ModalText