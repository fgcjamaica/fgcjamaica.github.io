import"./preload-helper-aa6bc0ce.js";const a=""+new URL("../assets/ajani-hickling-4ceff46c.png",import.meta.url).href,s=""+new URL("../assets/instagram-3a4f962a.svg",import.meta.url).href,o=""+new URL("../assets/github-b2bdc513.svg",import.meta.url).href,t=i=>({name:"Instagram",username:i,href:`https://www.instagram.com/${i}`,icon:s}),e=i=>({name:"Github",username:i,href:`https://www.github.com/${i}`,icon:o}),c=[{id:"ajani-hickling",name:"Ajani Hickling",socials:[e("ajanihickling"),t("ajanihickling")],imageUrl:a},{id:"ajani-hickling",name:"Chelsea Rerrie",socials:[e("chelse"),t("cherry.jpeg")],imageUrl:a}],g=c,h=({id:i})=>{const n=g.find(r=>r.id===i);if(!n)throw new Error(`Profile not found: ${i}`);return n};export{h as g};
