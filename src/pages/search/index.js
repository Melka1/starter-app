import React from 'react'
import styles from './search.module.css'
import SearchNavRar from '../../container/search/navbar/navbar'
import Header from '../../container/search/header/header'
import {Filter} from '../../container/search/filter/filter'
import {List} from '../../container/search/list/list'

function page() {
  return (
    <div className={styles.search}>
      <SearchNavRar/>

      <div className={styles['search--display']}>
       <Header/>

       <div className={styles['filter-and-list']}>
        <Filter/>
        <List/>
       </div>
      </div>
    </div>
  )
}

export default page