import { create } from "zustand"

const useValues = create((set) => ({
  values: {},
  setValues: (data) =>
    set(() => ({
      values: data
    }))
}))

export default useValues