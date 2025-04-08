import{g as f,r as _,m as g}from"./marked.esm-Dx4Y22UJ.js";import{A as p,c as l,b as v,a as e,F as b,s as y,f as i,o as w,z as j,e as r,m as h,q as x,v as k,x as d}from"./index-DCA1-MyC.js";const I="/assets/poly-CpyOdHaI.svg",S={setup(){const n=i([]),o=i(!0),c=i(null),a=f`
        query Post($sort: [String]) {
          posts(sort: $sort) {
            Title
            documentId
            publishedAt
            MainImage {
              url
            }
            Des
          }
        }
      `,m=async()=>{try{const s=await _("http://localhost:1337/graphql",a,{sort:["publishedAt:desc"]});n.value=s.posts}catch(s){c.value=s.message}finally{o.value=!1}},u=(s,t=150)=>g(s).replace(/<[^>]*>/g,"").slice(0,t);return w(m),{posts:n,loading:o,error:c,plainTextZajawka:u}}},T={class:"bg-gray-100"},$={class:"max-w-7xl my-6 md:my-8 justify-center mx-auto"},q={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},A={class:"max-w-4xl mb-3 md:mb-10 text-gray-700 mx-3 md:mx-5 overflow-hidden"},C={class:"w-full aspect-[16/9] overflow-hidden"},D=["src"],M={class:"pt-3 px-1 md:min-h-54"},P={class:"text-xl md:text-3xl hover:text-blue-900 transform transition hover:scale-101 mb-1 font-semibold"},z={class:"text-md text-gray-500"},N={class:"text-sm md:text-lg font-normal text-gray-600"},V={class:"bottom-2"};function B(n,o,c,a,m,u){const s=j("router-link");return r(),l("div",T,[o[1]||(o[1]=v('<div class="flex justify-center items-center"><div class="w-full h-[50vh] flex justify-center items-center"><img src="'+I+'" class="object-cover absolute w-full h-[50vh]"><div class="bg-blue2/30 absolute z-10 w-full h-[50vh]"></div><h2 class="text-5xl sm:text-6xl md:text-8xl font-semibold justify-center text-gray-50 relative z-10">Aktualności</h2></div></div>',1)),e("section",null,[e("div",$,[e("ul",q,[(r(!0),l(b,null,y(a.posts,t=>(r(),l("li",{key:t.documentId,class:"flex justify-center"},[h(s,{to:`/post/${t.documentId}`},{default:x(()=>[e("div",A,[e("div",C,[t.MainImage&&t.MainImage.url?(r(),l("img",{key:0,class:"object-cover w-full h-full",src:"http://localhost:1337"+t.MainImage.url,alt:"Post Image"},null,8,D)):k("",!0)]),e("div",M,[e("h2",P,d(t.Title),1),e("span",z,d(new Date(t.publishedAt).toLocaleDateString()),1),e("p",N,d(a.plainTextZajawka(t.Des))+"... ",1)]),e("div",V,[h(s,{to:`/post/${t.documentId}`},{default:x(()=>o[0]||(o[0]=[e("button",{class:"mt-4 px-4 py-2 bg-blue1 text-white rounded hover:bg-blue3"}," Czytaj dalej ",-1)])),_:2},1032,["to"])])])]),_:2},1032,["to"])]))),128))])])])])}const O=p(S,[["render",B]]);export{O as default};
