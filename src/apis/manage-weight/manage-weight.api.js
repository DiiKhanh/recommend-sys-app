import axiosClient from "@/configs/axios.config"

const manageWeightApi = {
  postRecommend: () => axiosClient.post()
}

export default manageWeightApi