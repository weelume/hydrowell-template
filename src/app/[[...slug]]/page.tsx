import { notFound } from 'next/navigation'
import Home from '../../features/site-templates/catalog/hydrowell/pages/Home'
import Privacy from '../../features/site-templates/catalog/hydrowell/pages/Privacy'
import Terms from '../../features/site-templates/catalog/hydrowell/pages/Terms'
import Services from '../../features/site-templates/catalog/hydrowell/pages/Services'
import Contact from '../../features/site-templates/catalog/hydrowell/pages/Contact'
import Journal from '../../features/site-templates/catalog/hydrowell/pages/Journal'
import LeakArticle from '../../features/site-templates/catalog/hydrowell/pages/LeakArticle'
import DrainArticle from '../../features/site-templates/catalog/hydrowell/pages/DrainArticle'
import HeaterArticle from '../../features/site-templates/catalog/hydrowell/pages/HeaterArticle'
import { routes } from '../../features/site-templates/catalog/hydrowell/routes'
type Params={params:Promise<{slug?:string[]}>}
export function generateStaticParams(){return routes.flatMap(page=>[{slug:page.slug?page.slug.split('/'):[]},{slug:['en',...(page.slug?page.slug.split('/'):[])]}])}
export default async function Page({params}:Params){
 const {slug=[]}=await params,locale=slug[0]==='en'?'en':'zh',path=(locale==='en'?slug.slice(1):slug).join('/'),basePath=locale==='en'?'/en':''
 if(!routes.some(route=>route.slug===path))notFound()
 const components:Record<string,typeof Home>={'':Home,'privacy-policy':Privacy,'terms-conditions':Terms,services:Services,contact:Contact,blog:Journal,'blog/find-hidden-leaks':LeakArticle,'blog/drain-care':DrainArticle,'blog/water-heater-care':HeaterArticle}
 const Component=components[path]
 return <Component locale={locale} basePath={basePath}/>
}
export async function generateMetadata({params}:Params){const {slug=[]}=await params,locale=slug[0]==='en'?'en':'zh',path=(locale==='en'?slug.slice(1):slug).join('/'),route=routes.find(item=>item.slug===path);return {title:`${locale==='zh'?route?.title:route?.en} · Hydrowell`,description:locale==='zh'?'专业水暖服务与住宅管道解决方案':'Reliable plumbing and home services'}}
