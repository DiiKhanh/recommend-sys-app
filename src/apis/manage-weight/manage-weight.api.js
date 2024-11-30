import axiosClient from "@/configs/axios.config"

const ENDPOINT = {
  rcm: 'recommend',
  text: 'ai_recommend'
}

const manageWeightApi = {
  postRecommend: (data) => axiosClient.post(ENDPOINT.rcm, data),
  postRecommendText: (data) => axiosClient.post(ENDPOINT.text, data)
}

export default manageWeightApi