const DB_NAME = 'journara-db';
const DB_VERSION = 1;
const SETTINGS_KEY = 'journara-settings';

const MOODS = [
  { emoji: '🥀', label: 'خیلی پایین', color: '#ff5d6e' },
  { emoji: '😕', label: 'کم‌جان و سنگین', color: '#ff7b63' },
  { emoji: '🙂', label: 'معمولی رو به پایین', color: '#ffc85c' },
  { emoji: '😊', label: 'خوب و متعادل', color: '#ffe56d' },
  { emoji: '😄', label: 'پرانرژی و خوب', color: '#79e66e' },
  { emoji: '🤩', label: 'عالی و درخشان', color: '#38d6a7' },
  { emoji: '🪄', label: 'جادویی و بنفش', color: '#c18cff' },
];

const THEME_ART = {
  'theme-bubbles': {
    brand: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 42c0-9 6-15 14-15s14 6 14 15v5H19v-5Z" fill="currentColor" opacity=".18"/><path d="M22 17h20a6 6 0 0 1 6 6v16c0 3.3-2.7 6-6 6H22a6 6 0 0 1-6-6V23a6 6 0 0 1 6-6Z" stroke="currentColor" stroke-width="3"/><path d="M24 24h16M24 31h12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="47" cy="19" r="5" fill="currentColor" opacity=".22"/><circle cx="16" cy="46" r="4" fill="currentColor" opacity=".16"/></svg>`,
  },
  'theme-aurora': {
    brand: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 47c6-16 13-24 20-24 5 0 9 3 10 8 6-4 10-3 12 1-2 9-10 14-24 14H17Z" fill="currentColor" opacity=".18"/><path d="M14 47c6-17 14-25 23-25 5 0 9 3 10 8 5-4 10-3 12 1-2 10-11 16-26 16H14Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M21 18l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5ZM46 12l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6 1.6-4Z" fill="currentColor"/></svg>`,
  },
  'theme-midnight': {
    brand: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="24" width="36" height="22" rx="6" stroke="currentColor" stroke-width="3"/><path d="M21 31h8M35 31h8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M24 24c2-6 5-9 8-9s6 3 8 9" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M26 46c0 3 3 5 6 5s6-2 6-5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  },
  'theme-candy': {
    brand: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 45c2-11 8-21 17-21 6 0 11 4 12 10 4 0 7 3 7 7 0 4-3 7-8 7H18Z" fill="currentColor" opacity=".14"/><path d="M20 45c2-11 8-21 17-21 6 0 11 4 12 10 4 0 7 3 7 7 0 4-3 7-8 7H20Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M26 25l7-10 6 9" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M47 16l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6 1.6-4ZM18 17l1.3 3.2 3.2 1.3-3.2 1.3-1.3 3.2-1.3-3.2-3.2-1.3 3.2-1.3 1.3-3.2Z" fill="currentColor"/></svg>`,
  }
};

const NAV_ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 11.5 12 5l8 6.5" stroke="currentColor"/><path d="M6.5 10.5V19h11v-8.5" stroke="currentColor"/><path d="M10 19v-5h4v5" stroke="currentColor"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 6h10M9 12h10M9 18h10" stroke="currentColor"/><circle cx="5" cy="6" r="1.5" fill="currentColor"/><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="5" cy="18" r="1.5" fill="currentColor"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 8.7a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6Z" stroke="currentColor"/><path d="M19 12a7 7 0 0 0-.08-1l2-1.56-2-3.46-2.46.8a7.6 7.6 0 0 0-1.72-1L14.3 3h-4.6L9.25 5.78a7.6 7.6 0 0 0-1.71 1l-2.46-.8-2 3.46 2 1.56a7.7 7.7 0 0 0 0 2l-2 1.56 2 3.46 2.46-.8a7.6 7.6 0 0 0 1.71 1L9.7 21h4.6l.45-2.78a7.6 7.6 0 0 0 1.72-1l2.46.8 2-3.46-2-1.56c.05-.33.08-.66.08-1Z" stroke="currentColor"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4.5" stroke="currentColor"/><path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" stroke="currentColor"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none"><path d="M18.5 14.5A7 7 0 0 1 9.5 5.5a8 8 0 1 0 9 9Z" stroke="currentColor"/></svg>`
};

const state = {
  db: null,
  currentPage: 'home',
  currentDate: toDateKey(new Date()),
  currentEntryId: null,
  editingEntryId: null,
  tempMedia: [],
  isAnimatingDate: false,
  settings: loadSettings(),
  confirmResolver: null,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const els = {
  appShell: $('#appShell'),
  brandMark: $('#brandMark'),
  contentScroller: $('#contentScroller'),
  pages: $$('.page'),
  tabs: $$('.tab'),
  topSafe: $('.top-safe'),
  heroDateWrap: $('#heroDateWrap'),
  dayFlipTrack: $('#dayFlipTrack'),
  heroWeekday: $('#heroWeekday'),
  heroDayNum: $('#heroDayNum'),
  heroMonth: $('#heroMonth'),
  openTodayJournalBtn: $('#openTodayJournalBtn'),
  moodSlider: $('#moodSlider'),
  moodEmoji: $('#moodEmoji'),
  moodLabel: $('#moodLabel'),
  batteryBars: $('#batteryBars'),
  todaySummaryText: $('#todaySummaryText'),
  journalList: $('#journalList'),
  toggleModeBtn: $('#toggleModeBtn'),
  themeSelect: $('#themeSelect'),
  exportZipBtn: $('#exportZipBtn'),
  importZipInput: $('#importZipInput'),
  exportPdfBtn: $('#exportPdfBtn'),
  resetAllBtn: $('#resetAllBtn'),
  newDatedEntryBtn: $('#newDatedEntryBtn'),
  readerBackBtn: $('#readerBackBtn'),
  readerMeta: $('#readerMeta'),
  readerCard: $('#readerCard'),
  entryMenuBtn: $('#entryMenuBtn'),
  entryMenu: $('#entryMenu'),
  editEntryBtn: $('#editEntryBtn'),
  deleteEntryBtn: $('#deleteEntryBtn'),
  editorModal: $('#editorModal'),
  editorTitleLabel: $('#editorTitleLabel'),
  editorDateLabel: $('#editorDateLabel'),
  entryTitle: $('#entryTitle'),
  entryBody: $('#entryBody'),
  editorMoodSlider: $('#editorMoodSlider'),
  editorMoodEmoji: $('#editorMoodEmoji'),
  editorMoodLabel: $('#editorMoodLabel'),
  editorBatteryBars: $('#editorBatteryBars'),
  mediaInput: $('#mediaInput'),
  mediaPreviewGrid: $('#mediaPreviewGrid'),
  saveEntryBtn: $('#saveEntryBtn'),
  template: $('#journalItemTemplate'),
  modeSun: $('.mode-sun'),
  modeMoon: $('.mode-moon'),
  confirmModal: $('#confirmModal'),
  confirmTitle: $('#confirmTitle'),
  confirmText: $('#confirmText'),
  confirmCancelBtn: $('#confirmCancelBtn'),
  confirmOkBtn: $('#confirmOkBtn'),
  customDateModal: $('#customDateModal'),
  customDateInput: $('#customDateInput'),
  customDateCancelBtn: $('#customDateCancelBtn'),
  customDateOkBtn: $('#customDateOkBtn')
};

init();

async function init() {
  hydrateStaticIcons();
  buildBatteryBars(els.batteryBars);
  buildBatteryBars(els.editorBatteryBars);
  applySettings();
  bindEvents();
  state.db = await openDB();
  await registerSW();
  await renderAll();
}

function bindEvents() {
  els.openTodayJournalBtn.addEventListener('click', openJournalForCurrentDate);

  els.moodSlider.addEventListener('input', async (e) => {
    const value = Number(e.target.value);
    updateMoodUI('home', value);
    await upsertDayMood(state.currentDate, value);
    await renderTodaySummary();
    await renderJournalList();
  });

  els.editorMoodSlider.addEventListener('input', (e) => updateMoodUI('editor', Number(e.target.value)));

  els.themeSelect.addEventListener('change', () => {
    state.settings.theme = els.themeSelect.value;
    persistSettings();
    applySettings();
  });

  els.toggleModeBtn.addEventListener('click', () => {
    state.settings.mode = state.settings.mode === 'dark' ? 'light' : 'dark';
    persistSettings();
    applySettings();
  });

  els.exportZipBtn.addEventListener('click', exportZipBackup);
  els.importZipInput.addEventListener('change', importZipBackup);
  els.exportPdfBtn.addEventListener('click', exportPdfBook);
  els.resetAllBtn.addEventListener('click', resetAllData);
  els.newDatedEntryBtn?.addEventListener('click', showCustomDatePicker);

  els.readerBackBtn.addEventListener('click', () => showPage('list'));
  els.entryMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    els.entryMenu.classList.toggle('hidden');
  });
  els.editEntryBtn.addEventListener('click', async () => {
    els.entryMenu.classList.add('hidden');
    const entry = await getEntry(state.currentEntryId);
    if (entry) openEditor(entry);
  });
  els.deleteEntryBtn.addEventListener('click', async () => {
    els.entryMenu.classList.add('hidden');
    await deleteCurrentEntry();
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-wrap')) els.entryMenu.classList.add('hidden');
  });

  els.mediaInput.addEventListener('change', async (e) => {
    const files = [...(e.target.files || [])];
    if (!files.length) return;
    showToast('در حال آماده‌سازی رسانه‌ها...');
    const incoming = [];
    for (const file of files) incoming.push(await fileToDraftMedia(file));
    state.tempMedia.push(...incoming);
    renderEditorMedia();
    els.mediaInput.value = '';
  });

  els.saveEntryBtn.addEventListener('click', saveEntryFromEditor);
  els.tabs.forEach(tab => tab.addEventListener('click', () => showPage(tab.dataset.target)));
  els.confirmCancelBtn.addEventListener('click', () => resolveConfirm(false));
  els.confirmOkBtn.addEventListener('click', () => resolveConfirm(true));
  els.confirmModal?.addEventListener('cancel', (e) => { e.preventDefault(); resolveConfirm(false); });
  els.customDateCancelBtn?.addEventListener('click', () => els.customDateModal?.close());
  els.customDateOkBtn?.addEventListener('click', submitCustomDate);
  els.customDateModal?.addEventListener('cancel', (e) => { e.preventDefault(); els.customDateModal.close(); });
  wireDateSwipe();
}

