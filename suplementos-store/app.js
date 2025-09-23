const products = JSON.parse(document.getElementById('products-json').textContent)
const productsEl = document.getElementById('products')
const cartBtn = document.getElementById('cart-btn')
const cartModal = document.getElementById('cart-modal')
const cartCount = document.getElementById('cart-count')
const cartItemsEl = document.getElementById('cart-items')
const cartTotalEl = document.getElementById('cart-total')

let cart = JSON.parse(localStorage.getItem('suplementos_cart')||'[]')

function formatMoney(n){return n.toLocaleString()}

function saveCart(){localStorage.setItem('suplementos_cart', JSON.stringify(cart)); renderCartCount();}
function renderProducts(){productsEl.innerHTML=''
  products.forEach(p=>{
    const d=document.createElement('div');d.className='card'
    d.innerHTML=`<img src="${p.img}" alt="${p.title}"><h4>${p.title}</h4><p>${p.desc}</p><div class="price">$${formatMoney(p.price)}</div><div class="actions"><button class="btn btn-ghost add" data-id="${p.id}">Agregar</button><button class="btn btn-primary view" data-id="${p.id}">Ver</button></div>`
    productsEl.appendChild(d)
  })
  document.querySelectorAll('.add').forEach(b=>b.addEventListener('click',e=>{
    const id=Number(e.target.dataset.id); addToCart(id)
  }))
  document.querySelectorAll('.view').forEach(b=>b.addEventListener('click',e=>{
    const id=Number(e.target.dataset.id); openProduct(id)
  }))
}

function addToCart(id){
  const p=products.find(x=>x.id===id)
  const item=cart.find(x=>x.id===id)
  if(item) item.qty++
  else cart.push({id:p.id,title:p.title,price:p.price,img:p.img,qty:1})
  saveCart()
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

function openProduct(id){const p=products.find(x=>x.id===id);alert(`${p.title}\n\n${p.desc}\n\nPrecio: $${formatMoney(p.price)}`)}

cartBtn.addEventListener('click',()=>{cartModal.setAttribute('aria-hidden','false');renderCart()})
document.getElementById('close-cart').addEventListener('click',()=>cartModal.setAttribute('aria-hidden','true'))

document.getElementById('checkout').addEventListener('click',()=>{if(cart.length===0)return alert('Carrito vacío');alert('Pago simulado — Gracias por tu compra');cart=[];saveCart();renderCart();cartModal.setAttribute('aria-hidden','true')})

renderProducts(); renderCartCount();
