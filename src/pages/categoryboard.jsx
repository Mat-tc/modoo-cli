import React,{ useState, useEffect} from 'react';
import page from './page.module.css'
import { useParams } from 'react-router-dom';
import {getListByCategoryId} from '@api/board/community/community.js'
import { getCategoryName } from '../api/board/category/category';
import Header from '@components/board/header/header'
import Pagination from 'react-js-pagination';
import '@css/paging.css'

const Categoryboard = () => {
  const params = useParams()
  const categoryId= params.categoryId
  const [categoryNm , setCategoryNm] = useState('')

  const [currentPage, setCurrentPage] = useState(0)
  const [totalElement, setTotalElement] = useState(0)
  const [list, setList] = useState([])

  const pageChange = (pageNumber) => { 
    setCurrentPage(pageNumber - 1)
  }
  useEffect(()=>{
    getCategoryName(categoryId).then(res => setCategoryNm(res.data.name +'톡'))
    getListByCategoryId(categoryId, currentPage).then(res=> {
      if(res.status == 200){
        const data = res.data
        setTotalElement(data.totalElements)
        setList(data.content)
      }
    })
  },[categoryId])
  return (
  <section className={page.container}>
    <Header title={categoryNm} />
    {
      list.length > 0 ?  <h3>채워넣자</h3> : <h3> 첫 게시글을 작성해 보세요 😂 </h3>
    }
    <Pagination  activePage={currentPage + 1}
          itemsCountPerPage={2}
          totalItemsCount={totalElement}
          pageRangeDisplayed={5}
          onChange={()=> pageChange}/>
  </section>
  )
}

export default Categoryboard;