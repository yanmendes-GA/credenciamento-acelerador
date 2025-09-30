import api from "./api"
import { PersonalDataType } from "./types"

export const sendPersonalData = async (data: PersonalDataType) => {
  console.log("DADOS ENVIADOS: ", data)
  return api.post("/step1", data)
}

export const sendDocumentFile = async (file: File) => {
  console.log("Arquivo recebido para upload:", file)
  const formData = new FormData()
  formData.append("file", file)
  return api.post("/step2", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

export const sendFaceRecognitionFile = async (file: File) => {
  console.log("Arquivo recebido para reconhecimento facial:", file)
  const formData = new FormData()
  formData.append("file", file)
  return api.post("/step3", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}
