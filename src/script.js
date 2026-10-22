const root = document.documentElement;
const themeColorMeta = document.getElementById('themeColor');
const THEME_COLORS = { light: '#F6F5F0', dark: '#0B0C0E' };

// Set Dynamic Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- 1. Theme Controller ---------- */
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', THEME_COLORS[theme]);
  }
}
applyTheme(root.getAttribute('data-theme') || 'dark');

const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('hrs_theme', next); } catch (e) {}
  });
}

/* ---------- 2. Hero Interactive API Playground ---------- */
const endpoints = {
  profile: {
    latency: '11ms',
    payload: {
      status: 200,
      developer: "Hasan Rizki Sulaiman",
      education: "Mahasiswa Sistem Informasi",
      role: "Backend & Data Enthusiast",
      focus: ["Web App Architecture", "RESTful API", "Data Cleaning"],
      mindset: "Keep learning, write clean code"
    }
  },
  stack: {
    latency: '14ms',
    payload: {
      status: 200,
      backend: ["PHP 8.x", "Laravel", "Go (Golang)", "Gin Framework"],
      database: ["MySQL", "SQLite", "Relational Design"],
      data_processing: ["Python", "Pandas", "SQL"],
      tools: ["Postman", "Git", "Linux / Terminal", "MS Office"]
    }
  },
  status: {
    latency: '8ms',
    payload: {
      status: 201,
      available_for: ["Internship", "Junior Backend Role", "Project Collaboration"],
      contact: "hasanrizzky20@gmail.com",
      response_time: "Fast & Collaborative"
    }
  }
};

const jsonOutput = document.getElementById('jsonOutput');
const pingTime = document.getElementById('pingTime');
const apiTabs = document.querySelectorAll('.api-tab');

function formatJSON(obj) {
  const json = typeof obj === 'string' ? obj : JSON.stringify(obj, null, 2);
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    let cls = 'text-accent font-semibold';
    if (/^"/.test(match)) {
      cls = /:$/.test(match) ? 'text-muted' : 'text-emerald';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

function renderEndpoint(key) {
  const data = endpoints[key];
  if (!data || !jsonOutput || !pingTime) return;
  pingTime.textContent = data.latency;
  jsonOutput.innerHTML = formatJSON(data.payload);
}

apiTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    apiTabs.forEach(t => {
      t.classList.remove('border-accent', 'bg-accent/10', 'text-fg', 'font-semibold');
      t.classList.add('border-transparent', 'bg-surface', 'text-muted');
    });
    tab.classList.remove('border-transparent', 'bg-surface', 'text-muted');
    tab.classList.add('border-accent', 'bg-accent/10', 'text-fg', 'font-semibold');
    renderEndpoint(tab.getAttribute('data-endpoint'));
  });
});

renderEndpoint('profile');

