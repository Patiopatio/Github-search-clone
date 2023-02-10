import axios from "axios"

export const getUserByUserName = async(userName: string) => {

    const response = await axios.get(`https://api.github.com/search/users?q=${userName} in:login`)
    return response.data
}