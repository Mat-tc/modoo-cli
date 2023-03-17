import {category} from '@api/index'
const getCategories = () => {
  return category.get('/all')
}

export { getCategories }