/* ---------- 3. Project Architecture & Schema Data ---------- */
const PROJECT_SPECS = {
  gudangku: {
    code: 'SYS-01',
    subtitle: 'Web Application · Inventory Management',
    title: 'Gudangku — Inventory System',
    summary: 'Arsitektur MVC Laravel dengan relasi tabel terintegrasi untuk pelacakan stok barang, mutasi masuk/keluar, dan manajemen pemasok.',
    stack: ['PHP 8.x', 'Laravel', 'Eloquent ORM', 'MySQL', 'Blade'],
    dbEngine: 'Database Engine: MySQL 8.0 (InnoDB · Relational)',
    payloadTitle: 'Sample Stock Mutation Transaction (JSON Log)',
    endpoints: [
      { method: 'GET',    path: '/items',                desc: 'Menampilkan katalog barang beserta stok terkini & filter kategori', auth: 'Auth Middleware' },
      { method: 'POST',   path: '/items',                desc: 'Menyimpan entitas barang baru dengan validasi SKU unik',          auth: 'FormRequest' },
      { method: 'POST',   path: '/transactions/in',      desc: 'Mencatat barang masuk dari supplier & otomatis menambah stok',    auth: 'DB::transaction' },
      { method: 'POST',   path: '/transactions/out',     desc: 'Mencatat pengeluaran barang dengan pengecekan batas stok minimum', auth: 'DB::transaction' },
      { method: 'GET',    path: '/suppliers',            desc: 'Mengelola direktori mitra pemasok dan riwayat pengiriman',        auth: 'Auth Middleware' },
      { method: 'GET',    path: '/reports/stock-opname', desc: 'Rekapitulasi mutasi bulanan dan indikator stok menipis',           auth: 'Admin Role' }
    ],
    tables: [
      {
        name: 'items',
        columns: [
          { name: 'id',          type: 'BIGINT UNSIGNED', badge: 'PK' },
          { name: 'category_id', type: 'BIGINT UNSIGNED', badge: 'FK' },
          { name: 'sku',         type: 'VARCHAR(32)',     badge: 'UNIQUE' },
          { name: 'name',        type: 'VARCHAR(150)',    badge: 'NOT NULL' },
          { name: 'stock_qty',   type: 'INT DEFAULT 0',   badge: 'INDEX' },
          { name: 'min_stock',   type: 'INT DEFAULT 5',   badge: '' },
          { name: 'updated_at',  type: 'TIMESTAMP',       badge: '' }
        ]
      },
      {
        name: 'stock_movements',
        columns: [
          { name: 'id',             type: 'BIGINT UNSIGNED', badge: 'PK' },
          { name: 'item_id',        type: 'BIGINT UNSIGNED', badge: 'FK' },
          { name: 'supplier_id',    type: 'BIGINT NULL',     badge: 'FK' },
          { name: 'movement_type',  type: "ENUM('IN','OUT')",badge: 'INDEX' },
          { name: 'quantity',       type: 'INT UNSIGNED',    badge: 'NOT NULL' },
          { name: 'reference_note', type: 'VARCHAR(255)',    badge: '' },
          { name: 'created_at',     type: 'TIMESTAMP',       badge: '' }
        ]
      },
      {
        name: 'suppliers',
        columns: [
          { name: 'id',           type: 'BIGINT UNSIGNED', badge: 'PK' },
          { name: 'company_name', type: 'VARCHAR(120)',    badge: 'NOT NULL' },
          { name: 'contact_phone',type: 'VARCHAR(25)',     badge: '' },
          { name: 'address',      type: 'TEXT',            badge: '' }
        ]
      },
      {
        name: 'categories',
        columns: [
          { name: 'id',   type: 'BIGINT UNSIGNED', badge: 'PK' },
          { name: 'name', type: 'VARCHAR(80)',     badge: 'UNIQUE' },
          { name: 'slug', type: 'VARCHAR(80)',     badge: 'INDEX' }
        ]
      }
    ],
    payload: {
      transaction_id: "TRX-2026-0891",
      movement_type: "IN",
      item: {
        sku: "ELC-RTR-04",
        name: "MikroTik RouterBOARD RB750Gr3",
        previous_stock: 14,
        added_qty: 20,
        current_stock: 34
      },
      supplier: "PT Nusantara Jaringan Mandiri",
      timestamp: "2026-07-15T09:30:00Z"
    }
  },

  bookapi: {
    code: 'SYS-02',
    subtitle: 'RESTful Service · Golang & Gin',
    title: 'Book Management API',
    summary: 'Layanan backend ringan berkinerja tinggi menggunakan Go dan framework Gin, dilengkapi binding JSON ketat dan persistensi SQLite.',
    stack: ['Go (Golang)', 'Gin Web Framework', 'SQLite3', 'REST API'],
    dbEngine: 'Database Engine: SQLite3 (Embedded Relational File)',
    payloadTitle: 'GET /api/v1/books/12 — HTTP 200 Response',
    endpoints: [
      { method: 'GET',    path: '/api/v1/books',     desc: 'Mengambil daftar buku dengan dukungan query ?author= dan ?page=', auth: 'Public' },
      { method: 'GET',    path: '/api/v1/books/:id', desc: 'Mengambil detail satu buku berdasarkan ID primer',               auth: 'Param Validation' },
      { method: 'POST',   path: '/api/v1/books',     desc: 'Menambahkan entitas buku baru via c.ShouldBindJSON(&book)',      auth: 'JSON Struct Tag' },
      { method: 'PUT',    path: '/api/v1/books/:id', desc: 'Memperbarui informasi stok, tahun terbit, atau judul buku',      auth: 'JSON Struct Tag' },
      { method: 'DELETE', path: '/api/v1/books/:id', desc: 'Menghapus data buku dari penyimpanan SQLite',                    auth: 'ID Check' }
    ],
    tables: [
      {
        name: 'books',
        columns: [
          { name: 'id',             type: 'INTEGER',      badge: 'PK AUTO' },
          { name: 'isbn',           type: 'TEXT',         badge: 'UNIQUE' },
          { name: 'title',          type: 'TEXT',         badge: 'NOT NULL' },
          { name: 'author_id',      type: 'INTEGER',      badge: 'FK' },
          { name: 'published_year', type: 'INTEGER',      badge: '' },
          { name: 'stock',          type: 'INTEGER',      badge: 'DEFAULT 1' },
          { name: 'created_at',     type: 'DATETIME',     badge: '' }
        ]
      },
      {
        name: 'authors',
        columns: [
          { name: 'id',   type: 'INTEGER', badge: 'PK AUTO' },
          { name: 'name', type: 'TEXT',    badge: 'NOT NULL' },
          { name: 'bio',  type: 'TEXT',    badge: '' }
        ]
      }
    ],
    payload: {
      code: 200,
      message: "Book retrieved successfully",
      data: {
        id: 12,
        isbn: "978-0134190440",
        title: "The Go Programming Language",
        author: "Alan A. A. Donovan & Brian W. Kernighan",
        published_year: 2015,
        stock: 7
      }
    }
  },

  pythondata: {
    code: 'SYS-03',
    subtitle: 'ETL & Analytics · Python Pandas',
    title: 'Python Data Processing Pipeline',
    summary: 'Rangkaian alur kerja pembersihan data (data cleaning), normalisasi tipe kolom, serta agregasi statistik menggunakan pustaka Pandas.',
    stack: ['Python 3.x', 'Pandas', 'NumPy', 'CSV / Excel ETL'],
    dbEngine: 'Data Engine: Pandas In-Memory DataFrame & SQL Export',
    payloadTitle: 'Consolidated Summary Output (JSON/Dict Representation)',
    endpoints: [
      { method: 'STEP 1', path: 'pd.read_csv("raw_dataset.csv")',     desc: 'Ingesti dataset mentah & deteksi encoding karakter',                auth: 'Ingestion' },
      { method: 'STEP 2', path: 'df.dropna() & df.drop_duplicates()', desc: 'Eliminasi baris duplikat dan imputasi nilai kosong (missing values)', auth: 'Sanitization' },
      { method: 'STEP 3', path: 'df.astype() & pd.to_datetime()',     desc: 'Normalisasi tipe data numerik dan standarisasi format tanggal ISO',  auth: 'Transformation' },
      { method: 'STEP 4', path: 'df.groupby("category").agg(...)',    desc: 'Agregasi metrik utama (mean, sum, count, dan distribusi frekuensi)', auth: 'Aggregation' },
      { method: 'STEP 5', path: 'df.to_excel() / df.to_sql()',        desc: 'Ekspor dataset bersih ke laporan siap pakai atau tabel SQL',         auth: 'Export' }
    ],
    tables: [
      {
        name: 'raw_records_df (Input)',
        columns: [
          { name: 'record_id',   type: 'object (dirty)',  badge: 'RAW' },
          { name: 'trans_date',  type: 'object (mixed)',  badge: 'NULLABLE' },
          { name: 'category',    type: 'object',          badge: 'UNTRIMMED' },
          { name: 'amount_idr',  type: 'float64 (NaN)',   badge: 'RAW' }
        ]
      },
      {
        name: 'cleaned_summary_df (Output)',
        columns: [
          { name: 'category_clean', type: 'category',       badge: 'INDEX' },
          { name: 'total_records',  type: 'int64',          badge: 'NOT NULL' },
          { name: 'mean_value',     type: 'float64',        badge: 'ROUND(2)' },
          { name: 'valid_ratio',    type: 'float64 (%)',    badge: 'VERIFIED' }
        ]
      }
    ],
    payload: {
      pipeline_run: "ETL-2026-04",
      rows_processed: 4520,
      duplicates_removed: 84,
      null_values_imputed: 31,
      summary_by_group: [
        { group: "Hardware Infrastructure", count: 1840, validity_rate: "99.4%" },
        { group: "Software Licensing", count: 1620, validity_rate: "100.0%" },
        { group: "Operational Supplies", count: 976, validity_rate: "98.9%" }
      ]
    }
  },

  laravelapi: {
    code: 'SYS-04',
    subtitle: 'Backend Service · Modular CRUD & Postman Tested',
    title: 'Laravel Modular REST API',
    summary: 'Arsitektur REST API terstandarisasi dengan pemisahan layer Controller, FormRequest Validation, dan Eloquent API Resources.',
    stack: ['PHP 8.x', 'Laravel', 'API Resource', 'Sanctum', 'Postman'],
    dbEngine: 'Database Engine: MySQL 8.0 · Tested via Postman Collection',
    payloadTitle: 'Standardized API Resource Response (200 OK)',
    endpoints: [
      { method: 'POST',   path: '/api/v1/auth/token',    desc: 'Autentikasi pengguna dan penerbitan Bearer Token (Sanctum)', auth: 'Public' },
      { method: 'GET',    path: '/api/v1/resources',     desc: 'Daftar resource dengan paginasi terformat via API Resource',  auth: 'Bearer Token' },
      { method: 'POST',   path: '/api/v1/resources',     desc: 'Pembuatan data baru dengan validasi StoreResourceRequest',   auth: 'Bearer Token' },
      { method: 'PATCH',  path: '/api/v1/resources/{id}',desc: 'Pembaruan sebagian atribut (partial update) secara aman',   auth: 'Bearer Token' },
      { method: 'DELETE', path: '/api/v1/resources/{id}',desc: 'Penghapusan data dengan respons JSON konsisten',             auth: 'Bearer Token' }
    ],
    tables: [
      {
        name: 'resources',
        columns: [
          { name: 'id',          type: 'BIGINT UNSIGNED', badge: 'PK' },
          { name: 'user_id',     type: 'BIGINT UNSIGNED', badge: 'FK' },
          { name: 'title',       type: 'VARCHAR(160)',    badge: 'NOT NULL' },
          { name: 'status',      type: 'VARCHAR(30)',     badge: 'INDEX' },
          { name: 'payload_meta',type: 'JSON NULL',       badge: '' },
          { name: 'created_at',  type: 'TIMESTAMP',       badge: '' }
        ]
      },
      {
        name: 'personal_access_tokens',
        columns: [
          { name: 'id',            type: 'BIGINT UNSIGNED', badge: 'PK' },
          { name: 'tokenable_id',  type: 'BIGINT UNSIGNED', badge: 'INDEX' },
          { name: 'name',          type: 'VARCHAR(100)',    badge: '' },
          { name: 'token',         type: 'VARCHAR(64)',     badge: 'UNIQUE' },
          { name: 'last_used_at',  type: 'TIMESTAMP NULL',  badge: '' }
        ]
      }
    ],
    payload: {
      success: true,
      status_code: 200,
      message: "Resources fetched successfully",
      data: [
        {
          id: 101,
          title: "Inventory Sync Worker",
          status: "active",
          owner: "Hasan Rizki"
        }
      ],
      meta: {
        current_page: 1,
        per_page: 15,
        total: 1
      }
    }
  }
};

