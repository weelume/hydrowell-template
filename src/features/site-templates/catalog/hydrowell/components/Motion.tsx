'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion, animate } from 'framer-motion'
import type { TemplateLocale } from '../../../types'
export function Reveal({children,delay=0,className=''}:{children:ReactNode;delay?:number;className?:string}) {
 const reduced=useReducedMotion()
 return <motion.div className={className} initial={reduced?false:{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{type:'spring',stiffness:110,damping:24,delay:reduced?0:delay}}>{children}</motion.div>
}
export function Title({title,accent,hero=false,level}:{title:string;accent:string;hero?:boolean;level?:1|2}) {
 const reduced=useReducedMotion(),Tag=hero||level===1?motion.h1:motion.h2
 // 英文按词、中文按字错峰；中文总时长受限，避免长标题拖延阅读。
 const parts=(value:string)=>/[\u3400-\u9fff]/.test(value)?Array.from(value):value.split(' ')
 const render=(value:string,offset:number)=>parts(value).map((word,i)=><motion.span key={i} className="hw-word" initial={reduced?false:{opacity:.001,y:10,filter:'blur(10px)'}} whileInView={{opacity:1,y:0,filter:'blur(0px)'}} viewport={{once:true}} transition={{duration:.7,delay:reduced?0:(offset+i)*.035,ease:[.22,1,.36,1]}}>{word}{/[\u3400-\u9fff]/.test(value)?'':' '}</motion.span>)
 return <Tag aria-label={`${title} ${accent}`}>{render(title,0)}<em>{render(accent,parts(title).length)}</em></Tag>
}
export function Counter({value,suffix}:{value:number;suffix:string}) {
 const ref=useRef<HTMLSpanElement>(null),seen=useInView(ref,{once:true,amount:.5}),reduced=useReducedMotion(),[count,setCount]=useState(0)
 useEffect(()=>{if(!seen)return;const control=animate(0,value,{duration:reduced?0:2,ease:'easeOut',onUpdate:v=>setCount(Math.round(v))});return ()=>control.stop()},[seen,value,reduced])
 return <span ref={ref} className="hw-count">{count}<small>{suffix}</small></span>
}
export function Accordion({items,locale,id,onSelect}:{items:{title:string;subtitle?:string;body:string}[];locale:TemplateLocale;id:string;onSelect?:(index:number)=>void}) {
 const [open,setOpen]=useState<number|null>(0),reduced=useReducedMotion()
 return <div className="hw-accordion">{items.map((item,i)=><div className={`hw-accordion-item ${open===i?'is-open':''}`} key={item.title}><h3><button id={`${id}-button-${i}`} aria-expanded={open===i} aria-controls={`${id}-panel-${i}`} onClick={()=>{setOpen(open===i?null:i);onSelect?.(i)}}><span>{item.title}{item.subtitle&&<small>{item.subtitle}</small>}</span><motion.span aria-hidden="true" animate={{rotate:open===i?45:0}}>+</motion.span></button></h3><AnimatePresence initial={false}>{open===i&&<motion.div id={`${id}-panel-${i}`} role="region" aria-labelledby={`${id}-button-${i}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduced?0:.35}}><p>{item.body}</p></motion.div>}</AnimatePresence></div>)}<span className="hw-sr">{locale==='zh'?'使用回车键展开问题':'Press Enter to expand a question'}</span></div>
}

