'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { SiteTemplatePageProps } from '../../../types'
import { brand } from '../config/brand'
import { copy, services } from '../content'
import { useHydrowellHost } from '../host'
import '../theme.css'
export function Shell({children,locale='zh',basePath}:SiteTemplatePageProps & {children:ReactNode}) {
 const host=useHydrowellHost(),name=host.brandName?.[locale]??brand.name[locale],zh=locale==='zh',path=usePathname(),router=useRouter(),reduced=useReducedMotion()
 const [menu,setMenu]=useState(false),[active,setActive]=useState('Home'),menuRef=useRef<HTMLDivElement>(null),toggleRef=useRef<HTMLButtonElement>(null)
 const home=basePath||'/',link=(id:string)=>`${basePath||''}/#${id}`
 const close=useCallback(()=>setMenu(false),[])
 const languageHref=locale==='en'?(path.replace(/\/en(?=\/|$)/,'')||'/'):(path===basePath||path===`${basePath}/`?`${basePath}/en`:path.replace(basePath,`${basePath}/en`))
 const switchLanguage=(event:React.MouseEvent<HTMLAnchorElement>)=>{if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();close();router.push(languageHref+window.location.search+window.location.hash)}
 useEffect(()=>{
  const root=document.documentElement,previous=root.getAttribute('data-hydrowell'),lang=root.lang
  root.setAttribute('data-hydrowell','');root.lang=zh?'zh-CN':'en'
  const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)setActive(entry.target.id)},{rootMargin:'-20% 0px -60% 0px'})
  copy.navIds.forEach(id=>{const node=document.getElementById(id);if(node)observer.observe(node)})
  return ()=>{observer.disconnect();if(previous===null)root.removeAttribute('data-hydrowell');else root.setAttribute('data-hydrowell',previous);root.lang=lang}
 },[zh,path])
 useEffect(()=>{
  if(!menu)return
  const overflow=document.body.style.overflow;document.body.style.overflow='hidden';menuRef.current?.querySelector<HTMLElement>('a')?.focus()
  const key=(event:KeyboardEvent)=>{if(event.key==='Escape'){setMenu(false);toggleRef.current?.focus()}if(event.key==='Tab'){const links=menuRef.current?.querySelectorAll<HTMLElement>('a');if(!links?.length)return;const first=links[0],last=links[links.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}}
  document.addEventListener('keydown',key);return ()=>{document.body.style.overflow=overflow;document.removeEventListener('keydown',key)}
 },[menu])
 const logo=<>{host.logo?<img className="hw-brand-logo" src={host.logo} alt=""/>:<svg className="hw-brand-logo" viewBox="0 0 32 40" aria-hidden="true"><path d="M8 35V9a5 5 0 015-5h10M8 14h15v12H8" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/><path d="M5 11h7M5 25h7M24 30c-5 6-5 8 0 8s5-2 0-8" fill="var(--tpl-accent)" stroke="var(--tpl-accent)" strokeWidth="2"/></svg>}<span>{name}<small>{zh?'专业水暖服务':'P L U M B I N G'}</small></span></>
 return <div data-template="hydrowell" lang={zh?'zh-CN':'en'}><a className="hw-skip" href="#hw-main">{zh?'跳至主要内容':'Skip to content'}</a><header className="hw-header"><Link className="hw-brand" href={home}>{logo}</Link><nav className="hw-nav" aria-label={zh?'主导航':'Main navigation'}>{copy.nav.map((item,i)=><Link key={copy.navIds[i]} href={link(copy.navIds[i])} className={active===copy.navIds[i]?'is-active':''}>{item[locale]}</Link>)}</nav><div className="hw-header-actions"><Link className="hw-language" href={languageHref} onClick={switchLanguage}>{zh?'EN':'中文'}</Link><Link className="hw-button hw-header-book" href={link('cta')}>{copy.book[locale]}</Link><button ref={toggleRef} className="hw-menu-toggle" aria-expanded={menu} aria-controls="hw-mobile-menu" aria-label={zh?(menu?'关闭菜单':'打开菜单'):(menu?'Close menu':'Open menu')} onClick={()=>setMenu(!menu)}><span/ ><span/></button></div></header><AnimatePresence>{menu&&<motion.div ref={menuRef} id="hw-mobile-menu" className="hw-mobile-menu hw-glass" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduced?0:.3}}><nav aria-label={zh?'移动导航':'Mobile navigation'}>{copy.nav.map((item,i)=><Link key={i} href={link(copy.navIds[i])} onClick={close}>{item[locale]}</Link>)}<Link href={link('cta')} onClick={close} className="hw-button">{copy.book[locale]}</Link></nav></motion.div>}</AnimatePresence><main id="hw-main">{children}</main><footer className="hw-footer"><div className="hw-footer-grid"><div><Link className="hw-brand" href={home}>{logo}</Link><p>{brand.tagline[locale]}</p><p>{zh?'为奥斯汀及周边地区的家庭和企业提供可靠水暖服务，全天候响应您的需求。':'Reliable plumbing services for homes and businesses in Austin, TX and surrounding areas. We’re here 24/7 when you need us most.'}</p></div><div><h3>{zh?'快捷链接':'Quick Links'}</h3><Link href={`${basePath}/services`}>{zh?'服务详情':'Service details'}</Link><Link href={`${basePath}/blog`}>{zh?'水暖知识':'Journal'}</Link><Link href={`${basePath}/contact`}>{zh?'联系表单':'Contact form'}</Link>{copy.nav.map((item,i)=><Link href={link(copy.navIds[i])} key={i}>{item[locale]}</Link>)}<Link href={link('transformation')}>{zh?'改造实录':'Transformations'}</Link></div><div><h3>{zh?'专业服务':'Services'}</h3>{services.map(item=><Link key={item.id} href={link('cta')}>{item.title[locale]}</Link>)}</div><div><h3>{zh?'联系我们':'Contact'}</h3><a href={`tel:${brand.telephone}`}>{brand.phone}</a><a href={`mailto:${brand.email}`}>{brand.email}</a><p>{brand.area[locale]}</p>{host.marketplaceHref&&<Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}</div></div><div className="hw-footer-bottom"><span>© {brand.year} {name}</span><div><Link href={`${basePath}/terms-conditions`}>{zh?'使用条款':'Terms and Conditions'}</Link><Link href={`${basePath}/privacy-policy`}>{zh?'隐私政策':'Privacy Policy'}</Link></div>{host.filing}</div></footer>{host.marketplaceHref&&<Link href={host.marketplaceHref} className="hw-market" aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo&&<img src={host.lightLogo} alt=""/>}<span>{name}</span></Link>}</div>
}