/* ---------- 4. Modal Controller ---------- */
const projectModal = document.getElementById('projectModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalTabs = document.querySelectorAll('.modal-tab');
const modalPanes = {
  endpoints: document.getElementById('tab-endpoints'),
  schema:    document.getElementById('tab-schema'),
  payload:   document.getElementById('tab-payload')
};

function getMethodBadgeClass(method) {
  if (method === 'GET')    return 'bg-emerald/15 text-emerald border-emerald/30';
  if (method === 'POST')   return 'bg-cyan/15 text-cyan border-cyan/30';
  if (method === 'PUT' || method === 'PATCH') return 'bg-amber/15 text-amber border-amber/30';
  if (method === 'DELETE') return 'bg-rose/15 text-rose border-rose/30';
  return 'bg-accent/15 text-accent border-accent/30';
}

function switchModalTab(tabKey) {
  modalTabs.forEach(btn => {
    const active = btn.getAttribute('data-modal-tab') === tabKey;
    btn.classList.toggle('border-accent', active);
    btn.classList.toggle('bg-accent/10', active);
    btn.classList.toggle('text-fg', active);
    btn.classList.toggle('font-semibold', active);
    btn.classList.toggle('border-line', !active);
    btn.classList.toggle('bg-surface', !active);
    btn.classList.toggle('text-muted', !active);
  });

  Object.keys(modalPanes).forEach(k => {
    if (modalPanes[k]) {
      modalPanes[k].classList.toggle('hidden', k !== tabKey);
    }
  });
}

function openProjectModal(projectKey) {
  const spec = PROJECT_SPECS[projectKey];
  if (!spec || !projectModal) return;

  document.getElementById('modalCode').textContent = spec.code;
  document.getElementById('modalSubtitle').textContent = spec.subtitle;
  document.getElementById('modalTitle').textContent = spec.title;
  document.getElementById('modalSummary').textContent = spec.summary;
  document.getElementById('modalDbEngine').textContent = spec.dbEngine;
  document.getElementById('payloadLabel').textContent = spec.payloadTitle;

  // Render Stack Badges
  const stackContainer = document.getElementById('modalStack');
  stackContainer.innerHTML = spec.stack.map(item =>
    `<span class="rounded-md border border-line bg-surface px-2.5 py-1 text-fg">${item}</span>`
  ).join('');

  // Render Endpoints
  modalPanes.endpoints.innerHTML = spec.endpoints.map(ep => `
    <div class="flex flex-col justify-between gap-2 rounded-xl border border-line bg-bg/60 p-3.5 sm:flex-row sm:items-center">
      <div class="flex flex-wrap items-center gap-3">
        <span class="inline-block min-w-16 rounded border px-2 py-0.5 text-center font-mono text-[11px] font-bold ${getMethodBadgeClass(ep.method)}">
          ${ep.method}
        </span>
        <code class="font-mono text-xs font-semibold text-fg sm:text-sm">${ep.path}</code>
      </div>
      <div class="flex items-center justify-between gap-3 sm:justify-end">
        <span class="text-xs text-muted">${ep.desc}</span>
        <span class="shrink-0 rounded bg-elevated px-2 py-0.5 font-mono text-[10px] text-subtle">${ep.auth}</span>
      </div>
    </div>
  `).join('');

  // Render Database Schema Tables
  modalPanes.schema.innerHTML = spec.tables.map(tbl => `
    <div class="overflow-hidden rounded-xl border border-line bg-bg/60">
      <div class="flex items-center justify-between border-b border-line bg-elevated/60 px-4 py-2.5 font-mono text-xs">
        <span class="font-bold text-fg">▤ ${tbl.name}</span>
        <span class="text-[10px] text-muted">${tbl.columns.length} cols</span>
      </div>
      <div class="divide-y divide-line/60 p-3 font-mono text-xs">
        ${tbl.columns.map(col => `
          <div class="flex items-center justify-between py-1.5">
            <span class="font-medium text-fg">${col.name}</span>
            <div class="flex items-center gap-2">
              <span class="text-[11px] text-muted">${col.type}</span>${col.badge ? `<span class="rounded bg-accent/15 px-1.5 py-0.5 text-[10px] font-semibold text-accent">${col.badge}</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Render Sample Payload
  document.getElementById('modalPayloadCode').innerHTML = formatJSON(spec.payload);

  switchModalTab('endpoints');
  projectModal.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove('modal-open');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => openProjectModal(card.getAttribute('data-project')));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProjectModal(card.getAttribute('data-project'));
    }
  });
});

modalTabs.forEach(btn => {
  btn.addEventListener('click', () => switchModalTab(btn.getAttribute('data-modal-tab')));
});

if (closeModalBtn) closeModalBtn.addEventListener('click', closeProjectModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

/* ---------- 5. Copy Email Button ---------- */
const copyBtn = document.getElementById('copyEmailBtn');
const copyBtnText = document.getElementById('copyBtnText');

if (copyBtn && copyBtnText) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('hasanrizzky20@gmail.com');
      copyBtnText.textContent = 'Tersalin ✓';
      copyBtn.classList.add('border-emerald', 'text-emerald');
      setTimeout(() => {
        copyBtnText.textContent = 'Salin Email';
        copyBtn.classList.remove('border-emerald', 'text-emerald');
      }, 2200);
    } catch (err) {
      window.location.href = 'mailto:hasanrizzky20@gmail.com';
    }
  });
}

/* ---------- 6. Mobile Menu & Global Keybindings ---------- */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

function closeMobileMenu() {
  if (!mobileMenu || !menuBtn || !menuIcon) return;
  mobileMenu.classList.add('hidden');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuIcon.innerHTML = '<path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/>';
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      closeMobileMenu();
    } else {
      mobileMenu.classList.remove('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
      menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18"/>';
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeMobileMenu();
  }
});

/* ---------- 7. Scroll Reveal ---------- */
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('in'));
}