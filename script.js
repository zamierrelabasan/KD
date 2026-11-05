const $=s=>document.querySelector(s),P=n=>"₱"+Math.round(n).toLocaleString(),FB="https://m.me/Blessed Cafe";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
// Menu: edit names, prices, descriptions here. Optional photos: images/menu/1.jpg, 2.jpg ... (same order)
const MENU=[
 {c:"Coffee",e:"☕",n:"Americano", d:"",ty:["Hot","Cold"],z:{Regular:50,Medium:75,Large:99},zc:{Regular:60,Medium:85,Large:109,pic:"images/coffee/americano.png"}},
 {c:"Coffee",e:"🥛",n:"Cappuccino",d:"",ty:["Hot","Cold"],z:{Regular:75,Medium:130,Large:150},zc:{Regular:60,Medium:85,Large:109}},
 {c:"Coffee",e:"🧊",n:"Hazelnut Latte",d:"",ty:["Cold"],z:{Regular:75,Medium:130,Large:150},zc:{Regular:60,Medium:85,Large:109}},
 {c:"Coffee",e:"☕",n:"Espresso Latte", d:"",ty:["Cold"],z:{Regular:70,Medium:120,Large:140},zc:{Regular:60,Medium:85,Large:109}},
 {c:"Coffee",e:"☕",n:"Caramel Macchiato", d:"",ty:["Cold"],z:{Regular:75,Medium:120,Large:140},zc:{Regular:60,Medium:85,Large:109}},
 {c:"Coffee",e:"☕",n:"Vanilla Latte", d:"",ty:["Cold"],z:{Regular:70,Medium:120,Large:140},zc:{Regular:60,Medium:85,Large:109}},
 {c:"Coffee",e:"☕",n:"Salted Caramel", d:"",ty:["Cold"],z:{Regular:70,Medium:120,Large:140},zc:{Regular:60,Medium:85,Large:109}},
 {c:"Coffee",e:"☕",n:"Spanish Latte", d:"",ty:["Cold"],z:{Regular:75,Medium:130,Large:150}},
 {c:"Coffee",e:"☕",n:"Dirty Matcha", d:"",ty:["Cold"],z:{Regular:75,Medium:130,Large:150}},
 {c:"Coffee",e:"🍫",n:"Biscoff Latte",d:"",ty:["Cold"],z:{Regular:75,Medium:130,Large:150}},
 {c:"Coffee",e:"☕",n:"Ube Macchiato", d:"",ty:["Cold"],z:{Regular:75,Medium:120,Large:140}},
 {c:"Non-Coffee",e:"🍵",n:"Matcha Latte",d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Non-Coffee",e:"🍵",n:"Mango Matcha Latte",d:"",z:{Regular:75,Medium:99,Large:110}},
 {c:"Non-Coffee",e:"🍵",n:"Ube Matcha Latte",d:"",z:{Regular:75,Medium:99,Large:110}},
 {c:"Non-Coffee",e:"🍵",n:"Strawberry Matcha Latte",d:"",z:{Regular:75,Medium:99,Large:110}},
 {c:"Non-Coffee",e:"🍵",n:"Oreo Matcha Latte",d:"",z:{Regular:75,Medium:99,Large:110}},
 {c:"Non-Coffee",e:"🍵",n:"Caramel Latte",d:"",z:{Regular:75,Medium:79,Large:89}},
 {c:"Non-Coffee",e:"🍵",n:"Ube Latte",d:"",z:{Regular:75,Medium:79,Large:89}},
 {c:"Non-Coffee",e:"🍵",n:"Strawberry Latte",d:"",z:{Regular:75,Medium:79,Large:89}},
 {c:"Non-Coffee",e:"🍵",n:"Mango Latte",d:"",z:{Regular:75,Medium:79,Large:89}},
 {c:"Non-Coffee",e:"🍵",n:"Oreo Latte",d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Matcha", d:"",z:{Regular:80,Medium:99,Large:109}},
 {c:"Milktea",e:"☕",n:"Mango Graham CC", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Okinawa", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Red Velvet", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Hershey Choco", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Hazelnut Choco", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Wintermelon", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Mango", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Taro", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Salted Caramel", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Cookies and Cream", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Milktea",e:"☕",n:"Avocado", d:"",z:{Regular:75,Medium:89,Large:99}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Blueberry", d:"",z:{Regular:60,Medium:75,Large:89},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Strawberry", d:"",z:{Regular:55,Medium:65,Large:80},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Green Apple", d:"",z:{Regular:60,Medium:75,Large:89},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Lychee", d:"",z:{Regular:55,Medium:65,Large:80},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Honey Peach", d:"",z:{Regular:60,Medium:75,Large:89},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Green Apple Lemon", d:"",z:{Regular:60,Medium:75,Large:89},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Strawberry Lemon", d:"",z:{Regular:60,Medium:75,Large:89},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Mixed Berry", d:"",z:{Regular:60,Medium:75,Large:89},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Green Apple Lychee", d:"",z:{Regular:60,Medium:75,Large:89},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Orange", d:"",z:{Regular:60,Medium:75,Large:89},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Soda and Fruit Tea",e:"☕",n:"Mango Orange", d:"",z:{Regular:60,Medium:75,Large:89},zf:{Regular:55,Medium:70,Large:85}},
 {c:"Burgers",e:"🥐",n:"Classic",d:"",p:40},
 {c:"Burgers",e:"🥐",n:"Egg with Cheese Burger",d:"",p:55},
 {c:"Burgers",e:"🥐",n:"Cheese Burger",d:"",p:60},
 {c:"Burgers",e:"🥐",n:"Double Patty with Cheese Burger",d:"",p:80},
 {c:"Burgers",e:"🥐",n:"Bacon, Egg, Cheese Burger",d:"",p:95},
 {c:"Burgers",e:"🥐",n:"Overload Patty",d:"",p:140},
 {c:"Burgers",e:"🥐",n:"Overload Bacon",d:"",p:150},
 {c:"Snacks",e:"🥐",n:"French Fries Cheese",d:"",z:{Regular:50,Medium:70,Large:90}},
 {c:"Snacks",e:"🥐",n:"French Fries BBQ",d:"",z:{Regular:50,Medium:70,Large:90}},
 {c:"Snacks",e:"🥐",n:"French Fries Sourcream",d:"",z:{Regular:50,Medium:70,Large:90}},
 {c:"Snacks",e:"🥐",n:"Chicken Pops with Fries Cheese",d:"",z:{Regular:90,Medium:150,Large:189}},
 {c:"Snacks",e:"🥐",n:"Chicken Pops with Fries BBQ",d:"",z:{Regular:90,Medium:150,Large:189}},
 {c:"Snacks",e:"🥐",n:"Chicken Pops with Fries Sourcream",d:"",z:{Regular:90,Medium:150,Large:189}},
 {c:"Snacks",e:"🥐",n:"Nuggets with Fries Cheese",d:"",z:{Regular:85,Medium:100,Large:149}},
 {c:"Snacks",e:"🥐",n:"Nuggets with Fries BBQ",d:"",z:{Regular:85,Medium:100,Large:149}},
 {c:"Snacks",e:"🥐",n:"Nuggets with Fries Sourcream",d:"",z:{Regular:85,Medium:100,Large:149}},
 {c:"Snacks",e:"🥐",n:"Combo Snack",d:"",z:{Regular:99,Medium:150,Large:190}},
 {c:"Dessert",e:"🥐",n:"Brownies",d:"",p:30},
 {c:"Dessert",e:"🥐",n:"Brokies",d:"",p:35},
 {c:"Dessert",e:"🥐",n:"Banana Muffin",d:"",p:35},
 {c:"Dessert",e:"🥐",n:"Banana Nut Muffin",d:"",p:45},
 {c:"Dessert",e:"🥐",n:"Chocolate Cupcake",d:"",p:35},
 {c:"Dessert",e:"🥐",n:"Mini Red Velvet Cake",d:"",p:110},
 {c:"Dessert",e:"🥐",n:"Mini Carrot Cake",d:"",p:115},
 {c:"Dessert",e:"🥐",n:"Mini Lemon Cake",d:"",p:110},
 {c:"Dessert",e:"🥐",n:"Mini Cheese Cake",d:"",p:110},
 {c:"Meals",e:"🍝",n:"ChickSilog",d:"",z:{"1pc Chicken":95,"2pcs Chicken":120}},
 {c:"Meals",e:"🍝",n:"SpamSilog",d:"",p:100},
 {c:"Meals",e:"🍝",n:"Tocilog",d:"",p:90},
 {c:"Meals",e:"🍝",n:"HungSilog",d:"",p:100},
 {c:"Meals",e:"🍝",n:"LiemSilog",d:"",p:100},
 {c:"Meals",e:"🍝",n:"PorkSilog",d:"",p:95},
 {c:"Meals",e:"🍝",n:"TapSilog",d:"",p:100},
 {c:"Meals",e:"🍝",n:"LonggaDog Silog",d:"",p:100},
 {c:"Meals",e:"🍝",n:"LongSilog",d:"",p:85},
 {c:"Meals",e:"🍝",n:"HotSilog",d:"",p:85}
];
const VERSES=[["The Lord is my shepherd; I shall not want.","Psalm 23:1"],["Give us today our daily bread.","Matthew 6:11"],["This is the day the Lord has made; let us rejoice and be glad in it.","Psalm 118:24"],["Come to me, all you who are weary and burdened, and I will give you rest.","Matthew 11:28"],["Love is patient, love is kind.","1 Corinthians 13:4"]];
// Reviews: SAMPLE text - replace with real feedback. Photos: images/customer1.jpg ...
const REVIEWS=[
 ["Maria S.","Their latte is like a warm hug in a cup! I came for coffee and stayed for three hours. 🥹"],
 ["Joshua D.","The croissant was so flaky I almost cried happy tears. Cozy place, kind staff, blessed vibes!"],
 ["Ate Grace","My go-to spot after Sunday service. The cheesecake is heavenly — literally. 🙏"],
 ["Kaye & Friends","We took 50 photos and 2 sips. Everything is so cute and so yummy. Will be back tomorrow!"],
 ["Kuya Ben","Best iced caramel macchiato in town. The staff remembered my name on my second visit. 💛"],
 ["Lia M.","Matcha latte + soft music + Bible verse on the wall = my happy place. Highly recommended!"]
];
const GALLERY=["☕","🥐","🍰","🪴","🍵"]; // photos: images/cafe1.jpg ... cafe5.jpg
const GCASH={no:"09164381967",name:"RH....N D."}; // optional QR: images/gcash-qr.jpg
const TYPES=[["Dine-in",0],["Take-out",0],["Delivery",20]],PAYS=["Cash","GCash"],PROMOS={BLESSED10:.1,VERSE5:.1};
let cart=[],cat="All",promo=0,order=null,f={nm:"",ph:"",ad:"",type:"Dine-in",pay:"Cash",code:""};
const slug=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const EXTS=["jpg","png","jpeg","webp","JPG","PNG","JPEG","WEBP"];
const img=(s,f)=>{const b=s.replace(/\.\w+$/,"");return `<img src="${b}.jpg" data-b="${b}" data-f="${f?f.replace(/\.\w+$/,""):""}" data-n="0" alt="" loading="lazy" onerror="nx(this)">`};
function nx(i){const n=+i.dataset.n+1;if(n<EXTS.length){i.dataset.n=n;i.src=i.dataset.b+"."+EXTS[n]}else if(i.dataset.f){i.dataset.b=i.dataset.f;i.dataset.f="";i.dataset.n=0;i.src=i.dataset.b+".jpg"}else i.remove()}
const pic=(m,t)=>{const b=`images/${slug(m.c)}/${slug(m.n)}`;return t?img(`${b}-${slug(t)}.jpg`,`${b}.jpg`):img(`${b}.jpg`)};
const sub=()=>cart.reduce((a,c)=>a+unit(c)*c.qty,0),disc=()=>sub()*promo,fee=()=>TYPES.find(t=>t[0]===f.type)[1];
let tt;const toast=m=>{const e=$("#toast");e.textContent=m;e.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>e.classList.remove("on"),2600)};
function badge(){const n=cart.reduce((a,c)=>a+c.qty,0),b=$("#cnt");b.textContent=n;b.style.display=n?"block":"none"}
const SIZE_CATS=["Coffee","Non-Coffee","Milktea","Soda and Fruit Tea"],SIZES=[["Regular",0],["Medium",20],["Large",40]];
const DRINK_TYPES={"Soda and Fruit Tea":["Soda","Fruit Tea"]};
const typesOf=m=>m.ty||DRINK_TYPES[m.c]||[];
const sp=(m,s,t)=>(t==="Fruit Tea"&&m.zf&&m.zf[s])||(t==="Cold"&&m.zc&&m.zc[s])||(m.z&&m.z[s])||m.p+(SIZES.find(z=>z[0]===s)||SIZES[0])[1];
const sizesOf=m=>m.z?Object.keys(m.z):SIZE_CATS.includes(m.c)?SIZES.map(z=>z[0]):[];
const unit=c=>c.s?sp(MENU[c.i],c.s,c.t):MENU[c.i].p;
const nm=c=>(c.t?c.t+" ":"")+MENU[c.i].n+(c.s?" ("+c.s+")":"");

function drawMenu(){
 $("#tabs").innerHTML=["All",...new Set(MENU.map(m=>m.c))].map(c=>`<button class="tab${c===cat?" on":""}" data-c="${c}">${c}</button>`).join("");
 $("#grid").innerHTML=MENU.map((m,i)=>({...m,i})).filter(m=>cat==="All"||m.c===cat).map(m=>`<div class="card"><div class="ph">${m.e}${pic(m,typesOf(m)[0])}</div><h3>${m.n}</h3><small>${m.d}</small><div class="row"><span class="pr">${m.p!=null?P(m.p):""}</span><button class="add" data-add="${m.i}">+ Add</button></div></div>`).join("");
  document.querySelectorAll("#grid [data-add]").forEach(b=>{
  const m=MENU[b.dataset.add],zs=sizesOf(m);
  const ts=typesOf(m);if(ts.length){
  const tr=document.createElement("div");
  tr.className="sizes";
  tr.innerHTML=ts.map((t,k)=>`<button class="sz${k?"":" on"}" data-ty="${t}">${t}</button>`).join("");
  b.closest(".row").before(tr);
}
  if(!zs.length)return;
  const row=document.createElement("div");
  row.className="sizes";
  row.innerHTML=zs.map((s,k)=>`<button class="sz${k?"":" on"}" data-sz="${s}">${s} <b>${P(sp(m,s,"Soda"))}</b></button>`).join("");
  b.closest(".row").before(row);
 });
}
function drawCart(){
 if(order){$("#drawer").innerHTML=`<div class="dh"><h3>Order ${order.no}</h3><button data-close aria-label="Close">×</button></div><div class="db"><p>✅ Almost done! Send this order to us on Messenger so we can confirm it. It has been copied — just paste it in the chat.</p><pre>${esc(order.msg)}</pre>${order.gc?`<p>💙 Please send ${P(order.total)} to GCash ${GCASH.no} (${esc(GCASH.name)}), then send the screenshot in the chat.</p>`:""}</div><div class="db" style="flex:none"><button class="btn dbtn" data-send><span>Send on Messenger</span><span>→</span></button><button class="btn out dbtn" style="margin-top:8px;justify-content:center" data-new>Start a new order</button></div>`;return}
 const del=f.type==="Delivery";
 $("#drawer").innerHTML=`<div class="dh"><h3>Your Order</h3><button data-close aria-label="Close">×</button></div><div class="db">`+
 (cart.length?cart.map((c,k)=>`<div class="line"><span>${MENU[c.i].e}</span><div>${nm(c)}<small>${P(unit (c)*c.qty)}</small></div><div class="qty"><button data-ci="${k}" data-d="-1">−</button>${c.qty}<button data-ci="${k}" data-d="1">+</button></div></div>`).join(""):`<p class="empty">Your cart is empty ☕<br>Add something delicious!</p>`)+
 `<div class="two"><input class="in" data-f="code" value="${esc(f.code)}" placeholder="Promo code"><button class="btn" data-apply>Apply</button></div>
 <input class="in" data-f="nm" value="${esc(f.nm)}" placeholder="Your name"><input class="in" data-f="ph" value="${esc(f.ph)}" placeholder="Phone number" inputmode="tel">
 <select class="in" data-f="type">${TYPES.map(t=>`<option${t[0]===f.type?" selected":""}>${t[0]}</option>`).join("")}</select>
 ${del?`<input class="in" data-f="ad" value="${esc(f.ad)}" placeholder="Delivery address">`:""}
 <select class="in" data-f="pay">${PAYS.map(p=>`<option${p===f.pay?" selected":""}>${p}</option>`).join("")}</select>
 ${f.pay==="GCash"?`<div class="gc"><b>Pay with GCash</b><div>${GCASH.no} · ${esc(GCASH.name)}</div>${img("images/gcash-qr.jpg")}<button class="btn" data-copy>Copy number</button><small>Send the payment, then send the screenshot on Messenger.</small></div>`:""}
 <div class="sum"><div><span>Subtotal</span><span>${P(sub())}</span></div>${promo?`<div><span>Promo</span><span>−${P(disc())}</span></div>`:""}${fee()?`<div><span>Delivery fee</span><span>${P(fee())}</span></div>`:""}<div class="t"><span>Total</span><span>${P(sub()-disc()+fee())}</span></div></div></div>
 <button class="btn dbtn" data-place><span>Place Order</span><span>${P(sub()-disc()+fee())}</span></button>`;
}
function place(){
 if(!cart.length)return toast("Your cart is empty");
 if(!f.nm.trim())return toast("Please enter your name");
 if(f.type==="Delivery"&&!f.ad.trim())return toast("Please enter your delivery address");
 const no="BKD"+String(Date.now()).slice(-6),total=sub()-disc()+fee();
 const msg=`Hi Blessed KD Resto Cafe! New order ${no}\nName: ${f.nm.trim()}${f.ph.trim()?"\nPhone: "+f.ph.trim():""}\n${f.type}${f.type==="Delivery"?" - "+f.ad.trim():""}\nPayment: ${f.pay}\n`+cart.map(c=>`• ${c.qty}× ${nm(c)}`).join("\n")+`\nTotal: ${P(total)}`;
 order={no,msg,gc:f.pay==="GCash",total};navigator.clipboard?.writeText(msg).catch(()=>{});cart=[];promo=0;badge();drawCart();
}
const openCart=v=>{drawCart();$("#drawer").classList.toggle("on",v);$("#ov").classList.toggle("on",v)};

document.addEventListener("click",e=>{
 const g=s=>e.target.closest(s),d=(s,k)=>g(s).dataset[k];
 if(!g("#burger"))$("#links").classList.remove("on");
 if(g("#burger"))return $("#links").classList.toggle("on");
 if(g("#cartBtn"))return openCart(true);
 if(g("[data-close],#ov"))return openCart(false);
 if(g("[data-sz]")){const b=e.target.closest("[data-sz]");b.parentNode.querySelectorAll("[data-sz]").forEach(x=>x.classList.toggle("on",x===b));return}
 if(g("[data-ty]")){const b=e.target.closest("[data-ty]"),card=b.closest(".card"),m=MENU[card.querySelector("[data-add]").dataset.add],t=b.dataset.ty;b.parentNode.querySelectorAll("[data-ty]").forEach(x=>x.classList.toggle("on",x===b));card.querySelectorAll("[data-sz]").forEach(x=>{x.innerHTML=x.dataset.sz+" <b>"+P(sp(m,x.dataset.sz,t))+"</b>"});return}
 if(g("[data-add]")){order=null;const i=+d("[data-add]","add"),btn=e.target.closest("[data-add]"),card=btn.closest(".card"),on=card.querySelector("[data-sz].on"),s=on?on.dataset.sz:"",to=card.querySelector("[data-ty].on"),t=to?to.dataset.ty:"",c=cart.find(x=>x.i===i&&x.s===s&&(x.t||"")===t);c?c.qty++:cart.push({i,s,t,qty:1});badge();return toast(nm({i,s,t})+" added to cart")}
 if(g("[data-c]")){cat=d("[data-c]","c");return drawMenu()}
 if(g("[data-cat]")){cat=d("[data-cat]","cat");drawMenu();return}
 if(g("[data-ci]")){const k=+d("[data-ci]","ci");cart[k].qty+=+d("[data-ci]","d");if(cart[k].qty<1)cart.splice(k,1);badge();return drawCart()}
 if(g("[data-apply]")){promo=PROMOS[f.code.trim().toUpperCase()]||0;toast(promo?"Promo applied! 🎉":"Invalid promo code");return drawCart()}
 if(g("[data-copy]")){navigator.clipboard?.writeText(GCASH.no.replace(/\s/g,""));return toast("GCash number copied")}
 if(g("[data-place]"))return place();
 if(g("[data-send]")){navigator.clipboard?.writeText(order.msg).catch(()=>{});toast("Order copied — paste it in Messenger");return void window.open(FB,"_blank")}
 if(g("[data-new]")){order=null;return drawCart()}
});
document.addEventListener("input",e=>{const k=e.target.dataset.f;if(k)f[k]=e.target.value});
document.addEventListener("change",e=>{const k=e.target.dataset.f;if(k==="type"||k==="pay")drawCart()});

$("#revs").innerHTML=REVIEWS.map(([n,t],k)=>`<div class="rev"><div class="who"><div class="av">${n[0]}${img(`images/customer${k+1}.jpg`)}</div><b>${n}</b></div><div class="stars">★★★★★</div><p>${t}</p></div>`).join("");
let v=0;function verse(){const e=$("#vq");e.style.opacity=0;setTimeout(()=>{e.textContent="“"+VERSES[v][0]+"”";$("#vc").textContent="— "+VERSES[v][1];e.style.opacity=1;v=(v+1)%VERSES.length},400)}
verse();setInterval(verse,6000);
$("#yr").textContent=new Date().getFullYear();
drawMenu();

const MEMORIES=[
    ["1.jpg",""],
    ["2.jpg",""],
    ["3.jpg",""],
    ["4.jpg",""],
    ["5.jpg",""],
    ["6.jpg",""],
    ["7.jpg",""],
    ["8.jpg",""],
    ["9.jpg",""],
    ["10.jpg",""],
    ["11.jpg",""],
    ["12.jpg",""],
    ["13.jpg",""],
    ["14.jpg",""],
    ["15.jpg",""],
    ["16.jpg",""],
    ["17.jpg",""],
    ["18.jpg",""],
    ["19.jpg",""],
    ["20.jpg",""],
    ["21.jpg",""],
    ["22.jpg",""],
    ["23.jpg",""],
    ["24.jpg",""],
    ["25.jpg",""],
    ["26.jpg",""],
    ["27.jpg",""],
    ["28.jpg",""],
    ["29.jpg",""],
    ["30.jpg",""],
    ["31.jpg",""],
    ["32.jpg",""],
    ["33.jpg",""],
    ["34.jpg",""],
    ["35.jpg",""],
    ["36.jpg",""],
    ["37.jpg",""],
    ["38.jpg",""],
    ["39.jpg",""],
    ["40.jpg",""],
    ["41.jpg",""]
];
(function(){
 const src=MEMORIES.map(([f])=>"images/memories/"+f);
 let i=0;
 $("#albumCover").src=src[0];
 $("#albumCover").src="images/memories/cover.jpg";
 $("#albumCount").textContent=src.length+" photos · Tap to open";
 $("#amGrid").innerHTML=src.map((s,k)=>`<img src="${s}" data-k="${k}" loading="lazy" alt="Photo ${k+1}">`).join("");
 const show=k=>{i=(k+src.length)%src.length;$("#vwImg").src=src[i]};
 const lock=v=>document.body.style.overflow=v?"hidden":"";
 $("#albumOpen").onclick=()=>{$("#albumModal").classList.add("on");lock(1)};
 $("#amClose").onclick=()=>{$("#albumModal").classList.remove("on");lock(0)};
 $("#amGrid").onclick=e=>{const t=e.target.closest("[data-k]");if(t){show(+t.dataset.k);$("#viewer").classList.add("on")}};
 $("#vwClose").onclick=()=>$("#viewer").classList.remove("on");
 $("#vwPrev").onclick=()=>show(i-1);
 $("#vwNext").onclick=()=>show(i+1);
 document.addEventListener("keydown",e=>{
  if(!$("#viewer").classList.contains("on"))return;
  if(e.key==="ArrowLeft")show(i-1);
  if(e.key==="ArrowRight")show(i+1);
  if(e.key==="Escape")$("#viewer").classList.remove("on");
 });
})();
// Games: edit names and descriptions here. Photos: images/games/1.jpg, 2.jpg ... (same order)
const GAMES=[
 ["♟️","Chess","Challenge a friend over a cup of coffee.","Checkmate in 3 moves? Prove it! ♟️"],
 ["🔤","Scrabble","Build words and enjoy the friendly rivalry.","Can you beat your friend with a Q word? 🔤"],
 ["🧱","Tower Blocks","Steady hands win. Don't let it tumble!","Steady hands! Don't let it fall! 🧱"],
 ["📖","Bible Games","Fun ways to learn and share God's Word together.","Who can name all 12 disciples? 📖"]
];
$("#gameGrid").innerHTML=GAMES.map(([e,n,d],k)=>`<div class="game-card" data-g="${k}"><div class="game-ph">${e}${img(`images/games/${k+1}.jpg`)}</div><h3>${esc(n)}</h3><p>${esc(d)}</p></div>`).join("");

function pop(el){
 const r=el.getBoundingClientRect(),em=["🎉","✨","⭐","🙏","☕","💛"];
 for(let i=0;i<14;i++){
  const s=document.createElement("span");
  s.className="conf";s.textContent=em[i%em.length];
  s.style.left=r.left+r.width/2+"px";s.style.top=r.top+r.height/2+"px";
  s.style.setProperty("--x",(Math.random()*360-180)+"px");
  s.style.setProperty("--y",(Math.random()*-260-40)+"px");
  document.body.appendChild(s);setTimeout(()=>s.remove(),1200);
 }
}
document.addEventListener("click",e=>{
 const c=e.target.closest(".game-card"),b=e.target.closest("#surprise");
 if(c){pop(c);toast(GAMES[c.dataset.g][3])}
 if(b){
  const cards=[...document.querySelectorAll(".game-card")],k=Math.floor(Math.random()*cards.length),pick=cards[k];
  cards.forEach(x=>x.classList.remove("pick"));void pick.offsetWidth;pick.classList.add("pick");
  pick.scrollIntoView({behavior:"smooth",block:"center"});
  pop(pick);toast("Today's game: "+GAMES[k][1]+"! 🎉");
 }
})
// Change the photo when Soda / Fruit Tea is tapped
document.addEventListener("click",e=>{
 const b=e.target.closest("#grid [data-ty]");if(!b)return;
 const card=b.closest(".card"),ph=card.querySelector(".ph"),m=MENU[card.querySelector("[data-add]").dataset.add];
 ph.querySelectorAll("img").forEach(x=>x.remove());
 ph.insertAdjacentHTML("beforeend",pic(m,b.dataset.ty));
});
// ===== PowerPoint-style slideshow =====
(function(){
 const secs=[...document.querySelectorAll("body>section")],foot=document.querySelector("body>footer");
 // Which sections share a slide (numbers = order of <section> in index.html, "f" = footer)
  const groups=[[0],[1],[2],[3,4],[5],[6],[7],[8],[9,10,"f"]];
 const deck=document.createElement("main");deck.id="deck";
 document.querySelector("header.nav").after(deck);
 const slides=groups.map(g=>{
  const s=document.createElement("div");s.className="slide";
  g.forEach(k=>s.appendChild(k==="f"?foot:secs[k]));
  deck.appendChild(s);return s;
 });

 const sc=document.createElement("div");sc.id="sc";
 sc.innerHTML=`<button id="scPrev" aria-label="Previous slide">‹</button><div class="dots">${slides.map((_,i)=>`<i data-n="${i}"></i>`).join("")}</div><button id="scNext" aria-label="Next slide">›</button>`;
 document.body.appendChild(sc);
 const dots=[...sc.querySelectorAll("i")];

 let cur=0,busy=false;
 function go(n,instant){
  n=Math.max(0,Math.min(slides.length-1,n));
  if(n===cur&&!instant)return;
  cur=n;
  slides.forEach((s,i)=>{s.classList.toggle("on",i===n);s.classList.toggle("before",i<n)});
  slides[n].scrollTop=0;
  dots.forEach((d,i)=>d.classList.toggle("on",i===n));
  $("#scPrev").disabled=n===0;$("#scNext").disabled=n===slides.length-1;
  busy=true;setTimeout(()=>busy=false,650);
 }
 const scrollable=s=>s.scrollHeight>s.clientHeight+4;
 const atBottom=s=>s.scrollTop+s.clientHeight>=s.scrollHeight-3,atTop=s=>s.scrollTop<=0;

 $("#scPrev").onclick=()=>go(cur-1);
 $("#scNext").onclick=()=>go(cur+1);
 sc.addEventListener("click",e=>{const d=e.target.closest("[data-n]");if(d)go(+d.dataset.n)});

 // mouse wheel / trackpad
 let lastW=0;
 deck.addEventListener("wheel",e=>{
  const s=slides[cur],now=Date.now(),fresh=now-lastW>200;lastW=now;
  if(Math.abs(e.deltaY)<8)return;
  const down=e.deltaY>0;
  if(scrollable(s)){
   if(down&&!atBottom(s))return;      // keep scrolling inside tall slide (Menu)
   if(!down&&!atTop(s))return;
   if(!fresh)return;                  // ignore momentum so it doesn't skip slides
  }
  e.preventDefault();
  if(!busy)go(cur+(down?1:-1));
 },{passive:false});

 // swipe
 let tx=0,ty=0;
 deck.addEventListener("touchstart",e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
 deck.addEventListener("touchend",e=>{
  if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;
  const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;
  if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)go(cur+(dx<0?1:-1));
  else if(!scrollable(slides[cur])&&Math.abs(dy)>60&&Math.abs(dy)>Math.abs(dx))go(cur+(dy<0?1:-1));
 },{passive:true});

 // keyboard
 document.addEventListener("keydown",e=>{
  if(/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName))return;
  if(document.querySelector("#drawer.on,#albumModal.on,#viewer.on"))return;
  const k=e.key,flat=!scrollable(slides[cur]);
  if(k==="ArrowRight"||(flat&&k==="ArrowDown"))go(cur+1);
  else if(k==="ArrowLeft"||(flat&&k==="ArrowUp"))go(cur-1);
  else if(k==="Home")go(0);
  else if(k==="End")go(slides.length-1);
 });

 // nav links (#menu, #about, #visit ...) jump to the slide that contains them
 document.addEventListener("click",e=>{
  const a=e.target.closest('a[href^="#"]');if(!a)return;
  const id=a.getAttribute("href");if(id.length<2)return;
  let t=null;try{t=document.querySelector(id)}catch(_){}
  const n=slides.findIndex(s=>s.contains(t));
  if(n<0)return;e.preventDefault();go(n);
 });

 let start=0;
 try{const t=location.hash&&document.querySelector(location.hash);const n=slides.findIndex(s=>s.contains(t));if(n>=0)start=n}catch(_){}
 go(start,true);
})();
document.querySelectorAll('.hp-link').forEach(function(card){
  card.addEventListener('click', function(e){
    e.preventDefault();
    var gamesLink = document.querySelector('#links a[href="#games"]');
    if (gamesLink) gamesLink.click();
  });
});