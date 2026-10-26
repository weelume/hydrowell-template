'use client'
import { useEffect, useRef, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
export function Modal({children,onClose,title}:{children:ReactNode;onClose:()=>void;title:string}) {
 const ref=useRef<HTMLDivElement>(null),reduced=useReducedMotion()
 useEffect(()=>{
 const previous=document.activeElement instanceof HTMLElement?document.activeElement:null,body=document.body,overflow=body.style.overflow
 body.style.overflow='hidden';ref.current?.querySelector<HTMLButtonElement>('button')?.focus()
 const key=(event:KeyboardEvent)=>{if(event.key==='Escape')onClose();if(event.key==='Tab'){const nodes=ref.current?.querySelectorAll<HTMLElement>('button,a[href],iframe,[tabindex="0"]');if(!nodes?.length)return;const first=nodes[0],last=nodes[nodes.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}}
 document.addEventListener('keydown',key)
 return ()=>{body.style.overflow=overflow;document.removeEventListener('keydown',key);previous?.focus()}
 },[onClose])
 return <motion.div className="hw-modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}><motion.div ref={ref} role="dialog" aria-modal="true" aria-label={title} className="hw-modal" onClick={e=>e.stopPropagation()} initial={{scale:reduced?1:.92,y:reduced?0:30}} animate={{scale:1,y:0}}><button className="hw-modal-close" aria-label={title==='品牌故事'?'关闭视频':'Close video'} onClick={onClose}>×</button>{children}</motion.div></motion.div>
}
