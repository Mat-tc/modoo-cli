import {category} from '@api/index'
const getCategories = () => {
  return category.get('/all')
}

const getCategoryName = (id) => {
  return category.get(`?categoryId=${id}`)
}

export { getCategories, getCategoryName }