function hydrateStaticIcons() {
  $$('[data-icon]').forEach(node => {
    node.innerHTML = NAV_ICONS[node.dataset.icon] || '';
  });
  els.modeSun.innerHTML = NAV_ICONS.sun;
  els.modeMoon.innerHTML = NAV_ICONS.moon;
}

function buildBatteryBars(container) {
  container.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const bar = document.createElement('div');
    bar.className = 'bar';
    container.appendChild(bar);
  }
}

function wireDateSwipe() {
  let startX = 0;
  let startY = 0;
  let dragging = false;

  els.heroDateWrap.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) changeDay(e.deltaY > 0 ? 1 : -1);
  }, { passive: false });

  els.heroDateWrap.addEventListener('touchstart', (e) => {
    dragging = true;
    startX = e.changedTouches[0].clientX;
    startY = e.changedTouches[0].clientY;
  }, { passive: true });

  els.heroDateWrap.addEventListener('touchend', (e) => {
    if (!dragging) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const dx = endX - startX;
    const dy = endY - startY;
    if (Math.abs(dy) > 28 && Math.abs(dy) > Math.abs(dx)) changeDay(dy < 0 ? 1 : -1);
    dragging = false;
  }, { passive: true });

  els.heroDateWrap.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') changeDay(-1);
    if (e.key === 'ArrowDown') changeDay(1);
  });
}

