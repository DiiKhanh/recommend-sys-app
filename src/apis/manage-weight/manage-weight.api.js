import axiosClient from "@/configs/axios.config"

const ENDPOINT = 'recommend'

const manageWeightApi = {
  postRecommend: (data) => axiosClient.post(ENDPOINT, data)
}

export default manageWeightApi