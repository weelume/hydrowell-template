'use client'
import { useState, type FormEvent } from 'react'
import type { TemplateLocale } from '../../../types'
import { services } from '../content'
export function ContactForm({locale}:{locale:TemplateLocale}) {
 const zh=locale==='zh',[status,setStatus]=useState<'idle'|'valid'>('idle')
 const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();setStatus('valid')}
 return <form className="hw-form hw-glass" onSubmit={submit} onInput={()=>setStatus('idle')}><div className="hw-form-row"><label>{zh?'姓名':'Full Name'}<input name="name" autoComplete="name" required placeholder={zh?'您的姓名':'Your full name'}/></label><label>{zh?'电话号码':'Phone Number'}<input type="tel" name="phone" autoComplete="tel" required minLength={6} placeholder={zh?'您的电话号码':'(123) 456-7890'}/></label></div><label>{zh?'电子邮箱':'Email Address'}<input type="email" name="email" autoComplete="email" required placeholder="your.email@example.com"/></label><label>{zh?'所需服务':'Service Needed'}<select name="service" required defaultValue=""><option value="" disabled>{zh?'请选择…':'Select…'}</option>{services.map(service=><option key={service.id} value={service.id}>{service.title[locale]}</option>)}</select></label><label>{zh?'留言':'Message'}<textarea name="message" required rows={4} placeholder={zh?'请描述您遇到的问题':'Write your message here'}/></label><p className="hw-form-note">{zh?'演示表单：仅在浏览器本地校验，不发送或保存。':'Demo form: validation happens locally. Nothing is sent or saved.'}</p><button className="hw-button" type="submit">{zh?'提交':'Submit'}</button><p role="status" aria-live="polite">{status==='valid'?(zh?'校验通过。演示信息未发送、未保存，预约尚未成立。':'Validation passed. Nothing was sent or saved; no appointment has been made.'):''}</p></form>
}
