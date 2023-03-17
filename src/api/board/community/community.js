import { community } from '../..';

const getListByCategoryId = (categoryId, pageNumber) => {
  return community.get(`/communities?categoryId=${categoryId}&pageNumber=${pageNumber}`)
}

export {getListByCategoryId}