const productsEl = document.getElementById('products')
const cartBtn = document.getElementById('cart-btn')
const cartModal = document.getElementById('cart-modal')
const cartCount = document.getElementById('cart-count')
const cartItemsEl = document.getElementById('cart-items')
const cartTotalEl = document.getElementById('cart-total')
const searchInput = document.getElementById('search')
const categorySelect = document.getElementById('category')
const sortSelect = document.getElementById('sort')
const productModal = document.getElementById('product-modal')
const productDetail = document.getElementById('product-detail')

let products = []
let cart = JSON.parse(localStorage.getItem('suplementos_cart')||'[]')

function formatMoney(n){return n.toLocaleString()}

function saveCart(){localStorage.setItem('suplementos_cart', JSON.stringify(cart)); renderCartCount();}

function load(){
  fetch('products.json').then(r=>r.json()).then(data=>{
    products = data
    populateCategories()
    renderProducts()
  })
}

function populateCategories(){
  const cats = ['all', ...new Set(products.map(p=>p.category))]
  categorySelect.innerHTML = ''
  cats.forEach(c=> categorySelect.innerHTML += `<option value="${c}">${c}</option>`)
}

function renderProducts(){
  const q = (searchInput && searchInput.value) ? searchInput.value.toLowerCase() : ''
  const cat = categorySelect.value
  const sort = sortSelect.value
  let out = products.filter(p=> (cat==='all'||p.category===cat) && (p.title.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)))
  if(sort==='price-asc') out.sort((a,b)=>a.price-b.price)
  if(sort==='price-desc') out.sort((a,b)=>b.price-a.price)
  productsEl.innerHTML=''
  out.forEach(p=>{
    const d=document.createElement('div');d.className='card'
    d.innerHTML=`<img src="${p.img}" alt="${p.title}"><h4>${p.title}</h4><p>${p.desc}</p><div class="price">$${formatMoney(p.price)}</div><div class="actions"><a href="product.html?id=${p.id}" class="btn btn-ghost">Ver página</a><button class="btn btn-primary add" data-id="${p.id}">Agregar</button></div>`
    productsEl.appendChild(d)
  })
  document.querySelectorAll('.add').forEach(b=>b.addEventListener('click',e=>{const id=Number(e.target.dataset.id); addToCart(id)}))
}

function addToCart(id){
  const p=products.find(x=>x.id===id)
  const item=cart.find(x=>x.id===id)
  if(item) item.qty++
  else cart.push({id:p.id,title:p.title,price:p.price,img:p.img,qty:1})
  saveCart();
}

function renderCartCount(){cartCount.textContent = cart.reduce((s,i)=>s+i.qty,0)}

function renderCart(){
  cartItemsEl.innerHTML=''
  if(cart.length===0) cartItemsEl.innerHTML='<p>Tu carrito está vacío.</p>'
  cart.forEach(i=>{
    const div=document.createElement('div');div.className='cart-item'
    div.innerHTML=`<img src="${i.img}" alt="${i.title}"><div><strong>${i.title}</strong><div>$${formatMoney(i.price)} x ${i.qty}</div></div><div><button class="btn btn-ghost plus" data-id="${i.id}">+</button><button class="btn btn-ghost minus" data-id="${i.id}">-</button></div>`
    cartItemsEl.appendChild(div)
  })
  document.querySelectorAll('.plus').forEach(b=>b.addEventListener('click',e=>{const id=Number(e.target.dataset.id); changeQty(id,1)}))
  document.querySelectorAll('.minus').forEach(b=>b.addEventListener('click',e=>{const id=Number(e.target.dataset.id); changeQty(id,-1)}))
  cartTotalEl.textContent = cart.reduce((s,i)=>s+i.price*i.qty,0)
}

function changeQty(id,delta){
  const item=cart.find(x=>x.id===id); if(!item) return
  item.qty+=delta; if(item.qty<=0) cart=cart.filter(x=>x.id!==id)
  saveCart(); renderCart()
}

function openProduct(id){
  const p = products.find(x=>x.id===id)
  if(!p) return
  productDetail.innerHTML = `<div class="card"><img src="${p.img}"><h3>${p.title}</h3><p>${p.desc}</p><div class="price">$${formatMoney(p.price)}</div><div class="actions"><button class="btn btn-primary add-detail" data-id="${p.id}">Agregar al carrito</button><a href="product.html?id=${p.id}" class="btn btn-ghost">Abrir página</a></div></div>`
  productModal.setAttribute('aria-hidden','false')
  document.querySelectorAll('.add-detail').forEach(b=>b.addEventListener('click',e=>{addToCart(Number(e.target.dataset.id)); alert('Agregado al carrito')}))
}

cartBtn.addEventListener('click',()=>{cartModal.setAttribute('aria-hidden','false');renderCart()})
document.getElementById('close-cart').addEventListener('click',()=>cartModal.setAttribute('aria-hidden','true'))
document.getElementById('checkout').addEventListener('click',()=>{
  if(cart.length===0) return alert('Carrito vacío')
  // simulate order creation
  const order = { id: 'ORD-'+Date.now(), items: cart, total: cart.reduce((s,i)=>s+i.price*i.qty,0) }
  localStorage.setItem('suplementos_last_order', JSON.stringify(order))
  cart = []
  saveCart(); renderCart(); cartModal.setAttribute('aria-hidden','true')
  // redirect to order page
  location.href = 'order.html'
})

// product modal handlers
document.getElementById('close-product').addEventListener('click',()=>productModal.setAttribute('aria-hidden','true'))

// search / filters events
if(searchInput) searchInput.addEventListener('input', ()=> renderProducts())
if(categorySelect) categorySelect.addEventListener('change', ()=> renderProducts())
if(sortSelect) sortSelect.addEventListener('change', ()=> renderProducts())

// init
load(); renderCartCount();
