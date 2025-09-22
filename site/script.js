const listings = [
  { id:1, title:'Casa moderna en las afueras', type:'house', price:320000, img:'https://images.unsplash.com/photo-1560184897-6c4f6b1b2a3f?q=80&w=1200&auto=format&fit=crop&crop=entropy' },
  { id:2, title:'Departamento céntrico con balcón', type:'apartment', price:180000, img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&crop=entropy' },
  { id:3, title:'Casa de campo con jardín amplio', type:'house', price:450000, img:'https://images.unsplash.com/photo-1505692794403-8502342b1f09?q=80&w=1200&auto=format&fit=crop&crop=entropy' },
  { id:4, title:'Departamento moderno en piso alto', type:'apartment', price:360000, img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop&crop=entropy' }
]

const listEl = document.getElementById('listings')
const filterType = document.getElementById('filter-type')
const filterPrice = document.getElementById('filter-price')

function render(items){
  listEl.innerHTML = ''
  items.forEach(p => {
    const div = document.createElement('div')
    div.className = 'card'
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <h4>${p.title}</h4>
      <div class="meta"><span class="type">${p.type}</span><span class="price">$${p.price.toLocaleString()}</span></div>
    `
    listEl.appendChild(div)
  })
}

function applyFilters(){
  const t = filterType.value
  const p = filterPrice.value
  let out = listings.slice()
  if(t !== 'all') out = out.filter(x => x.type === t)
  if(p !== 'any') out = out.filter(x => x.price <= Number(p))
  render(out)
}

filterType.addEventListener('change', applyFilters)
filterPrice.addEventListener('change', applyFilters)

document.getElementById('contact-form').addEventListener('submit', e=>{
  e.preventDefault()
  alert('Gracias — formulario de ejemplo. Conecta un servicio real para recibir mensajes.')
  e.target.reset()
})

document.getElementById('year').textContent = new Date().getFullYear()

render(listings)
