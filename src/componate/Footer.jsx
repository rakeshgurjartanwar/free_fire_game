import React from 'react'
import "./Footer.css"
import { DashboardFilled, HomeFilled, ProfileFilled, SketchOutlined, UserOutlined } from '@ant-design/icons'
import { Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Footer = () => {
  return (
    <>
    <div className="btn bootom_navigation_btn">
      <a href="/"><button><HomeFilled /></button></a>
      <a href="/Leaderbord"><button><SketchOutlined /></button></a>
      <a href="/Result"><button><DashboardFilled /></button></a>
      <a href="/Profile"><button onClick={(profile)=> '/profile'('/profile')}><UserOutlined /></button></a>
    </div>
    </>
  )
}