async function renderAll() {
  renderDateHero();
  await renderHomeMood();
  await renderTodaySummary();
  await renderJournalList();
  showPage(state.currentPage);
}

function showPage(name) {
  state.currentPage = name;
  els.pages.forEach(page => {
    const active = page.dataset.page === name;
    page.classList.toggle('active', active);
    page.hidden = !active;
    if (!active) page.setAttribute('inert', ''); else page.removeAttribute('inert');
  });
  els.tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.target === name));
  els.contentScroller.classList.toggle('home-locked', name === 'home');
  if (name !== 'home') els.contentScroller.scrollTop = 0;
  els.entryMenu.classList.add('hidden');
}

function renderDateHero() {
  const d = parseDateKey(state.currentDate);
  els.heroWeekday.textContent = new Intl.DateTimeFormat('fa-IR', { weekday: 'long' }).format(d);
  els.heroDayNum.textContent = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(d);
  els.heroMonth.textContent = new Intl.DateTimeFormat('fa-IR', { month: 'long', year: 'numeric' }).format(d);
}

async function animateDateHero(direction) {
  if (state.isAnimatingDate) return;
  state.isAnimatingDate = true;
  const currentFace = els.dayFlipTrack.querySelector('.day-face.active');
  const nextFace = currentFace.cloneNode(true);
  nextFace.classList.remove('active');
  nextFace.classList.add(direction > 0 ? 'enter-next' : 'enter-prev');
  els.dayFlipTrack.appendChild(nextFace);
  renderDateHeroToNode(nextFace, state.currentDate);
  requestAnimationFrame(() => {
    currentFace.classList.add(direction > 0 ? 'slide-next' : 'slide-prev');
    nextFace.classList.add('active');
  });
  await new Promise(resolve => setTimeout(resolve, 330));
  currentFace.remove();
  nextFace.classList.remove('enter-next', 'enter-prev');
  nextFace.id = 'heroFace';
  state.isAnimatingDate = false;
}

