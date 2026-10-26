export type Bilingual = { zh: string; en: string }
const bi = (zh: string, en: string): Bilingual => ({zh,en})
export const copy = {
  nav: [bi('首页','Home'),bi('关于我们','About'),bi('专业服务','Services'),bi('客户评价','Testimonials'),bi('服务价格','Pricing'),bi('联系我们','Contact')],
  navIds: ['Home','about','services','testimonials','pricing','cta'],
  book:bi('预约咨询','Book A Call'), service:bi('预约服务','Book a Service'),
  emergency:bi('全天候紧急服务','24/7 EMERGENCY SERVICE'),
  hero:bi('专业水暖服务','Plumbing Solutions'), heroAccent:bi('让生活畅通无忧','Perfect Flow.'),
  intro:bi('从细小渗漏到大型安装，我们以精湛工艺、诚实服务和专业态度，提供可靠的水暖解决方案。','From small leaks to major installations, we deliver reliable plumbing solutions with precision, honesty, and unmatched craftsmanship.'),
  story:bi('了解我们的故事','Watch Our Story'), duration:bi('2 分钟视频','2 min video'),
  aboutLabel:bi('关于我们','ABOUT HYDROWELL'),aboutTitle:bi('不只是水暖维修','We’re More Than Plumbers.'),aboutAccent:bi('更是问题解决者','We’re Problem Solvers.'),
  about:bi('我们相信，每个家庭和企业都值得拥有运行顺畅的水暖系统。团队将专业工艺、先进工具和诚实服务相结合，打造经久可靠的解决方案。','Founded with a simple belief—every home and business deserves plumbing that works flawlessly. We combine expert craftsmanship, advanced tools, and honest service to deliver solutions that last.'),
  aboutEnd:bi('从快速维修到复杂安装，我们始终像对待自己的家一样认真。','From quick fixes to complex installations, we treat every project like it’s our own.'),
  mission:bi('我们的使命很简单：以诚信、透明和精益求精的态度，提供值得信赖的水暖服务。','Our mission is simple: to provide reliable plumbing solutions with integrity, transparency, and a commitment to excellence.'),
  servicesLabel:bi('专业服务','OUR SERVICES'),servicesTitle:bi('全方位水暖方案','Plumbing Solutions'),servicesAccent:bi('满足每一种需求','For Every Need.'),
  servicesIntro:bi('从小修小补到整体安装，我们丰富的专业服务让您的家庭和企业始终运转顺畅。','From minor leaks to major installations, our wide range of plumbing services are designed to keep your home or business running smoothly.'),
  whyLabel:bi('为什么选择我们','WHY CHOOSE HYDROWELL'),whyTitle:bi('用心施工 诚实服务','Quality Work. Honest Service.'),whyAccent:bi('每一次都值得信赖','Every Time.'),
  whyIntro:bi('专业工艺、现代技术和以客户为先的服务理念，共同打造您可以放心托付的水暖服务。','We combine skilled craftsmanship, modern technology, and a customer-first approach to deliver plumbing services you can count on.'),
  projectsLabel:bi('改造实录','TRANSFORMATIONS'),projectsTitle:bi('直面真实问题','Real Problems.'),projectsAccent:bi('交付可靠方案','Real Solutions.'),
  projectsIntro:bi('看专业团队如何以细致施工和高品质工艺，将水暖难题变为舒适生活。','See how our expert team turns plumbing problems into perfect solutions with quality workmanship and attention to detail.'),
  reviewsLabel:bi('客户评价','CLIENT REVIEWS'),reviewsTitle:bi('业主的信赖','Trusted By Homeowners.'),reviewsAccent:bi('源自每一次用心','Loved For Our Work.'),
  pricingLabel:bi('服务价格','PRICING PLANS'),pricingTitle:bi('专业水暖服务','Quality Plumbing,'),pricingAccent:bi('透明合理定价','Transparent Pricing'),pricingIntro:bi('诚实定价，可靠服务。没有隐藏费用，没有意外收费。','Honest pricing for reliable service. No hidden fees. No surprises.'),
  faqLabel:bi('常见问题','FREQUENTLY ASKED QUESTIONS'),faqTitle:bi('您关心的','Frequently Asked'),faqAccent:bi('我们一一解答','Questions'),faqIntro:bi('有疑问？这里整理了客户经常咨询的问题，帮助您轻松了解服务。','Got questions? We’ve got answers. Here are some of the most common things our customers ask.'),
  contactLabel:bi('联系我们','CONTACT US'),contactTitle:bi('让水暖难题','Let’s Get Your Plumbing'),contactAccent:bi('从这里得到解决','Problem Solved.'),contactIntro:bi('无论是紧急维修，还是计划中的改造项目，我们都准备好了。欢迎随时咨询！','Whether it’s an emergency or a planned project, our team is ready to help. Get in touch today!'),
}
export const facts = [
  [bi('紧急服务','Emergency Service'),bi('您最需要时，我们始终在身边。','We’re always here when you need us most.')],
  [bi('持证且有保险','Licensed & Insured'),bi('专业资质齐全，服务值得信赖。','Fully certified professionals you can trust.')],
  [bi('15 年以上经验','15+ Years Experience'),bi('将丰富经验融入每个解决方案。','Decades of expertise in every plumbing solution.')],
  [bi('4.9/5 客户评分','4.9/5 Rating'),bi('深受众多家庭业主信赖。','Trusted by thousands of happy homeowners.')],
]
export const statistics = [
  {value:15,suffix:'+',label:bi('年行业经验','Years of Experience'),detail:bi('值得依赖的专业积累。','Industry knowledge you can rely on.')},
  {value:5,suffix:'K+',label:bi('个已完成项目','Projects Completed'),detail:bi('服务遍及千家万户。','Successfully delivered across homes.')},
  {value:98,suffix:'%',label:bi('客户满意度','Customer Satisfaction'),detail:bi('满意的客户，长久的信任。','Happy clients and lasting relationships')},
]
export const services = [
  {id:'leaks',image:'59DrXipxppXpwjZsocWib7i5sQg.png',title:bi('漏水检测与维修','Leak Detection & Repair'),description:bi('快速定位并修复漏水，避免水损，减少开支。','Find and fix leaks fast to prevent water damage and save money.')},
  {id:'drains',image:'eBDl1ihb2jrBksxKNlFMbl6Tg.png',title:bi('排水疏通','Drain Cleaning'),description:bi('迅速清除堵塞，让排水重新顺畅。','Clear clogs and blockages quickly for smooth flow.')},
  {id:'heaters',image:'iBvsCMjKJJOxKz4i6UOjenMVgE.png',title:bi('热水器服务','Water Heater Services'),description:bi('各类热水器的安装、维修与保养。','Installation, repair, and maintenance for all water heater types.')},
  {id:'kitchen',image:'IJXHVqxRcjRFUhv35ddbm6WR9w.png',title:bi('厨房水暖','Kitchen Plumbing'),description:bi('水槽、水龙头、垃圾处理器与管道安装。','Sinks, faucets, disposals, and pipe installations.')},
  {id:'bathroom',image:'I5j0e066tsSNfElFkIzOHLk8M.png',title:bi('卫浴水暖','Bathroom Plumbing'),description:bi('马桶维修、淋浴安装与卫浴配件更换。','Toilet repairs, shower installations, and fixture replacements.')},
  {id:'pipes',image:'23wkZG9LB6oezIrsVRt8ioJkFcs.png',title:bi('管道安装与更换','Pipe Installation & Replacement'),description:bi('高品质管道施工，带来持久可靠的性能。','High-quality pipe installation for long-lasting performance.')},
]
export const advantages = [
  {title:bi('当日响应','Same-Day Service'),subtitle:bi('急您所急，及时解决。','Fast solutions when you need them most.'),body:bi('水暖问题不能等。我们的团队会尽快响应，让您的生活恢复正常，通常当天就能安排。','We understand plumbing problems can’t wait. That’s why our team is ready to respond quickly and get your home back to normal—often the very same day.'),image:'EO20kSjbVbazbDfWzi7vPJUrcQ.png'},
  {title:bi('持证专业团队','Licensed & Insured Professionals'),subtitle:bi('专业认证，放心入户。','Certified experts you can trust in your home.'),body:bi('每项工作均由经过培训、持证且有保险的专业人员完成，遵守行业标准，全程爱护您的家。','Every job is handled by trained, licensed, and insured professionals who follow industry standards and treat your home with care from start to finish.'),image:'sZ6es1m8UjQxoaU5wQbHLXk278.png'},
  {title:bi('透明定价','Transparent Pricing'),subtitle:bi('提前报价，没有隐藏费用。','Upfront quotes. No hidden fees. Ever.'),body:bi('开始施工前，您就能了解费用。我们会解释问题、说明可选方案，并提供清晰报价。','You’ll know what the work will cost before we begin. We explain the problem, walk you through your options, and provide clear pricing with no unexpected charges.'),image:'zjLvYj3oO1mIlY0VjDeA94pY7R8.png'},
  {title:bi('先进工具与技术','Advanced Tools & Technology'),subtitle:bi('现代解决方案，持久可靠。','Modern solutions for long-lasting results.'),body:bi('从精准检测到专业疏通设备，我们运用现代工具准确诊断、高效维修，尽可能减少打扰。','From precise leak detection to professional drain equipment, we use modern tools to diagnose problems accurately and complete repairs efficiently with minimal disruption.'),image:'59DrXipxppXpwjZsocWib7i5sQg.png'},
  {title:bi('满意服务保障','Satisfaction Guaranteed'),subtitle:bi('您的满意，是我们的标准。','We’re not happy until you are 100% satisfied.'),body:bi('我们重视每一次施工品质。离开前会确认维修完成、现场整洁，并听取您的反馈。','We stand behind the quality of our workmanship. Before we leave, we make sure the repair is completed properly, the area is clean, and you’re happy with the result.'),image:'EO20kSjbVbazbDfWzi7vPJUrcQ.png'},
]
export const projects = [
  {title:bi('卫浴焕新','Bathroom Renovation'),description:bi('改造老旧管道和配件，改善水压。','Outdated plumbing, old fixtures, and poor water pressure.'),before:'CQbZGldF7r97SinO9tK9INjYfSg.png',after:'JqTeQCOriWO5kwls48ZxO4EsBM.png',city:'Austin, TX',date:bi('2026 年 4 月完成','Completed Apr 2026')},
  {title:bi('厨房升级','Kitchen Upgrade'),description:bi('解决漏水与水压不足，恢复日常便利。','Leaky pipes and low water pressure affecting daily use.'),before:'AZSfUZRIdT43LSaG2yJdaQHKf4E.png',after:'QySYdtn3DoBae8tpYfEvh9kgQ.png',city:'Dallas, TX',date:bi('2026 年 3 月完成','Completed Mar 2026')},
  {title:bi('全屋管道更换','Whole House Repiping'),description:bi('以耐用铜管替换老化镀锌管。','Aging galvanized pipes replaced with durable copper piping.'),before:'YAj3A8mhnm9YbEk1DtikU6Qr58.png',after:'Bt9EKr1IaSpOF6KMqCmGFNlRW0.png',city:'Houston, TX',date:bi('2026 年 2 月完成','Completed Feb 2026')},
]
export const reviews = [
 {name:'Olivia P.',city:'Round Rock, TX',avatar:'E8XmSzqDLXOEOeasg2psVXBbQ.png',text:bi('服务非常出色。修好了持续漏水的马桶，还检查了其他管道。认真、礼貌，沟通也很顺畅。','Excellent service. They repaired our running toilet and also checked the rest of the plumbing to make sure there weren’t any other issues. Very thorough, respectful, and easy to work with.')},
 {name:'James R.',city:'Austin, TX',avatar:'VOLbnGFpJUmbIjeDHkLHWn29ARM.png',text:bi('当天就来修好了厨房水槽下的漏水。师傅专业、解释清楚，离开时也打扫得很干净。','Hydrowell came out the same day and fixed a leak under our kitchen sink. The plumber was professional, explained everything clearly, and left the space spotless. Great experience from start to finish.')},
 {name:'Daniel K.',city:'Plano, TX',avatar:'ktRhN8uXEX2NBU4uNvuZFyvsmug.png',text:bi('从第一次咨询到最后清理，全程专业又省心。他们发现并及时修好了我们没注意到的隐蔽漏水。','From the first call to the final cleanup, everything felt professional and stress-free. They found a hidden leak we hadn’t noticed and fixed it before it became a much bigger problem.')},
 {name:'Sarah M.',city:'Dallas, TX',avatar:'E8XmSzqDLXOEOeasg2psVXBbQ.png',text:bi('全屋更换了几处老旧管道，过程十分顺利。团队准时到场、及时沟通，施工质量很好。','We had several old pipes replaced throughout our home, and the whole process went incredibly smoothly. The team arrived on time, kept us updated, and the quality of their work was excellent.')},
 {name:'Emily S.',city:'San Antonio, TX',avatar:'glnBFjuqhcdUvqMA6eS19L1VhqY.png',text:bi('厨房下水彻底堵住了，他们很快找到了问题并疏通。友善、高效，价格也合理。','Our kitchen drain was completely clogged and nothing we tried worked. Hydrowell found the problem quickly and had everything flowing normally again in no time. Friendly, efficient, and fairly priced.')},
 {name:'Michael T.',city:'Houston, TX',avatar:'unJWWa17KAYqPc5smQ0d0CGtB8g.png',text:bi('旧热水器坏了，团队帮我们换成即热式系统。方案解释清楚，报价透明，安装效果也很漂亮。','Our old water heater finally gave out, and Hydrowell helped us switch to a tankless system. They walked us through the options, gave us clear pricing, and completed the installation beautifully.')},
]
export const plans = [
 {name:bi('疏通与小修','Drain & Repair'),intro:bi('适合小渗漏与快速维修。','For minor leaks and quick fixes.'),price:149,features:[bi('排水疏通','Drain cleaning'),bi('轻微漏水维修','Minor leak repair'),bi('管道检查','Pipe inspection'),bi('提前固定报价','Upfront flat-rate pricing'),bi('通常 1–2 小时完成','Usually completed in 1–2 hours')]},
 {name:bi('标准服务','Standard Service'),intro:bi('适合常见家庭水暖问题。','For common plumbing issues at home.'),price:249,features:[bi('包含疏通与小修全部服务','Everything in Drain & Repair'),bi('马桶维修与更换','Toilet repairs & replacements'),bi('水龙头与配件维修','Faucet & fixture repairs'),bi('水压调节','Water pressure adjustment'),bi('专业水暖师傅服务','Professional plumber included')]},
 {name:bi('进阶服务','Advanced Service'),intro:bi('适合大型维修、更换与安装。','For major repairs, replacements & installs.'),price:449,features:[bi('包含标准服务全部内容','Everything in Standard Service'),bi('热水器维修与安装','Water heater repair & install'),bi('管道改造与更换','Repiping & pipe replacement'),bi('污水管维修','Sewer line repair'),bi('优先安排','Priority scheduling')]},
]
export const faqs = [
 [bi('提供全天候紧急水暖服务吗？','Do you offer 24/7 emergency plumbing services?'),bi('提供。我们每周 7 天、每天 24 小时响应，包括周末和节假日。爆管、严重漏水或马桶溢水等紧急情况，都可以联系我们。','Yes. We’re available 24 hours a day, 7 days a week, including weekends and holidays. Whether it’s a burst pipe, major leak, overflowing toilet, or another urgent issue, we’re just a call away.')],
 [bi("紧急情况多久可以响应？","How quickly can you respond to an emergency?"),bi("我们会尽快响应，并在有可用时间时提供当日服务。紧急水暖问题会优先处理，帮助减少房屋损坏。","We aim to respond as quickly as possible and offer same-day service whenever available. For urgent plumbing emergencies, our team prioritizes your call to help prevent further damage to your home.")],
 [bi("师傅持证并有保险吗？","Are your plumbers licensed and insured?"),bi("是的，我们的师傅均经过培训、持证且有保险，遵循行业标准并采取必要措施，确保施工安全、正确。","Yes. Our plumbers are trained, licensed, and insured professionals. We follow industry standards and take every precaution to ensure your plumbing work is completed safely and correctly.")],
 [bi("服务如何收费？","How much do your plumbing services cost?"),bi("费用取决于服务类型、问题复杂程度和所需配件。施工前提供清晰报价，没有隐藏费用。","Pricing depends on the type of service, the complexity of the problem, and any parts required. We provide clear, upfront pricing before work begins, so you’ll know what to expect without hidden fees.")],
 [bi("可以免费估价吗？","Do you offer free estimates?"),bi("是的，许多水暖服务和计划项目提供免费估价。了解需求后，我们会解释建议方案并提供透明报价。","Yes. We provide free estimates for many plumbing services and planned projects. Once we understand your needs, we’ll explain the recommended solution and provide transparent pricing before moving forward.")],
 [bi("支持哪些付款方式？","What payment methods do you accept?"),bi("支持大部分常用付款方式，包括信用卡和借记卡等。预约时可向团队确认具体方式。演示网站不处理付款。","We accept most major payment methods, including credit cards, debit cards, and other common payment options. Our team can confirm the available methods when scheduling your service. This demonstration does not process payments.")],
 [bi("施工有保修吗？","Do you provide a warranty on your work?"),bi("是的，符合条件的维修和安装提供保修。具体条款取决于服务内容、配件与设备。","Yes. We stand behind our workmanship and offer warranty coverage on eligible repairs and installations. Specific warranty terms may vary depending on the service, parts, and equipment used.")],
 [bi("服务覆盖哪些地区？","What areas do you serve?"),bi("服务覆盖奥斯汀及周边社区，包括朗德罗克、锡达帕克、普夫卢格维尔、利安德、马诺及附近地区的住宅与企业。","We serve homeowners and businesses throughout Austin, TX and surrounding communities, including Round Rock, Cedar Park, Pflugerville, Leander, Manor, and nearby areas.")],
]
