import Link from 'next/link'
import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { Reveal,Title } from '../components/Motion'
import { photo } from '../assets'
import { copy,services } from '../content'
export default function Services({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><section className="hw-section hw-container"><div className="hw-centered"><span className="hw-eyebrow">{copy.servicesLabel[locale]}</span><Title level={1} title={copy.servicesTitle[locale]} accent={copy.servicesAccent[locale]}/><p>{copy.servicesIntro[locale]}</p></div><div className="hw-service-grid">{services.map((service,i)=><Reveal key={service.id} delay={i%3*.1}><article className="hw-service"><Link href={`${basePath}/contact`}><div className="hw-service-photo"><img src={photo(service.image)} alt={service.title[locale]}/></div><div className="hw-service-caption hw-glass"><h3>{service.title[locale]}</h3><p>{service.description[locale]}</p></div></Link></article></Reveal>)}</div></section></Shell>}

