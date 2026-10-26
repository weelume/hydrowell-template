import type { SiteTemplate } from '../../types'
export const hydrowellTemplate: SiteTemplate = { ...{
  "id": "hydrowell",
  "gitUrl": "https://github.com/weelume/hydrowell-template",
  "name": "Hydrowell · 专业水暖服务",
  "localizedNames": {
    "en": "Hydrowell · Plumbing & home services"
  },
  "sceneId": "corporate-site",
  "listed": false,
  "tags": [
    "水暖维修",
    "居家服务",
    "暖白橙色",
    "中英文",
    "PC / iPad / H5"
  ],
  "summary": "水暖与家居服务品牌官网，包含前后对比、图文循环评价、服务价格、FAQ、视频故事、知识文章与本地咨询演示。",
  "accentColor": "#ce6b36",
  "cover": "/templates/hydrowell/screenshots/desktop-home.webp",
  "screenshots": [
    {
      "src": "/templates/hydrowell/screenshots/desktop-home.webp",
      "alt": "Hydrowell desktop-home",
      "device": "desktop",
      "width": 1430,
      "height": 993
    },
    {
      "src": "/templates/hydrowell/screenshots/desktop-services.webp",
      "alt": "Hydrowell desktop-services",
      "device": "desktop",
      "width": 1430,
      "height": 993
    },
    {
      "src": "/templates/hydrowell/screenshots/desktop-blog.webp",
      "alt": "Hydrowell desktop-blog",
      "device": "desktop",
      "width": 1430,
      "height": 993
    },
    {
      "src": "/templates/hydrowell/screenshots/desktop-contact.webp",
      "alt": "Hydrowell desktop-contact",
      "device": "desktop",
      "width": 1430,
      "height": 993
    },
    {
      "src": "/templates/hydrowell/screenshots/tablet-home.webp",
      "alt": "Hydrowell tablet-home",
      "device": "tablet",
      "width": 824,
      "height": 1166
    },
    {
      "src": "/templates/hydrowell/screenshots/tablet-services.webp",
      "alt": "Hydrowell tablet-services",
      "device": "tablet",
      "width": 824,
      "height": 1166
    },
    {
      "src": "/templates/hydrowell/screenshots/tablet-blog.webp",
      "alt": "Hydrowell tablet-blog",
      "device": "tablet",
      "width": 824,
      "height": 1166
    },
    {
      "src": "/templates/hydrowell/screenshots/tablet-contact.webp",
      "alt": "Hydrowell tablet-contact",
      "device": "tablet",
      "width": 824,
      "height": 1166
    },
    {
      "src": "/templates/hydrowell/screenshots/mobile-home.webp",
      "alt": "Hydrowell mobile-home",
      "device": "mobile",
      "width": 380,
      "height": 822
    },
    {
      "src": "/templates/hydrowell/screenshots/mobile-services.webp",
      "alt": "Hydrowell mobile-services",
      "device": "mobile",
      "width": 380,
      "height": 822
    },
    {
      "src": "/templates/hydrowell/screenshots/mobile-blog.webp",
      "alt": "Hydrowell mobile-blog",
      "device": "mobile",
      "width": 380,
      "height": 822
    },
    {
      "src": "/templates/hydrowell/screenshots/mobile-contact.webp",
      "alt": "Hydrowell mobile-contact",
      "device": "mobile",
      "width": 380,
      "height": 822
    }
  ]
}, surfaces:[{id:'site',name:'水暖官网',platform:'pc',locales:['zh','en'],pages:[{slug:"",title:"首页",localizedTitles:{en:"Home"},load:()=>import('./pages/Home')},{slug:"services",title:"专业服务",localizedTitles:{en:"Services"},load:()=>import('./pages/Services')},{slug:"blog",title:"水暖知识",localizedTitles:{en:"Journal"},load:()=>import('./pages/Journal')},{slug:"blog/find-hidden-leaks",title:"如何发现隐蔽漏水",localizedTitles:{en:"How to spot a hidden leak"},load:()=>import('./pages/LeakArticle')},{slug:"blog/drain-care",title:"厨房排水维护",localizedTitles:{en:"Kitchen drain care"},load:()=>import('./pages/DrainArticle')},{slug:"blog/water-heater-care",title:"热水器维护",localizedTitles:{en:"Water heater care"},load:()=>import('./pages/HeaterArticle')},{slug:"contact",title:"联系我们",localizedTitles:{en:"Contact"},load:()=>import('./pages/Contact')},{slug:"privacy-policy",title:"隐私政策",localizedTitles:{en:"Privacy Policy"},load:()=>import('./pages/Privacy')},{slug:"terms-conditions",title:"使用条款",localizedTitles:{en:"Terms & Conditions"},load:()=>import('./pages/Terms')}]}] }
