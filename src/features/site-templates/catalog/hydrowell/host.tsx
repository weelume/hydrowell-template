'use client'
import { createContext, useContext, type ReactNode } from 'react'
import type { TemplateLocale } from '../../types'
export interface HydrowellHostOptions {
  brandName?: Record<TemplateLocale,string>; logo?: string; lightLogo?: string;
  marketplaceHref?: string; marketplaceLabel?: Record<TemplateLocale,string>;
  marketplaceAriaLabel?: Record<TemplateLocale,string>; filing?: ReactNode;
}
const Context = createContext<HydrowellHostOptions>({})
/** 品牌及外部入口由宿主注入，不让通用模板依赖具体挂载点。 */
export function HydrowellHostProvider({children,...options}:HydrowellHostOptions & {children:ReactNode}) { return <Context.Provider value={options}>{children}</Context.Provider> }
export const useHydrowellHost = () => useContext(Context)
