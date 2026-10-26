import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { Reveal,Title } from '../components/Motion'
import { ContactForm } from '../components/ContactForm'
import { copy } from '../content'
import { brand } from '../config/brand'
export default function Contact({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><section className="hw-section hw-contact"><div className="hw-container hw-contact-grid"><Reveal><span className="hw-eyebrow">{copy.contactLabel[locale]}</span><Title level={1} title={copy.contactTitle[locale]} accent={copy.contactAccent[locale]}/><p>{copy.contactIntro[locale]}</p><div className="hw-contact-details"><a href={`mailto:${brand.email}`}>{brand.email}</a><a href={`tel:${brand.telephone}`}>{brand.phone}</a><p>{brand.area[locale]}</p></div></Reveal><Reveal delay={.2}><ContactForm locale={locale}/></Reveal></div></section></Shell>}

