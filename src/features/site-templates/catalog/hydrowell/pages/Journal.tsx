import Link from 'next/link'
import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { Title,Reveal } from '../components/Motion'
import { photo } from '../assets'
import { articles } from '../content/journal'
export default function Journal({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><section className="hw-section hw-container"><div className="hw-centered"><span className="hw-eyebrow">{locale==='zh'?'水暖知识':'PLUMBING JOURNAL'}</span><Title level={1} title={locale==='zh'?'生活中的专业知识':'Practical Knowledge.'} accent={locale==='zh'?'让安心从日常开始':'Everyday Peace Of Mind.'}/><p>{locale==='zh'?'日常维护与常见问题的演示知识文章。':'Demonstration articles about routine care and common plumbing concerns.'}</p></div><div className="hw-service-grid">{articles.map((article,i)=><Reveal key={article.slug} delay={i*.1}><article className="hw-service"><Link href={`${basePath}/blog/${article.slug}`}><div className="hw-service-photo"><img src={photo(article.image)} alt=""/></div><div className="hw-service-caption hw-glass"><h3>{article.title[locale]}</h3><p>{article.summary[locale]}</p></div></Link></article></Reveal>)}</div></section></Shell>}