function renderDateHeroToNode(node, dateKey) {
  const d = parseDateKey(dateKey);
  node.querySelector('.hero-weekday').textContent = new Intl.DateTimeFormat('fa-IR', { weekday: 'long' }).format(d);
  node.querySelector('.hero-daynum').textContent = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(d);
  node.querySelector('.hero-month').textContent = new Intl.DateTimeFormat('fa-IR', { month: 'long', year: 'numeric' }).format(d);
}

async function renderHomeMood() {
  const entry = await getEntryByDate(state.currentDate);
  const moodIndex = entry?.mood ?? 3;
  els.moodSlider.value = String(moodIndex);
  updateMoodUI('home', moodIndex);
}

async function renderTodaySummary() {
  const entry = await getEntryByDate(state.currentDate);
  if (!entry) {
    els.todaySummaryText.textContent = 'هنوز چیزی برای این روز ثبت نشده.';
    return;
  }
  const mediaCount = (entry.media || []).length;
  els.todaySummaryText.textContent = [
    entry.title || 'بدون عنوان',
    entry.body ? trimText(entry.body, 72) : 'متن کوتاه یا خالی',
    `${MOODS[entry.mood ?? 3].emoji} ${MOODS[entry.mood ?? 3].label}`,
    mediaCount ? `${mediaCount} رسانه` : 'بدون رسانه'
  ].join(' • ');
}

async function renderJournalList() {
  const entries = await getAllEntries();
  els.journalList.innerHTML = '';
  if (!entries.length) {
    els.journalList.innerHTML = `<div class="panel glass">هنوز هیچ ژورنالی ثبت نشده.</div>`;
    return;
  }
  entries.sort((a, b) => b.dateKey.localeCompare(a.dateKey));
  for (const entry of entries) {
    const node = els.template.content.firstElementChild.cloneNode(true);
    node.querySelector('.journal-item-date').textContent = formatFullDate(entry.dateKey);
    node.querySelector('.journal-item-mood').textContent = `${MOODS[entry.mood ?? 3].emoji} ${MOODS[entry.mood ?? 3].label}`;
    node.querySelector('.journal-item-title').textContent = entry.title || 'بدون عنوان';
    node.querySelector('.journal-item-sub').textContent = `${trimText(entry.body || 'متن خالی', 84)} • ${(entry.media || []).length} رسانه`;
    node.addEventListener('click', () => openReader(entry.id));
    els.journalList.appendChild(node);
  }
}

async function openJournalForCurrentDate() {
  const existing = await getEntryByDate(state.currentDate);
  if (existing) return openReader(existing.id);
  openEditor({ dateKey: state.currentDate, mood: Number(els.moodSlider.value), media: [] });
}

function openEditor(entry) {
  state.editingEntryId = entry.id || null;
  state.tempMedia = (entry.media || []).map(item => ({ ...item }));
  els.editorTitleLabel.textContent = state.editingEntryId ? 'ویرایش ژورنال' : 'ژورنال جدید';
  els.editorDateLabel.textContent = formatFullDate(entry.dateKey || state.currentDate);
  els.entryTitle.value = entry.title || '';
  els.entryBody.value = entry.body || '';
  els.editorMoodSlider.value = String(entry.mood ?? 3);
  updateMoodUI('editor', entry.mood ?? 3);
  renderEditorMedia();
  els.editorModal.showModal?.();
}

function renderEditorMedia() {
  els.mediaPreviewGrid.innerHTML = '';
  state.tempMedia.forEach((media, index) => {
    const chip = document.createElement('div');
    chip.className = 'media-chip';
    chip.style.position = 'relative';
    const removeBtn = document.createElement('button');
    removeBtn.className = 'media-remove';
    removeBtn.textContent = '×';
    removeBtn.type = 'button';
    Object.assign(removeBtn.style, {
      position: 'absolute', top: '8px', left: '8px', width: '32px', height: '32px', borderRadius: '50%',
      background: 'rgba(16,18,30,.72)', color: '#fff', zIndex: 2
    });
    removeBtn.addEventListener('click', () => {
      state.tempMedia.splice(index, 1);
      renderEditorMedia();
    });
    if (media.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = media.dataUrl || media.url;
      img.alt = media.name || 'image';
      chip.appendChild(img);
    } else {
      const vid = document.createElement('video');
      vid.src = media.dataUrl || media.url;
      vid.muted = true;
      vid.playsInline = true;
      chip.appendChild(vid);
    }
    chip.appendChild(removeBtn);
    els.mediaPreviewGrid.appendChild(chip);
  });
}

