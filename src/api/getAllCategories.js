import axios from 'axios'
const BASEURL = 'https://api.escuelajs.co/api/v1'
// const BASEURL="https://fakestoreapi.com"
const getAllCategories = async () => {
  const url = `${BASEURL}/categories`
  try {
    const { data } = await axios.get(url)
    console.log(data)
    return data
  } catch (err) {
    return err
  }
}
export default getAllCategories
