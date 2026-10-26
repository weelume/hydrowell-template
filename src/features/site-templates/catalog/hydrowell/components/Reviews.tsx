'use client'
import { useState, type CSSProperties } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { TemplateLocale } from '../../../types'
import { reviews } from '../content'
import { useHydrowellHost } from '../host'
import { photo } from '../assets'
const projectPhotos = ['K6FJcpRRzSQyc7FydjmWkX0ybII.png','OzfKATen4iLN7pKbxVBR6C0o.png','A9QQRCmnIbGp9fDRJ3tUmLHf1uc.png','vcb7IR8IEHnVx5CBZFy7ftF70.png','SkuWtMHcsScG6DLEljxXYK8VU.png','Z4vXJAZF8izySZXU1E9XvJS3ig.png']
export function Reviews({locale}:{locale:TemplateLocale}) {
 const host=useHydrowellHost(),reduced=useReducedMotion(),[paused,setPaused]=useState(false)
 return <div className="hw-review-wrap"><div className="hw-review-window" style={{'--hw-running':paused||reduced?'paused':'running'} as CSSProperties}><div className="hw-review-track">{[0,1].map(group=><div className="hw-review-group" aria-hidden={group===1||undefined} key={group}>{reviews.map((review,i)=><article className="hw-review hw-glass" key={review.name}><div className="hw-review-content"><span className="hw-stars" aria-label={locale==='zh'?'5 星':'5 stars'}>★★★★★</span><p>“{review.text[locale].replaceAll('Hydrowell',host.brandName?.[locale]??'Hydrowell')}”</p><div className="hw-review-author"><img src={photo(review.avatar)} alt="" loading="lazy"/><div><strong>{review.name}</strong><small>{review.city}</small></div></div></div><img className="hw-review-photo" src={photo(projectPhotos[i])} alt={locale==='zh'?'客户水暖项目':'Customer plumbing project'} loading="lazy"/></article>)}</div>)}</div></div><button className="hw-text-button" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{locale==='zh'?(paused?'继续滚动':'暂停滚动'):(paused?'Resume reviews':'Pause reviews')}</button></div>
}