async function saveEntryFromEditor() {
  const existing = state.editingEntryId ? await getEntry(state.editingEntryId) : null;
  const payload = {
    id: state.editingEntryId || crypto.randomUUID(),
    dateKey: existing?.dateKey || state.currentDate,
    title: els.entryTitle.value.trim(),
    body: els.entryBody.value.trim(),
    mood: Number(els.editorMoodSlider.value),
    media: state.tempMedia.map(m => ({ ...m })),
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  await putEntry(payload);
  state.currentEntryId = payload.id;
  state.currentDate = payload.dateKey;
  els.editorModal.close();
  state.editingEntryId = null;
  state.tempMedia = [];
  await renderAll();
  showToast('ژورنال ذخیره شد.');
  await openReader(payload.id);
}

async function openReader(id) {
  const entry = await getEntry(id);
  if (!entry) return;
  state.currentEntryId = id;
  state.currentDate = entry.dateKey;
  const timeLabel = new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit' }).format(new Date(entry.updatedAt));
  els.readerMeta.textContent = `${formatFullDate(entry.dateKey)} • ${MOODS[entry.mood ?? 3].emoji} • ${timeLabel}`;
  els.readerCard.innerHTML = `<h2 class="reader-title">${escapeHtml(entry.title || 'بدون عنوان')}</h2><p>ثبت یا ویرایش: ${escapeHtml(new Date(entry.updatedAt).toLocaleString('fa-IR'))}</p><p>${escapeHtml(entry.body || 'متنی ثبت نشده.')}</p><div class="reader-media"></div>`;
  const mediaWrap = els.readerCard.querySelector('.reader-media');
  (entry.media || []).forEach(media => {
    const mediaBlock = document.createElement('div');
    mediaBlock.className = 'media-block';
    if (media.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = media.dataUrl || media.url;
      img.alt = media.name || 'image';
      mediaBlock.appendChild(img);
    } else {
      const video = document.createElement('video');
      video.src = media.dataUrl || media.url;
      video.controls = true;
      video.playsInline = true;
      mediaBlock.appendChild(video);
    }
    mediaWrap.appendChild(mediaBlock);
  });
  showPage('reader');
}

async function deleteCurrentEntry() {
  if (!state.currentEntryId) return;
  if (!await appConfirm('حذف ژورنال', 'برای حذف این ژورنال مطمئنی؟ این کار قابل برگشت نیست.')) return;
  await deleteEntry(state.currentEntryId);
  state.currentEntryId = null;
  await renderAll();
  showPage('list');
  showToast('ژورنال حذف شد.');
}

async function exportZipBackup() {
  const ok = await ensureLibrary('jszip', 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js');
  if (!ok || !window.JSZip) return showToast('کتابخانه ZIP آماده نشد.');
  const zip = new JSZip();
  const entries = await getAllEntries();
  zip.file('data.json', JSON.stringify({ entries, settings: state.settings, version: 3 }, null, 2));
  const blob = await zip.generateAsync({ type: 'blob' });
  await saveFileSmart(blob, `journara-backup-${state.currentDate}.zip`, 'application/zip');
}

async function importZipBackup(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  if (!window.JSZip) return showToast('کتابخانه ZIP هنوز آماده نیست.');
  try {
    const zip = await JSZip.loadAsync(file);
    const dataFile = zip.file('data.json');
    if (!dataFile) return showToast('فایل data.json داخل ZIP پیدا نشد.');
    const parsed = JSON.parse(await dataFile.async('string'));
    if (!Array.isArray(parsed.entries)) return showToast('ساختار بکاپ نامعتبر است.');
    if (!await appConfirm('بازیابی بکاپ', 'داده‌های فعلی پاک شوند و بکاپ جایگزین شود؟')) return;
    await clearEntries();
    for (const entry of parsed.entries) await putEntry(entry);
    if (parsed.settings) {
      state.settings = { ...state.settings, ...parsed.settings };
      persistSettings();
      applySettings();
    }
    state.currentDate = toDateKey(new Date());
    e.target.value = '';
    await renderAll();
    showToast('بکاپ بازیابی شد.');
  } catch (err) {
    console.error(err);
    showToast('بازیابی بکاپ انجام نشد.');
  }
}

async function exportPdfBook() {
  const entries = await getAllEntries();
  if (!entries.length) return showToast('هنوز ژورنالی برای PDF وجود ندارد.');
  entries.sort((a, b) => a.dateKey.localeCompare(b.dateKey));
  const html = buildPrintableBook(entries);
  const frame = document.createElement('iframe');
  frame.style.position = 'fixed';
  frame.style.inlineSize = '1px';
  frame.style.blockSize = '1px';
  frame.style.opacity = '0.01';
  frame.style.pointerEvents = 'none';
  frame.style.inset = '0 auto auto 0';
  document.body.appendChild(frame);
  frame.onload = () => {
    try {
      const win = frame.contentWindow;
      win?.focus?.();
      setTimeout(() => {
        try { win?.print?.(); } catch (err) { console.error(err); }
        setTimeout(() => frame.remove(), 1800);
      }, 280);
    } catch (err) {
      console.error(err);
      frame.remove();
      showToast('باز شدن صفحه چاپ انجام نشد.');
    }
  };
  frame.srcdoc = html;
  showToast('پنجره چاپ آماده شد؛ از آن‌جا Save as PDF بگیر.');
}

function buildPrintableBook(entries) {
  const sections = entries.map((entry) => {
    const media = (entry.media || [])
      .filter(m => m.type?.startsWith('image/') && m.dataUrl)
      .map(m => `<img src="${m.dataUrl}" alt="${escapeHtml(m.name || 'image')}" />`)
      .join('');
    return `
      <section class="print-entry">
        <div class="print-meta">
          <div class="print-date">${escapeHtml(formatFullDate(entry.dateKey))}</div>
          <div>${escapeHtml(MOODS[entry.mood ?? 3].emoji + ' ' + MOODS[entry.mood ?? 3].label)}</div>
          <div>${escapeHtml(new Date(entry.updatedAt).toLocaleString('fa-IR'))}</div>
        </div>
        <h1>${escapeHtml(entry.title || 'بدون عنوان')}</h1>
        <div class="print-body">${escapeHtml(entry.body || 'متنی ثبت نشده.').split('\n').join('<br>')}</div>
        ${media ? `<div class="print-media">${media}</div>` : ''}
      </section>`;
  }).join('');
  return `<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><title>Journara PDF</title><style>
    @page{size:A4;margin:16mm}*{box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Tahoma,sans-serif;background:#fff;color:#111;margin:0;padding:0 0 12mm}img{max-width:100%;display:block}.print-entry{break-after:page;padding:0 0 12mm}.print-entry:last-child{break-after:auto}.print-meta{display:flex;gap:12px;flex-wrap:wrap;font-size:12px;color:#4b5563;margin-bottom:8px;border-bottom:1px solid #dbe3ef;padding-bottom:8px}h1{font-size:22px;margin:0 0 12px;color:#0f172a}.print-body{font-size:14px;line-height:2}.print-media{display:grid;gap:10px;margin-top:14px}.print-media img{border-radius:14px;page-break-inside:avoid;break-inside:avoid;max-height:220mm;object-fit:contain;border:1px solid #dde4f0}@media print {.print-entry{break-after:page}}
  </style></head><body>${sections}<script>window.onload=()=>setTimeout(()=>window.print(),250);</script></body></html>`;
}

async function resetAllData() {
  if (!await appConfirm('ریست کامل', 'همه چیز پاک شود؟ ژورنال‌ها، مودها و رسانه‌ها همه حذف می‌شوند.')) return;
  try {
    await clearEntries();
    state.currentEntryId = null;
    state.editingEntryId = null;
    state.tempMedia = [];
    state.currentDate = toDateKey(new Date());
    await renderAll();
    showPage('home');
    showToast('همه داده‌ها پاک شدند.');
  } catch (err) {
    console.error(err);
    showToast('ریست کامل انجام نشد.');
  }
}

async function upsertDayMood(dateKey, mood) {
  const existing = await getEntryByDate(dateKey);
  if (existing) {
    existing.mood = mood;
    existing.updatedAt = new Date().toISOString();
    await putEntry(existing);
  }
}

function updateMoodUI(target, index) {
  const mood = MOODS[index] || MOODS[3];
  const batteryContainer = target === 'home' ? els.batteryBars : els.editorBatteryBars;
  updateBatteryVisuals(batteryContainer, index);
  if (target === 'home') {
    els.moodEmoji.textContent = mood.emoji;
    els.moodLabel.textContent = mood.label;
  } else {
    els.editorMoodEmoji.textContent = mood.emoji;
    els.editorMoodLabel.textContent = mood.label;
  }
}

function updateBatteryVisuals(container, index) {
  const mood = MOODS[index] || MOODS[3];
  [...container.children].forEach((bar, i) => {
    if (i <= index) {
      bar.classList.add('active');
      bar.style.background = mood.color;
      bar.style.boxShadow = state.settings.mode === 'dark' ? `0 0 10px ${mood.color}, 0 0 22px ${mood.color}44` : 'none';
    } else {
      bar.classList.remove('active');
      bar.style.background = state.settings.mode === 'dark' ? 'rgba(255,255,255,.12)' : 'rgba(123,139,164,.28)';
      bar.style.boxShadow = 'none';
    }
  });
}

async function setCurrentDate(dateKey, direction = 0) {
  state.currentDate = dateKey;
  if (direction) await animateDateHero(direction); else renderDateHero();
  await renderHomeMood();
  await renderTodaySummary();
}

function showCustomDatePicker() {
  if (!els.customDateModal?.showModal) return openJournalForCustomDateFallback();
  els.customDateInput.value = state.currentDate;
  els.customDateModal.showModal();
}

async function submitCustomDate() {
  const raw = els.customDateInput?.value || '';
  const normalized = normalizeDateInput(raw);
  if (!normalized) return showToast('تاریخ معتبر وارد کن.');
  els.customDateModal?.close();
  const existing = await getEntryByDate(normalized);
  await setCurrentDate(normalized);
  if (existing) return openReader(existing.id);
  openEditor({ dateKey: normalized, mood: Number(els.moodSlider.value), media: [] });
}

async function openJournalForCustomDateFallback() {
  const raw = window.prompt('تاریخ را به شکل YYYY-MM-DD وارد کن', state.currentDate);
  if (!raw) return;
  const normalized = normalizeDateInput(raw);
  if (!normalized) return showToast('فرمت تاریخ درست نیست. نمونه: 2026-03-11');
  const existing = await getEntryByDate(normalized);
  await setCurrentDate(normalized);
  if (existing) return openReader(existing.id);
  openEditor({ dateKey: normalized, mood: Number(els.moodSlider.value), media: [] });
}

function normalizeDateInput(raw) {
  const cleaned = String(raw).trim().replace(/[\/.]/g, '-');
  if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(cleaned)) return '';
  const [y, m, d] = cleaned.split('-').map(Number);
  const test = new Date(y, m - 1, d);
  if (test.getFullYear() !== y || test.getMonth() !== m - 1 || test.getDate() !== d) return '';
  return toDateKey(test);
}

function changeDay(delta) {
  if (state.isAnimatingDate) return;
  const d = parseDateKey(state.currentDate);
  d.setDate(d.getDate() + delta);
  setCurrentDate(toDateKey(d), delta);
}

function applySettings() {
  els.appShell.classList.remove('theme-bubbles', 'theme-aurora', 'theme-midnight', 'theme-candy', 'light', 'dark');
  els.appShell.classList.add(state.settings.theme, state.settings.mode);
  els.themeSelect.value = state.settings.theme;
  els.brandMark.innerHTML = THEME_ART[state.settings.theme]?.brand || THEME_ART['theme-bubbles'].brand;
  updateMoodUI('home', Number(els.moodSlider.value || 3));
  updateMoodUI('editor', Number(els.editorMoodSlider.value || 3));
}

function loadSettings() {
  try {
    return { mode: 'dark', theme: 'theme-bubbles', ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') };
  } catch {
    return { mode: 'dark', theme: 'theme-bubbles' };
  }
}

function persistSettings() { localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings)); }
function showToast(text) { const toast = document.createElement('div'); toast.className = 'toast'; toast.textContent = text; document.body.appendChild(toast); setTimeout(() => toast.remove(), 2200); }
function trimText(text, limit) { return text.length > limit ? `${text.slice(0, limit).trim()}…` : text; }
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])); }
function toDateKey(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }
function parseDateKey(key) { const [y, m, d] = key.split('-').map(Number); return new Date(y, m - 1, d); }
function formatFullDate(dateKey) { return new Intl.DateTimeFormat('fa-IR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(parseDateKey(dateKey)); }
function wrapText(text, maxChars) { const words = text.split(/\s+/).filter(Boolean); const lines = []; let line = ''; for (const word of words) { const next = line ? `${line} ${word}` : word; if (next.length > maxChars) { if (line) lines.push(line); line = word; } else line = next; } if (line) lines.push(line); return lines.length ? lines : ['']; }
function fitBox(w, h, maxW, maxH) { const ratio = Math.min(maxW / w, maxH / h, 1); return { width: w * ratio, height: h * ratio }; }
function dataUrlToUint8Array(dataUrl) { const base64 = dataUrl.split(',')[1] || ''; const binary = atob(base64); const bytes = new Uint8Array(binary.length); for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i); return bytes; }
async function saveFileSmart(blob, filename, mimeType = blob.type || 'application/octet-stream') {
  try {
    const file = new File([blob], filename, { type: mimeType });
    if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
      await navigator.share({ files: [file], title: filename });
      return;
    }
  } catch (err) {
    console.warn('share fallback', err);
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1200);
}

