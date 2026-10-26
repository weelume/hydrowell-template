'use client'
import type { SiteTemplatePageProps } from '../../../types'
import { useHydrowellHost } from '../host'
import { Shell } from './Shell'
import { brand } from '../config/brand'
import { privacy,terms } from '../content/policies'
export function Policy({kind,locale='zh',basePath}:SiteTemplatePageProps & {kind:'privacy'|'terms'}) {
 const host=useHydrowellHost(),zh=locale==='zh',data=kind==='privacy'?privacy:terms
 return <Shell locale={locale} basePath={basePath}><article className="hw-policy hw-container"><h1>{kind==='privacy'?(zh?'隐私政策':'Privacy Policy'):(zh?'使用条款':'Terms & Conditions')}</h1><strong>{zh?'最后更新：2026 年 9 月':'Last Updated: September 2026'}</strong><p className="hw-policy-note">{zh?'本页为模板演示内容，不构成已生效的业务合同。演示表单仅在浏览器本地校验，不会发送或保存。视频仅在点击播放后连接第三方 YouTube。实际运营前请按业务与适用法律审阅政策。':'This is demonstration content, not an active service agreement. The demo form validates locally without sending or saving. YouTube connects only when you open the story. Review these policies for your business and applicable law before production use.'}</p>{data.map(([title,body],i)=><section key={title.en}><h2>{i+1}. {title[locale]}</h2><p>{body[locale]}</p></section>)}<address>{host.brandName?.[locale]??brand.name[locale]}<br/>{brand.area[locale]}<br/><a href={`tel:${brand.telephone}`}>{brand.phone}</a><br/><a href={`mailto:${brand.email}`}>{brand.email}</a></address></article></Shell>
}
