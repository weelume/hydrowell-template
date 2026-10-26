import type { ReactNode } from 'react'
import './globals.css'
export const metadata={title:'Hydrowell · 专业水暖服务',description:'Professional plumbing and home services'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh-CN" data-scroll-behavior="smooth"><body>{children}</body></html>}