function resolveConfirm(value) {
  if (state.confirmResolver) state.confirmResolver(value);
  state.confirmResolver = null;
  els.confirmModal?.close?.();
}

function appConfirm(title, text) {
  if (!els.confirmModal?.showModal) return Promise.resolve(window.confirm(text));
  els.confirmTitle.textContent = title;
  els.confirmText.textContent = text;
  els.confirmModal.showModal();
  return new Promise((resolve) => {
    state.confirmResolver = resolve;
  });
}

async function ensureLibrary(id, src) {
  if ((id === 'jszip' && window.JSZip) || (id === 'pdflib' && window.PDFLib)) return true;
  const existing = document.querySelector(`script[data-lib="${id}"]`);
  if (existing?.dataset.loaded === 'true') return true;
  return new Promise((resolve) => {
    const script = existing || document.createElement('script');
    script.src = src;
    script.async = true;
    script.dataset.lib = id;
    script.onload = () => { script.dataset.loaded = 'true'; resolve(true); };
    script.onerror = () => resolve(false);
    if (!existing) document.head.appendChild(script);
  });
}

async function fileToDraftMedia(file) {
  if (file.type.startsWith('image/')) {
    return compressImageForStorage(file);
  }
  return {
    id: crypto.randomUUID(),
    name: file.name,
    type: file.type || 'application/octet-stream',
    size: file.size,
    dataUrl: await readFileAsDataURL(file)
  };
}

