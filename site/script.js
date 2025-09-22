
// Seed data: varias propiedades para demostrar funcionalidades
const listings = [
  { id:1, title:'Casa moderna en Las Lomas', type:'house', price:320000, bedrooms:3, city:'Mar del Plata', neighborhood:'Las Lomas', img:'https://images.unsplash.com/photo-1560184897-6c4f6b1b2a3f?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, desc:'Casa moderna con jardín, pileta y parrilla. Zona tranquila.' },
  { id:2, title:'Departamento céntrico con balcón', type:'apartment', price:180000, bedrooms:2, city:'Buenos Aires', neighborhood:'Palermo', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, desc:'Departamento luminoso, cerca de transporte y restaurantes.' },
  { id:3, title:'Casa de campo con jardín amplio', type:'house', price:450000, bedrooms:4, city:'Tandil', neighborhood:'Rural', img:'https://images.unsplash.com/photo-1505692794403-8502342b1f09?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, desc:'Quinta con hectáreas, ideal para proyectos de turismo.' },
  { id:4, title:'Departamento moderno en piso alto', type:'apartment', price:360000, bedrooms:3, city:'Buenos Aires', neighborhood:'Puerto Madero', img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, desc:'Vistas al río, amenities y seguridad 24hs.' },
  { id:5, title:'Loft industrial reformado', type:'apartment', price:260000, bedrooms:1, city:'Córdoba', neighborhood:'Nueva Córdoba', img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, desc:'Loft con estilo, techos altos y luz natural.' },
  { id:6, title:'Chalet clásico con pileta', type:'house', price:520000, bedrooms:5, city:'Mar del Plata', neighborhood:'Recoleta', img:'https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, desc:'Chalet con amplios ambientes, ideal para familia numerosa.' },
  { id:7, title:'Monoambiente funcional', type:'apartment', price:98000, bedrooms:1, city:'La Plata', neighborhood:'Centro', img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, desc:'Monoambiente económico, ideal para estudiantes.' },
  { id:8, title:'Casa de diseño eco-sustentable', type:'house', price:420000, bedrooms:3, city:'Bariloche', neighborhood:'Lago', img:'https://images.unsplash.com/photo-1542317854-8b7b5f4d2c24?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, desc:'Casa con paneles solares y materiales sostenibles.' }
]

const PAGE_SIZE = 4
let state = {
  query: '',
  type: 'all',
  maxPrice: 'any',
  bedrooms: 'any',
  sort: 'featured',
  page: 1
}

const listEl = document.getElementById('listings')
const filterType = document.getElementById('filter-type')
const filterPrice = document.getElementById('filter-price')
const filterBedrooms = document.getElementById('filter-bedrooms')
const searchInput = document.getElementById('search-input')
const sortSelect = document.getElementById('sort-select')
const resultCount = document.getElementById('result-count')
const paginationEl = document.getElementById('pagination')

function matches(p, s){
  if(!s) return true
  s = s.toLowerCase()
  return [p.title, p.city, p.neighborhood, p.desc].join(' ').toLowerCase().includes(s)
}

function applyAll(){
  let out = listings.slice()
  // search
  if(state.query) out = out.filter(p => matches(p, state.query))
  // type
  if(state.type !== 'all') out = out.filter(p => p.type === state.type)
  // price
  if(state.maxPrice !== 'any') out = out.filter(p => p.price <= Number(state.maxPrice))
  // bedrooms
  if(state.bedrooms !== 'any') out = out.filter(p => p.bedrooms >= Number(state.bedrooms))
  // sort
  if(state.sort === 'price-asc') out.sort((a,b)=>a.price-b.price)
  else if(state.sort === 'price-desc') out.sort((a,b)=>b.price-a.price)
  else out.sort((a,b)=> (b.featured?1:0) - (a.featured?1:0))

  const total = out.length
  resultCount.textContent = total

  // pagination
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  if(state.page > pages) state.page = pages
  const start = (state.page-1)*PAGE_SIZE
  const pageItems = out.slice(start, start+PAGE_SIZE)

  render(pageItems)
  renderPagination(pages)
}

function render(items){
  listEl.innerHTML = ''
  if(items.length === 0){
    listEl.innerHTML = '<p class="hint">No se encontraron propiedades con esos filtros.</p>'
    return
  }
  items.forEach(p => {
    const div = document.createElement('article')
    div.className = 'card'
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <div style="padding:8px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h4>${p.title}</h4>
          ${p.featured?'<span class="badge">Destacado</span>':''}
        </div>
        <div class="meta"><span class="type">${p.city} — ${p.neighborhood}</span><span class="price">$${p.price.toLocaleString()}</span></div>
        <p style="margin:8px 0;color:var(--muted)">${p.bedrooms} hab · ${p.type}</p>
        <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px">
          <button data-id="${p.id}" class="btn-view">Ver</button>
        </div>
      </div>
    `
    listEl.appendChild(div)
  })

  // attach view handlers
  document.querySelectorAll('.btn-view').forEach(b=>b.addEventListener('click', e=>{
    const id = Number(e.target.dataset.id)
    openDetail(id)
  }))
}

function renderPagination(pages){
  paginationEl.innerHTML = ''
  if(pages <= 1) return
  for(let i=1;i<=pages;i++){
    const btn = document.createElement('button')
    btn.textContent = i
    if(i===state.page) btn.style.fontWeight='700'
    btn.addEventListener('click', ()=>{ state.page=i; applyAll() })
    paginationEl.appendChild(btn)
  }
}

function openDetail(id){
  const p = listings.find(x=>x.id===id)
  if(!p) return
  // show simple modal-like detail using location.hash
  location.hash = `property-${p.id}`
  // build detail in a simple overlay element
  let overlay = document.getElementById('detail-overlay')
  if(!overlay){
    overlay = document.createElement('div')
    overlay.id = 'detail-overlay'
    overlay.style.position='fixed'
    overlay.style.inset='0'
    overlay.style.background='rgba(10,10,12,0.6)'
    overlay.style.display='flex'
    overlay.style.alignItems='center'
    overlay.style.justifyContent='center'
    overlay.style.zIndex='9999'
    document.body.appendChild(overlay)
  }
  overlay.innerHTML = `
    <div style="max-width:900px;background:#fff;border-radius:12px;overflow:hidden">
      <div style="display:flex;gap:20px">
        <img src="${p.img}" style="width:420px;height:320px;object-fit:cover" />
        <div style="padding:18px;flex:1">
          <h3>${p.title}</h3>
          <p style="color:var(--muted)">${p.city} — ${p.neighborhood} · ${p.bedrooms} hab</p>
          <p style="margin-top:12px">${p.desc}</p>
          <p style="margin-top:12px;font-weight:700;color:var(--accent)">$${p.price.toLocaleString()}</p>
          <div style="margin-top:14px;display:flex;gap:8px;justify-content:flex-end">
            <button id="close-detail">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `
  document.getElementById('close-detail').addEventListener('click', ()=>{
    overlay.remove()
    history.pushState('', document.title, window.location.pathname + window.location.search)
  })
}

// event listeners
filterType.addEventListener('change', e=>{ state.type=e.target.value; state.page=1; applyAll() })
filterPrice.addEventListener('change', e=>{ state.maxPrice=e.target.value; state.page=1; applyAll() })
filterBedrooms.addEventListener('change', e=>{ state.bedrooms=e.target.value; state.page=1; applyAll() })
searchInput.addEventListener('input', e=>{ state.query=e.target.value; state.page=1; applyAll() })
sortSelect.addEventListener('change', e=>{ state.sort=e.target.value; state.page=1; applyAll() })

document.getElementById('contact-form').addEventListener('submit', e=>{
  e.preventDefault()
  alert('Gracias — formulario de ejemplo. Conecta un servicio real para recibir mensajes.')
  e.target.reset()
})

document.getElementById('year').textContent = new Date().getFullYear()

applyAll()

