import{i as l,j as e,s as n,f as p,p as m,a as i,b as c,R as u,P as g,c as x}from"../chunks/chunk-dkObpX_l.js";/* empty css                      */const f=({data:o})=>{const{pageMeta:t}=o,{origin:s}=new URL(o.url);let r=t.socialImageUrl;return t.socialImageAssetName&&(r=`${s}${l({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),n,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:d})=>e.jsx("meta",{property:a,content:d},a)),p,m.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a.name}`,as:"font",crossOrigin:"anonymous"},a.id)),c.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a.name}`,as:"image"},a.id))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:f},Symbol.toStringTag,{value:"Module"})),y=({data:o})=>{const{system:t,resources:s,url:r}=o;return e.jsx(u.Provider,{value:{imageLoader:l,assetBaseUrl:i,resources:s},children:e.jsx(g,{system:t},r)})},h=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}}};export{P as configValuesSerialized};
