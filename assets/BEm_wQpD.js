import{r as d,P as i,a0 as _,v as n,E as s,F as r,R as c,A as a,x as o,i as p,t as e}from"./DkIoJsgh.js";const h={class:"main mt-5 flex flex-col h-screen justify-center items-center w-50%"},m=o("div",{class:"text-center"},[o("img",{src:"https://yu.ctu.edu.vn/images/upload/article/2020/03/0305-logo-ctu.png",alt:"logo ctu",width:"100",height:"100"})],-1),x={key:0,class:"text-3xl font-bold text-center mt-5",style:{color:"#003995"}},b={key:1,class:"text-3xl font-bold mb-7 text-center",style:{color:"#003995"}},g={key:2,class:"text-3xl font-bold text-center mt-5",style:{color:"#003995"}},y={key:3,class:"text-3xl font-bold mb-7 text-center",style:{color:"#003995"}},f=o("p",{class:"text-2xl font-bold mb-3 text-center",style:{color:"#0e71ea"}},"ĐĂNG NHẬP",-1),N=o("input",{type:"text",id:"username",class:"block w-100 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300",placeholder:"Tài khoản"},null,-1),k=o("input",{type:"password",id:"password",class:"block w-100 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 mt-5",placeholder:"Mật khẩu"},null,-1),H=o("button",{class:"bg-blue-600 p-2 rounded text-white font-bold mt-5 hover:bg-blue-500"},"ĐĂNG NHẬP",-1),w=o("button",{class:"bg-blue-600 p-2 rounded text-white font-bold mt-5 hover:bg-blue-500"},"ĐĂNG NHẬP",-1),G={__name:"login",setup(v){const t=d(!1);return i(()=>{_().query.page==="mushroom_house"&&(t.value=!0)}),(u,T)=>{const l=p("RouterLink");return e(),n("div",h,[m,s(t)?r("",!0):(e(),n("p",x,"THIẾT BỊ ĐIỀU HÒA")),s(t)?r("",!0):(e(),n("p",b,"DƯỠNG KHÍ PHÒNG LẠNH")),s(t)?(e(),n("p",g,"THIẾT BỊ ĐIỀU KHIỂN VÀ GIÁM SÁT")):r("",!0),s(t)?(e(),n("p",y,"NHIỆT ĐỘ VÀ ĐỘ ẨM TRONG NHÀ NẤM")):r("",!0),f,N,k,s(t)?r("",!0):(e(),c(l,{key:4,to:"/"},{default:a(()=>[H]),_:1})),s(t)?(e(),c(l,{key:5,to:"/?page=mushroom_house"},{default:a(()=>[w]),_:1})):r("",!0)])}}};export{G as default};
