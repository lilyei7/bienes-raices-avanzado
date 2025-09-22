
// Seed data: ~20 propiedades con mezcla de venta y renta
const listings = [
  { id:1, title:'Casa moderna en Las Lomas', type:'house', price:320000, bedrooms:3, city:'Mar del Plata', neighborhood:'Las Lomas', img:'https://images.unsplash.com/photo-1560184897-6c4f6b1b2a3f?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, status:'venta', desc:'Casa moderna con jardín, pileta y parrilla. Zona tranquila.' },
  { id:2, title:'Departamento céntrico con balcón', type:'apartment', price:180000, bedrooms:2, city:'Buenos Aires', neighborhood:'Palermo', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'venta', desc:'Departamento luminoso, cerca de transporte y restaurantes.' },
  { id:3, title:'Casa de campo con jardín amplio', type:'house', price:450000, bedrooms:4, city:'Tandil', neighborhood:'Rural', img:'https://images.unsplash.com/photo-1505692794403-8502342b1f09?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, status:'venta', desc:'Quinta con hectáreas, ideal para proyectos de turismo.' },
  { id:4, title:'Departamento moderno en piso alto', type:'apartment', price:360000, bedrooms:3, city:'Buenos Aires', neighborhood:'Puerto Madero', img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'venta', desc:'Vistas al río, amenities y seguridad 24hs.' },
  { id:5, title:'Loft industrial reformado', type:'apartment', price:260000, bedrooms:1, city:'Córdoba', neighborhood:'Nueva Córdoba', img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'venta', desc:'Loft con estilo, techos altos y luz natural.' },
  { id:6, title:'Chalet clásico con pileta', type:'house', price:520000, bedrooms:5, city:'Mar del Plata', neighborhood:'Recoleta', img:'https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, status:'venta', desc:'Chalet con amplios ambientes, ideal para familia numerosa.' },
  { id:7, title:'Monoambiente funcional', type:'apartment', price:98000, bedrooms:1, city:'La Plata', neighborhood:'Centro', img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'renta', desc:'Monoambiente económico, ideal para estudiantes.' },
  { id:8, title:'Casa de diseño eco-sustentable', type:'house', price:420000, bedrooms:3, city:'Bariloche', neighborhood:'Lago', img:'https://images.unsplash.com/photo-1542317854-8b7b5f4d2c24?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, status:'venta', desc:'Casa con paneles solares y materiales sostenibles.' },
  { id:9, title:'Departamento estudio cerca UBA', type:'apartment', price:75000, bedrooms:1, city:'Buenos Aires', neighborhood:'Caballito', img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'renta', desc:'Ideal para estudiantes o parejas jóvenes.' },
  { id:10, title:'Casa con vista al lago', type:'house', price:680000, bedrooms:4, city:'Bariloche', neighborhood:'Costa', img:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, status:'venta', desc:'Propiedad premium con muelle y jardín privado.' },
  { id:11, title:'PH luminoso con patio', type:'apartment', price:210000, bedrooms:2, city:'Córdoba', neighborhood:'General Paz', img:'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'venta', desc:'PH en planta baja con patio y parrilla.' },
  { id:12, title:'Casa minimalista en barrio privado', type:'house', price:590000, bedrooms:3, city:'Tigre', neighborhood:'Bº Privado', img:'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, status:'venta', desc:'Seguridad, parque y amenities.' },
  { id:13, title:'Departamento con amenities', type:'apartment', price:280000, bedrooms:2, city:'Buenos Aires', neighborhood:'Belgrano', img:'https://images.unsplash.com/photo-1576675784899-4a8f23b6c9c1?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'venta', desc:'Pileta, gym y laundry en el edificio.' },
  { id:14, title:'Casa antigua reciclada', type:'house', price:320000, bedrooms:4, city:'La Plata', neighborhood:'North', img:'https://images.unsplash.com/photo-1505691723518-36a0b4a1b3c9?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'venta', desc:'Estilo clásico con detalles originales restaurados.' },
  { id:15, title:'Departamento frente al parque', type:'apartment', price:150000, bedrooms:1, city:'Mar del Plata', neighborhood:'Centro', img:'https://images.unsplash.com/photo-1542317854-8b7b5f4d2c24?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'renta', desc:'Departamento con vista y balcón.' },
  { id:16, title:'Casa en zona comercial', type:'house', price:240000, bedrooms:2, city:'Córdoba', neighborhood:'Nueva Córdoba', img:'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'renta', desc:'Ideal para vivienda familiar o local mixto.' },
  { id:17, title:'Duplex moderno', type:'apartment', price:330000, bedrooms:3, city:'Buenos Aires', neighborhood:'Recoleta', img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:true, status:'venta', desc:'Espacios amplios y moderna distribución.' },
  { id:18, title:'Casa con galpón', type:'house', price:200000, bedrooms:2, city:'Tandil', neighborhood:'Industrial', img:'https://images.unsplash.com/photo-1560184897-6c4f6b1b2a3f?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'venta', desc:'Propiedad con espacio para taller o emprendimiento.' },
  { id:19, title:'Estudio boutique', type:'apartment', price:110000, bedrooms:1, city:'Buenos Aires', neighborhood:'Villa Crespo', img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'renta', desc:'Estudio con diseño y ubicación estratégica.' },
  { id:20, title:'Casa con patio y parrilla', type:'house', price:270000, bedrooms:3, city:'La Plata', neighborhood:'Altos del Golf', img:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop&crop=entropy', featured:false, status:'venta', desc:'Cómoda casa con patio ideal para familia.' }
]

const PAGE_SIZE = 6
// read config (APP injected by config.js)
const WSP = (window.APP && window.APP.WSP) ? window.APP.WSP : '5491123456789'
const IMG_PATH = (window.APP && window.APP.IMG_PATH) ? window.APP.IMG_PATH : 'imagenes/'

// local image pool (file names exist in /site/imagenes)
const IMAGE_POOL = [
  '174d1417ce018efb99ee1f4fb4e1a8b1.jpg','24b942832926db41e91b9c303db3c43f.jpg','2999188c2dbd1cc90bbf2dc3ad3e3e92.jpg',
  '4b78c584374d3d8a9a8266f48b3e285e.jpg','4e897ac48b41e1d9a3cb7adb5238346f.jpg','51d42015f4542675fcd6265e313ce9c1.jpg',
  '66652d9fd21971b635e847c1d0dbe6dd.jpg','6a7b24f3ea3e5f1fb38bf02542629c82.jpg','8bb3b99351f1356c6c6ce306db3cbdcd.jpg',
  '8cdc53881a30c9cacdb455dd4ef8647c.jpg','8e05af9818391ba5c503abc7b00579b1.jpg','a121f3d28b9d2416c3c2cb752ba44066.jpg',
  'c02994ebe7ce6d4c7aa402aa5723ecfe.jpg','e74eccf57147d006423ed848ce59e7ec.jpg','Fitzroy-by-Christine-Rose-Design-and-Studio-Liu-The-Local-Project-Image-1-768x1024.jpg',
  'Gemini_Generated_Image_1kwvun1kwvun1kwv.png','Gemini_Generated_Image_4gjmta4gjmta4gjm.png','Gemini_Generated_Image_9m856f9m856f9m85.png',
  'Gemini_Generated_Image_amikegamikegamik.png','Gemini_Generated_Image_bcd6ybcd6ybcd6yb.png','Gemini_Generated_Image_cejx43cejx43cejx.png',
  'Gemini_Generated_Image_jsf63mjsf63mjsf6.png','Gemini_Generated_Image_q2aewbq2aewbq2ae.png','Gemini_Generated_Image_quaqc8quaqc8quaq.png',
  'Gemini_Generated_Image_zazarhzazarhzaza.png','Gemini_Generated_Image_zdpb5tzdpb5tzdpb.png','Gemini_Generated_Image_zfhrjxzfhrjxzfhr.png',
  'Snake-River-Cabin-by-McLean-Quinlan-The-Local-Project-Image-1-2048x1303.jpg'
]

function pickImage(seed){
  // deterministic-ish pick by id to avoid shuffle each render
  const idx = seed % IMAGE_POOL.length
  return IMG_PATH + IMAGE_POOL[idx]
}
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

  // remove loaded class to prepare entrance animation
  const gridEl = document.querySelector('.grid')
  gridEl.classList.remove('loaded')

  items.forEach(p => {
    const div = document.createElement('article')
    div.className = 'card'
    const imgSrc = p.img && p.img.startsWith('http') ? p.img : pickImage(p.id)
    div.innerHTML = `
      <img src="${imgSrc}" alt="${p.title}" loading="lazy" />
      <div style="padding:8px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h4>${p.title}</h4>
          ${p.featured?'<span class="badge">Destacado</span>':''}
        </div>
        <div class="meta"><span class="type">${p.city} — ${p.neighborhood}</span><span class="price">$${p.price.toLocaleString()}</span></div>
        <p style="margin:8px 0;color:var(--muted)">${p.bedrooms} hab · ${p.type} · <strong style="text-transform:capitalize">${p.status}</strong></p>
        <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:8px">
          <button data-id="${p.id}" class="btn-view">Ver</button>
          <a class="btn-wsp" href="https://wa.me/${WSP}?text=${encodeURIComponent('Hola Jhaycor, estoy interesado en la propiedad ID '+p.id+' - '+p.title)}" target="_blank">WhatsApp</a>
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

  // trigger entrance animation for cards
  requestAnimationFrame(()=>{
    setTimeout(()=> gridEl.classList.add('loaded'), 40)
  })
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
      <div style="display:flex;gap:20px;flex-wrap:wrap">
        <img src="${p.img && p.img.startsWith('http')?p.img:pickImage(p.id)}" style="width:420px;height:320px;object-fit:cover" loading="lazy" />
        <div style="padding:18px;flex:1;min-width:260px">
          <h3>${p.title}</h3>
          <p style="color:var(--muted)">${p.city} — ${p.neighborhood} · ${p.bedrooms} hab</p>
          <p style="margin-top:12px">${p.desc}</p>
          <p style="margin-top:12px;font-weight:700;color:var(--accent)">$${p.price.toLocaleString()}</p>
          <div style="margin-top:14px;display:flex;gap:8px;justify-content:flex-end">
            <a id="contact-wsp" class="btn" href="https://wa.me/${WSP}?text=${encodeURIComponent('Estoy interesado en la propiedad ID '+p.id+' - '+p.title)}" target="_blank">Contactar por WhatsApp</a>
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
  // build a WhatsApp message from the form and open chat
  const fd = new FormData(e.target)
  const name = fd.get('name') || ''
  const email = fd.get('email') || ''
  const message = fd.get('message') || ''
  const text = `Hola Jhaycor, soy ${name}. Mi correo es ${email}. ${message}`
  const url = `https://wa.me/${WSP}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
  e.target.reset()
})

document.getElementById('year').textContent = new Date().getFullYear()

applyAll()

