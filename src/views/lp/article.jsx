import React from 'react'
import MainLayoutGuest from '../../components/layout/lp/main'
import ItemCard from '../../components/ui/itemCard'

function ArticlePage() {
  return (
    <MainLayoutGuest>
      <div className='container py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
          Array(6).fill(0).map((_, index) => (
            <ItemCard/>
          ))
        }
        </div>
        <div className='flex justify-center mt-12'>
          <button className='bg-green text-white text-xs rounded-lg px-3 py-2 hover:bg-slate-green hover:text-green transition-all duration-300'>load more</button>
        </div>
      </div>
    </MainLayoutGuest>
  )
}

export default ArticlePage
