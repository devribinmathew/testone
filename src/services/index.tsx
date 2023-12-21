import { BASE_URL } from "../BaseUrl/BaseUrl"

export const getUsers=async()=>{
    const response=await fetch (BASE_URL + "users")
    return response.json()
}


