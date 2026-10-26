'use client'
import type { ReactNode } from 'react'
import { motion,useReducedMotion,useScroll,useTransform } from 'framer-motion'
/** 原站按整页 scrollY 计算视差；外层负责视差，内层入场不覆盖该变换。 */
export function Parallax({children,speed,className}:{children:ReactNode;speed:number;className:string}){
 const reduced=useReducedMotion(),{scrollY}=useScroll(),y=useTransform(scrollY,value=>reduced?0:value*speed)
 return <motion.div className={className} style={{y}}>{children}</motion.div>
}
