import {readFile,access} from 'node:fs/promises'
import {createHash} from 'node:crypto'
import {resolve,join} from 'node:path'
const root=resolve(import.meta.dirname,'..'),metadata=JSON.parse(await readFile(join(root,'.tpl/template.json'),'utf8'))
const assets=JSON.parse(await readFile(join(root,'.tpl/docs/asset-sources.json'),'utf8'))
for(const asset of assets){const bytes=await readFile(join(root,'public/templates/hydrowell/photos',asset.file));if(createHash('sha256').update(bytes).digest('hex')!==asset.sha256)throw new Error('图片摘要不匹配：'+asset.file)}
for(const screenshot of metadata.screenshots)await access(join(root,'.tpl',screenshot.src))
if(metadata.screenshots.length!==12)throw new Error('需要三端各四张真实截图')
if(metadata.surfaces[0].pages.length!==9)throw new Error('九张页面的登记不完整')
console.log(JSON.stringify({assets:assets.length,screenshots:metadata.screenshots.length,pages:metadata.surfaces[0].pages.length,locales:metadata.surfaces[0].locales}))
