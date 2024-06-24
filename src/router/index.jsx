import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../views/lp/home'
import ArticleDetailPage from '../views/lp/articleDetail'
import ArticlePage from '../views/lp/article'
import LoginPage from '../views/auth/login'
import NotFoundPage from '../views/auth/404'
import DashboardAdminPage from '../views/admin/dashboard'

import CategoryIndexPage from '../views/admin/category'

const HomePageRoutes = () => {
  return (
    <Routes errorElement={<NotFoundPage />}>
      <Route path='/' element={<HomePage />} /> 
      <Route path='/article/:id' element={<ArticleDetailPage />} /> 
      <Route path='/article' element={<ArticlePage />} /> 
    </Routes>
  )
}

const AuthRoutes = () => {
  return (
    <Routes errorElement={<NotFoundPage />}>
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

const AdminRoutes = () => {
  return (
    <Routes errorElement={<NotFoundPage />}>
      <Route path='/admin/dashboard' element={<DashboardAdminPage />} />
      <Route path='/admin/category' element={<CategoryIndexPage />} />
    </Routes>
  )
}

function AppRoutes() {
  return (
    <>
      <HomePageRoutes/>
      <AuthRoutes/>
      <AdminRoutes/>
      
      {/* <Route path='*' element={<NotFoundPage />} /> */}
    </>
  )
}

export default AppRoutes