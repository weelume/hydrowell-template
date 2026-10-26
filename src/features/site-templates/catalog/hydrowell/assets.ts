import assetMap from './asset-map.json'
/** 文件扩展名按下载后的真实 MIME 登记，缺失映射立即报错。 */
export function photo(name:string):string {
 const filename=(assetMap as Record<string,string>)[name]
 if(!filename)throw new Error(`Hydrowell 缺少已登记素材：${name}`)
 return `/templates/hydrowell/photos/${filename}`
}
