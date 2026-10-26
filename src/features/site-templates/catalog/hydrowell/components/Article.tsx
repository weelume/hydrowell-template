import Link from 'next/link'
import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from './Shell'
import { photo } from '../assets'
import { articles } from '../content/journal'
export function Article({index,locale='zh',basePath}:SiteTemplatePageProps & {index:number}){const article=articles[index];return <Shell locale={locale} basePath={basePath}><article className="hw-policy hw-container"><Link href={`${basePath}/blog`}>{locale==='zh'?'返回水暖知识':'Back to journal'}</Link><h1>{article.title[locale]}</h1><p>{article.summary[locale]}</p><img className="hw-article-photo" src={photo(article.image)} alt=""/>{article.sections.map(section=><section key={section.title.en}><h2>{section.title[locale]}</h2><p>{section.body[locale]}</p></section>)}</article></Shell>}