async function compressImageForStorage(file) {
  try {
    const bitmap = await createImageBitmap(file);
    const maxEdge = 2200;
    const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { alpha: true });
    ctx.drawImage(bitmap, 0, 0, width, height);
    const preferPng = file.type === 'image/png';
    const outType = preferPng ? 'image/png' : 'image/jpeg';
    const quality = preferPng ? undefined : 0.92;
    const blob = await new Promise(resolve => canvas.toBlob(resolve, outType, quality));
    const chosen = blob && blob.size < file.size ? blob : file;
    return {
      id: crypto.randomUUID(),
      name: file.name,
      type: chosen.type || file.type || 'image/jpeg',
      size: chosen.size,
      dataUrl: await readFileAsDataURL(chosen),
      originalSize: file.size
    };
  } catch (err) {
    console.warn('image compression skipped', err);
    return {
      id: crypto.randomUUID(),
      name: file.name,
      type: file.type || 'image/jpeg',
      size: file.size,
      dataUrl: await readFileAsDataURL(file),
      originalSize: file.size
    };
  }
}

function readFileAsDataURL(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); }); }
async function registerSW() { if ('serviceWorker' in navigator) { try { await navigator.serviceWorker.register('./sw.js'); } catch (e) { console.warn('SW failed', e); } } }
function openDB() { return new Promise((resolve, reject) => { const req = indexedDB.open(DB_NAME, DB_VERSION); req.onupgradeneeded = () => { const db = req.result; if (!db.objectStoreNames.contains('entries')) { const store = db.createObjectStore('entries', { keyPath: 'id' }); store.createIndex('dateKey', 'dateKey', { unique: true }); } }; req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
function tx(store, mode = 'readonly') { return state.db.transaction(store, mode); }
function requestToPromise(req) { return new Promise((resolve, reject) => { req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
function transactionComplete(transaction) { return new Promise((resolve, reject) => { transaction.oncomplete = () => resolve(true); transaction.onerror = () => reject(transaction.error); transaction.onabort = () => reject(transaction.error || new Error('IndexedDB transaction aborted')); }); }
function getEntry(id) { const t = tx('entries'); return requestToPromise(t.objectStore('entries').get(id)); }
async function putEntry(entry) { const t = tx('entries', 'readwrite'); t.objectStore('entries').put(entry); await transactionComplete(t); return entry; }
async function deleteEntry(id) { const t = tx('entries', 'readwrite'); t.objectStore('entries').delete(id); await transactionComplete(t); return true; }
function getEntryByDate(dateKey) { const t = tx('entries'); return requestToPromise(t.objectStore('entries').index('dateKey').get(dateKey)); }
function getAllEntries() { const t = tx('entries'); return requestToPromise(t.objectStore('entries').getAll()); }
async function clearEntries() { const t = tx('entries', 'readwrite'); t.objectStore('entries').clear(); await transactionComplete(t); return true; }
