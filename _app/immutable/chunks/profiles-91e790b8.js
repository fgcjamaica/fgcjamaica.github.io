import{_ as o}from"./preload-helper-aa6bc0ce.js";const n=""+new URL("../assets/instagram-3a4f962a.svg",import.meta.url).href,m=""+new URL("../assets/github-b2bdc513.svg",import.meta.url).href,l=(e,a)=>{const i=e[a];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((u,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+a)))})},r=e=>({name:"Instagram",username:e,href:`https://www.instagram.com/${e}`,icon:n}),t=e=>({name:"Github",username:e,href:`https://www.github.com/${e}`,icon:m}),c=[{name:"Paul Pounall",intro:"Howdy! I'm Pablo, the Engineer coach. Jamaica College Alumnus."},{name:"Gavin Samuels",intro:"Greetings! I'm Gavin, the Head coach. Jamaica College Alumnus. 8+ years coacjing experience."},{name:"Stephanie Williams",socials:[r("_stephnathwill_")],intro:"Hi! I'm Steph, the Team Captain and Engineer. Immaculate Conception High School."},{name:"Ajani Hickling",socials:[t("42-Life"),r("renzu_photos")],intro:"Hi! I'm Ajani (Macbook), I serve as the Deputy Spokesperson and programmer. Coming from American International School of Kingston (AISK)."},{name:"Chelsea Rerrie",socials:[t("cherry-java"),r("cherrysoda.jpeg")],intro:"Hi! I'm Chels. Spokesperson and programmer dabbling in CAD. Coming from Immaculate Conception High School."},{name:"Orville Daley",socials:[t("crypto-cmd"),r("oj.frxst")],intro:"Hey! I'm Orville. Lead Programmer. From Jamaica College. PS: I made the website."}],p=async({id:e})=>(await l(Object.assign({"../assets/images/profiles/ajani-hickling.jpg":()=>o(()=>import("./ajani-hickling-6558ca22.js"),[],import.meta.url),"../assets/images/profiles/chelsea-rerrie.jpg":()=>o(()=>import("./chelsea-rerrie-92f5bf3f.js"),[],import.meta.url),"../assets/images/profiles/gavin-samuels.jpg":()=>o(()=>import("./gavin-samuels-b7f19bc1.js"),[],import.meta.url),"../assets/images/profiles/orville-daley.jpg":()=>o(()=>import("./orville-daley-f579896e.js"),[],import.meta.url),"../assets/images/profiles/paul-pounall.jpg":()=>o(()=>import("./paul-pounall-01cee7c7.js"),[],import.meta.url),"../assets/images/profiles/stephanie-williams.jpg":()=>o(()=>import("./stephanie-williams-8307fa5f.js"),[],import.meta.url)}),`../assets/images/profiles/${e}.jpg`)).default,g=await Promise.all(c.map(async e=>{const a=e.name.toLowerCase().replace(/ /g,"-");return{...e,id:a,imageUrl:await p({id:a})}})),h=({id:e})=>{const a=g.find(i=>i.id===e);if(!a)throw new Error(`Profile not found: ${e}`);return a};export{l as _,h as g};
