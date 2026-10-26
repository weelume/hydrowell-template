'use client'
import { useState, type CSSProperties } from 'react'
import type { TemplateLocale } from '../../../types'
import { projects } from '../content'
import { photo } from '../assets'
export function Compare({project,locale}:{project:typeof projects[number];locale:TemplateLocale}) {
 const [position,setPosition]=useState(50)
 return <article className="hw-project"><div className="hw-compare" style={{'--hw-position':`${position}%`} as CSSProperties}><img src={photo(project.after)} alt={locale==='zh'?'改造后':'After'} loading="lazy"/><img className="hw-before-image" src={photo(project.before)} alt={locale==='zh'?'改造前':'Before'} loading="lazy"/><span className="hw-before-label">{locale==='zh'?'改造前':'Before'}</span><span className="hw-after-label">{locale==='zh'?'改造后':'After'}</span><span className="hw-compare-handle" aria-hidden="true">‹ ›</span><input type="range" min="0" max="100" value={position} aria-label={`${project.title[locale]} ${locale==='zh'?'前后对比':'before and after comparison'}`} aria-valuetext={`${position}%`} onChange={e=>setPosition(Number(e.target.value))}/></div><h3>{project.title[locale]}</h3><p>{project.description[locale]}</p><div className="hw-project-meta"><span>{project.city}</span><span>{project.date[locale]}</span></div></article>
}
