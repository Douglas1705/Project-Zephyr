import{r as a,j as l}from"./index-CGbbQGhw.js";function m({initialCount:o,onCountChange:t,className:u=""}){const[i,c]=a.useState(o),[n,r]=a.useState(""),d=a.useCallback(()=>{c(s=>{const e=s+1;return e<=10?(t(e),r(""),e):(r("values ​​from 1 to 10"),s)})},[t]),x=a.useCallback(()=>{c(s=>{const e=s-1;return e>=1?(t(e),r(""),e):(r("values ​​from 1 to 10"),s)})},[t]),p=a.useCallback(s=>{const e=parseInt(s.target.value,10);!isNaN(e)&&e>=1&&e<=10?(c(e),t(e),r("")):isNaN(e)||e<1?r("O valor deve ser entre 1 e 10."):e>10&&(c(10),t(10),r("O valor deve ser entre 1 e 10."))},[t]);return l.jsxs("div",{className:`w-auto ${u} py-4 border-2 border-gray-400 rounded-xl`,children:[l.jsxs("div",{className:"flex w-36 px-3 text-center justify-between gap-4  text-base mx-auto",children:[l.jsx("button",{onClick:x,children:"-"}),l.jsx("input",{type:"text",value:i,onChange:p,placeholder:"1",className:" w-6 py-2 px-0 text-center"}),l.jsx("button",{onClick:d,children:"+"})]}),n&&l.jsx("p",{style:{color:"red"},children:n})]})}export{m as C};
