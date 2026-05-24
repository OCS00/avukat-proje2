'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import toast, { Toaster } from 'react-hot-toast';
import {
  Scale, LogOut, Plus, Trash2, Pencil, X, ExternalLink,
  ArrowLeft, Upload, BookOpen, Tag, Calendar, LayoutGrid,
  ChevronRight, Eye, Check, FileText,
} from 'lucide-react';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const CLOUDINARY_CLOUD = 'dkt0xqpv3';
const CLOUDINARY_PRESET = 'glory_resimler';
const TOAST_STYLE = { background: '#0f172a', color: '#f1f5f9', border: '1px solid #1e293b', borderRadius: '4px', fontSize: '13px' };

const QUILL_MODULES = {
  toolbar: [
    [{ header: [2, 3, false] }],
    ['bold', 'italic', 'underline', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
  ],
};

const CATEGORIES = ['Aile Hukuku', 'Ceza Hukuku', 'Ticaret Hukuku', 'İş Hukuku', 'Miras Hukuku', 'İcra Hukuku', 'Genel'];
const EMPTY_FORM = { title: '', slug: '', overview: '', content: '', mainImage: '', category: 'Genel' };

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

const fetcher = (url) => fetch(url).then((r) => r.json());

/* ─── SİLME ONAY MODALI ─────────────────────────────────────── */
function DeleteModal({ post, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-sm bg-[#0f172a] border border-red-500/20 rounded-lg p-8 shadow-2xl">
        <div className="w-14 h-14 mx-auto mb-5 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center">
          <Trash2 className="text-red-400" size={22} />
        </div>
        <h3 className="text-lg font-playfair font-bold text-white text-center mb-2">Yazıyı Sil</h3>
        <p className="text-[#c5a47e] text-xs text-center font-bold uppercase tracking-widest mb-1">{post?.title}</p>
        <p className="text-gray-500 text-xs text-center mb-8 leading-relaxed">Bu işlem geri alınamaz. Yazı kalıcı olarak kaldırılacaktır.</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 py-3 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white rounded-lg text-xs font-bold tracking-widest uppercase transition-all">
            Vazgeç
          </button>
          <button onClick={onConfirm} className="flex-1 py-3 bg-red-500 hover:bg-red-400 text-white rounded-lg text-xs font-bold tracking-widest uppercase transition-all">
            Evet, Sil
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── GÖRSEL YÜKLEME ─────────────────────────────────────────── */
async function uploadImage(file, onProgress) {
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', CLOUDINARY_PRESET);
  fd.append('cloud_name', CLOUDINARY_CLOUD);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, { method: 'POST', body: fd });
  const data = await res.json();
  if (!data.secure_url) throw new Error('Upload başarısız');
  return data.secure_url;
}

/* ─── GÖNDERI KARTI ──────────────────────────────────────────── */
function PostCard({ post, onEdit, onDelete }) {
  return (
    <div className="group bg-[#0b1120] border border-gray-800/60 rounded-xl overflow-hidden flex hover:border-[#c5a47e]/30 hover:shadow-[0_0_30px_rgba(197,164,126,0.05)] transition-all duration-300">
      {/* Kapak Görseli */}
      <div className="w-28 sm:w-36 flex-shrink-0 relative overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
        {post.mainImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url('${post.mainImage}')` }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Scale className="text-gray-700" size={24} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0b1120]/40" />
      </div>

      {/* İçerik */}
      <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="inline-flex items-center gap-1.5 bg-[#c5a47e]/10 text-[#c5a47e] border border-[#c5a47e]/20 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase">
              <Tag size={8} /> {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-600 text-[10px]">
              <Calendar size={9} /> {new Date(post.publishedAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h3 className="text-white font-bold text-sm leading-snug line-clamp-1 group-hover:text-[#c5a47e] transition-colors mb-1.5">
            {post.title}
          </h3>
          <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{post.overview}</p>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => onEdit(post)}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#c5a47e]/10 hover:text-[#c5a47e] border border-gray-700/60 hover:border-[#c5a47e]/30 text-gray-400 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all"
          >
            <Pencil size={11} /> Düzenle
          </button>
          <button
            onClick={() => onDelete(post)}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-red-500/10 hover:text-red-400 border border-gray-700/60 hover:border-red-500/20 text-gray-400 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all"
          >
            <Trash2 size={11} /> Sil
          </button>
          <a
            href={`/blog/${post.slug}`}
            target="_blank"
            className="ml-auto flex items-center gap-1.5 text-gray-600 hover:text-[#c5a47e] text-[10px] font-bold uppercase tracking-widest transition-colors"
          >
            <Eye size={11} /> Görüntüle
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── İSKELET YÜKLEME ───────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="bg-[#0b1120] border border-gray-800/60 rounded-xl overflow-hidden flex animate-pulse">
      <div className="w-36 flex-shrink-0 bg-gray-800/40" />
      <div className="flex-1 p-5 space-y-3">
        <div className="h-3 w-1/4 bg-gray-800 rounded-full" />
        <div className="h-4 w-3/4 bg-gray-700 rounded" />
        <div className="h-3 w-full bg-gray-800 rounded" />
        <div className="h-3 w-2/3 bg-gray-800 rounded" />
      </div>
    </div>
  );
}

/* ─── ANA EDİTÖR VIEW ────────────────────────────────────────── */
function EditorView({ initialData, onSave, onCancel, isEdit }) {
  const [form, setForm] = useState({ ...initialData });
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setForm(p => ({ ...p, title, slug: isEdit ? p.slug : generateSlug(title) }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingImage(true);
    try {
      const url = await uploadImage(file);
      setForm(p => ({ ...p, mainImage: url }));
      toast.success('Görsel yüklendi', { style: TOAST_STYLE });
    } catch {
      toast.error('Görsel yüklenemedi', { style: TOAST_STYLE });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSave = async () => {
    if (!form.title.trim()) { toast.error('Başlık zorunludur.', { style: TOAST_STYLE }); return; }
    if (!form.overview.trim()) { toast.error('Özet zorunludur.', { style: TOAST_STYLE }); return; }
    if (!form.content || form.content === '<p><br></p>') { toast.error('İçerik zorunludur.', { style: TOAST_STYLE }); return; }

    setSaving(true);
    try {
      const url = isEdit ? `/api/posts/${initialData.slug}` : '/api/posts';
      const method = isEdit ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (result.success) {
        toast.success(isEdit ? 'Yazı güncellendi!' : 'Yazı yayınlandı!', { style: TOAST_STYLE });
        onSave();
      } else {
        toast.error(result.error || 'Hata oluştu', { style: TOAST_STYLE });
      }
    } catch {
      toast.error('Bağlantı hatası', { style: TOAST_STYLE });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050914] flex flex-col">
      {/* Editör Üst Bar */}
      <div className="sticky top-0 z-50 bg-[#050914]/95 backdrop-blur border-b border-gray-800/60 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onCancel}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Geri Dön</span>
          </button>
          <div className="w-px h-5 bg-gray-800" />
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Scale size={13} className="text-[#c5a47e]" />
            <span>Av. Osman Özkaya</span>
            <ChevronRight size={12} />
            <span className="text-gray-400">{isEdit ? 'Yazıyı Düzenle' : 'Yeni Makale'}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {form.slug && (
            <div className="hidden md:flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-3 py-1.5">
              <span className="text-gray-600 text-[10px] font-mono">/blog/</span>
              <span className="text-gray-400 text-[10px] font-mono">{form.slug}</span>
            </div>
          )}
          <button
            onClick={handleSave}
            disabled={saving || uploadingImage}
            className="flex items-center gap-2 bg-[#c5a47e] hover:bg-white text-[#050914] font-bold text-xs tracking-widest uppercase px-6 py-2.5 rounded-lg transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(197,164,126,0.2)] hover:shadow-[0_0_30px_rgba(197,164,126,0.4)]"
          >
            {saving ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-[#050914]/40 border-t-[#050914] rounded-full animate-spin" />
                Kaydediliyor...
              </>
            ) : (
              <>
                <Check size={14} />
                {isEdit ? 'Güncelle' : 'Yayınla'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Editör Ana Alanı */}
      <div className="flex flex-col lg:flex-row flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 gap-8">

        {/* SOL: Yazı Alanı */}
        <div className="flex-1 min-w-0">
          {/* Başlık */}
          <div className="mb-6">
            <textarea
              value={form.title}
              onChange={handleTitleChange}
              placeholder="Makale başlığını buraya yazın..."
              rows={2}
              className="w-full bg-transparent text-white text-3xl sm:text-4xl font-playfair font-bold placeholder:text-gray-700 outline-none resize-none leading-tight tracking-tight border-b border-gray-800/60 pb-4 focus:border-[#c5a47e]/30 transition-colors"
            />
          </div>

          {/* Editör */}
          <div className="quill-editorial">
            <ReactQuill
              theme="snow"
              value={form.content}
              onChange={(val) => setForm(p => ({ ...p, content: val }))}
              modules={QUILL_MODULES}
              placeholder="Makale içeriğini buraya yazın. Başlık için H2, alt başlık için H3 kullanın..."
            />
          </div>
        </div>

        {/* SAĞ: Metadata Sidebar */}
        <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-4">

            {/* Kapak Görseli */}
            <div className="bg-[#0b1120] border border-gray-800/60 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-800/60 flex items-center gap-2">
                <Upload size={13} className="text-[#c5a47e]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Kapak Görseli</span>
              </div>
              <div className="p-4">
                <label className="block relative cursor-pointer group">
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="sr-only" />
                  {form.mainImage ? (
                    <div className="relative rounded-lg overflow-hidden aspect-video bg-gray-900">
                      <img src={form.mainImage} alt="Kapak" className="w-full h-full object-cover group-hover:opacity-70 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
                          <Upload size={14} className="text-white" />
                          <span className="text-white text-[10px] font-bold uppercase tracking-widest">Değiştir</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg border-2 border-dashed border-gray-700 hover:border-[#c5a47e]/50 aspect-video flex flex-col items-center justify-center gap-2 bg-[#050914] transition-all">
                      {uploadingImage ? (
                        <>
                          <div className="w-6 h-6 border-2 border-gray-700 border-t-[#c5a47e] rounded-full animate-spin" />
                          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Yükleniyor...</span>
                        </>
                      ) : (
                        <>
                          <Upload size={20} className="text-gray-600 group-hover:text-[#c5a47e] transition-colors" />
                          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-hover:text-gray-400 transition-colors">Görsel Seç</span>
                          <span className="text-[9px] text-gray-700">JPG, PNG, WEBP</span>
                        </>
                      )}
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Kategori */}
            <div className="bg-[#0b1120] border border-gray-800/60 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-800/60 flex items-center gap-2">
                <Tag size={13} className="text-[#c5a47e]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Kategori</span>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setForm(p => ({ ...p, category: cat }))}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${
                        form.category === cat
                          ? 'bg-[#c5a47e] text-[#050914] border-[#c5a47e]'
                          : 'bg-transparent text-gray-500 border-gray-700/60 hover:border-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Kısa Özet */}
            <div className="bg-[#0b1120] border border-gray-800/60 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-800/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText size={13} className="text-[#c5a47e]" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Kısa Özet</span>
                </div>
                <span className={`text-[9px] font-bold ${form.overview.length > 160 ? 'text-red-400' : 'text-gray-600'}`}>
                  {form.overview.length}/160
                </span>
              </div>
              <div className="p-4">
                <textarea
                  rows={3}
                  value={form.overview}
                  onChange={e => setForm(p => ({ ...p, overview: e.target.value }))}
                  placeholder="Blog listesinde görünen kısa özet. Maksimum 160 karakter önerilir."
                  className="w-full bg-[#050914] border border-gray-700/60 rounded-lg p-3 text-xs text-gray-300 focus:border-[#c5a47e]/50 outline-none resize-none placeholder:text-gray-700 leading-relaxed transition-all"
                />
              </div>
            </div>

            {/* URL Slug */}
            <div className="bg-[#0b1120] border border-gray-800/60 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-800/60 flex items-center gap-2">
                <LayoutGrid size={13} className="text-[#c5a47e]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">URL Adresi</span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-gray-600 text-[10px] font-mono">/blog/</span>
                </div>
                <input
                  type="text"
                  value={form.slug}
                  onChange={e => setForm(p => ({ ...p, slug: e.target.value }))}
                  className="w-full bg-[#050914] border border-gray-700/60 rounded-lg p-2.5 text-[11px] text-gray-400 font-mono focus:border-[#c5a47e]/50 outline-none transition-all"
                />
              </div>
            </div>

            {/* Mobil Kaydet */}
            <button
              onClick={handleSave}
              disabled={saving || uploadingImage}
              className="lg:hidden w-full flex items-center justify-center gap-2 bg-[#c5a47e] hover:bg-white text-[#050914] font-bold text-xs tracking-widest uppercase py-4 rounded-xl transition-all disabled:opacity-50"
            >
              <Check size={14} />
              {saving ? 'Kaydediliyor...' : isEdit ? 'Güncelle' : 'Yayınla'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ─── ANA COMPONENT ──────────────────────────────────────────── */
export default function Dashboard() {
  const router = useRouter();
  const [view, setView] = useState('list'); // 'list' | 'create' | 'edit'
  const [editTarget, setEditTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const { data, error, isLoading: postsLoading, mutate } = useSWR('/api/posts', fetcher);
  const posts = data?.posts || [];

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  };

  const handleDeleteConfirm = async () => {
    try {
      const res = await fetch(`/api/posts/${deleteTarget.slug}`, { method: 'DELETE' });
      const result = await res.json();
      if (result.success) {
        toast.success('Yazı silindi.', { style: TOAST_STYLE });
        mutate();
      } else {
        toast.error('Silme başarısız!', { style: TOAST_STYLE });
      }
    } catch {
      toast.error('Silme sırasında hata oluştu.', { style: TOAST_STYLE });
    } finally {
      setDeleteTarget(null);
    }
  };

  // Editör açıkken liste görünümünü gizle
  if (view === 'create') {
    return (
      <>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <style jsx global>{`
          .quill-editorial .ql-toolbar { background: #0b1120; border: none; border-bottom: 1px solid rgba(51,65,85,0.4); padding: 8px 0; }
          .quill-editorial .ql-container { background: transparent; border: none; color: #d1d5db; font-size: 16px; }
          .quill-editorial .ql-editor { padding: 16px 0; min-height: 400px; line-height: 1.8; font-size: 16px; }
          .quill-editorial .ql-editor.ql-blank::before { color: #374151; font-style: normal; left: 0; }
          .quill-editorial .ql-toolbar button, .quill-editorial .ql-toolbar .ql-picker { color: #6b7280; }
          .quill-editorial .ql-toolbar button:hover, .quill-editorial .ql-toolbar button.ql-active { color: #c5a47e; }
          .quill-editorial .ql-toolbar .ql-stroke { stroke: #6b7280; }
          .quill-editorial .ql-toolbar button:hover .ql-stroke, .quill-editorial .ql-toolbar button.ql-active .ql-stroke { stroke: #c5a47e; }
          .quill-editorial .ql-toolbar .ql-fill { fill: #6b7280; }
          .quill-editorial .ql-toolbar button:hover .ql-fill, .quill-editorial .ql-toolbar button.ql-active .ql-fill { fill: #c5a47e; }
          .quill-editorial .ql-picker-label { color: #6b7280; }
          .quill-editorial .ql-picker-options { background: #0f172a; border-color: #1e293b; }
          .quill-editorial .ql-picker-item:hover, .quill-editorial .ql-picker-item.ql-selected { color: #c5a47e !important; }
          .quill-editorial .ql-editor h2 { font-size: 1.6rem; font-weight: 700; color: #fff; margin: 2rem 0 1rem; line-height: 1.2; }
          .quill-editorial .ql-editor h3 { font-size: 1.2rem; font-weight: 600; color: #e2e8f0; margin: 1.5rem 0 0.75rem; }
          .quill-editorial .ql-editor blockquote { border-left: 3px solid #c5a47e; padding-left: 1rem; color: #94a3b8; font-style: italic; margin: 1.5rem 0; }
          .quill-editorial .ql-editor ul, .quill-editorial .ql-editor ol { padding-left: 1.5rem; }
          .quill-editorial .ql-editor li { margin-bottom: 0.5rem; }
          .quill-editorial .ql-editor a { color: #c5a47e; }
          .quill-editorial .ql-editor strong { color: #f1f5f9; }
        `}</style>
        <EditorView
          initialData={EMPTY_FORM}
          isEdit={false}
          onSave={() => { mutate(); setView('list'); }}
          onCancel={() => setView('list')}
        />
      </>
    );
  }

  if (view === 'edit' && editTarget) {
    return (
      <>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <style jsx global>{`
          .quill-editorial .ql-toolbar { background: #0b1120; border: none; border-bottom: 1px solid rgba(51,65,85,0.4); padding: 8px 0; }
          .quill-editorial .ql-container { background: transparent; border: none; color: #d1d5db; font-size: 16px; }
          .quill-editorial .ql-editor { padding: 16px 0; min-height: 400px; line-height: 1.8; font-size: 16px; }
          .quill-editorial .ql-editor.ql-blank::before { color: #374151; font-style: normal; left: 0; }
          .quill-editorial .ql-toolbar button, .quill-editorial .ql-toolbar .ql-picker { color: #6b7280; }
          .quill-editorial .ql-toolbar button:hover, .quill-editorial .ql-toolbar button.ql-active { color: #c5a47e; }
          .quill-editorial .ql-toolbar .ql-stroke { stroke: #6b7280; }
          .quill-editorial .ql-toolbar button:hover .ql-stroke, .quill-editorial .ql-toolbar button.ql-active .ql-stroke { stroke: #c5a47e; }
          .quill-editorial .ql-toolbar .ql-fill { fill: #6b7280; }
          .quill-editorial .ql-toolbar button:hover .ql-fill, .quill-editorial .ql-toolbar button.ql-active .ql-fill { fill: #c5a47e; }
          .quill-editorial .ql-picker-label { color: #6b7280; }
          .quill-editorial .ql-picker-options { background: #0f172a; border-color: #1e293b; }
          .quill-editorial .ql-picker-item:hover, .quill-editorial .ql-picker-item.ql-selected { color: #c5a47e !important; }
          .quill-editorial .ql-editor h2 { font-size: 1.6rem; font-weight: 700; color: #fff; margin: 2rem 0 1rem; line-height: 1.2; }
          .quill-editorial .ql-editor h3 { font-size: 1.2rem; font-weight: 600; color: #e2e8f0; margin: 1.5rem 0 0.75rem; }
          .quill-editorial .ql-editor blockquote { border-left: 3px solid #c5a47e; padding-left: 1rem; color: #94a3b8; font-style: italic; margin: 1.5rem 0; }
          .quill-editorial .ql-editor ul, .quill-editorial .ql-editor ol { padding-left: 1.5rem; }
          .quill-editorial .ql-editor li { margin-bottom: 0.5rem; }
          .quill-editorial .ql-editor a { color: #c5a47e; }
          .quill-editorial .ql-editor strong { color: #f1f5f9; }
        `}</style>
        <EditorView
          initialData={editTarget}
          isEdit={true}
          onSave={() => { mutate(); setView('list'); setEditTarget(null); }}
          onCancel={() => { setView('list'); setEditTarget(null); }}
        />
      </>
    );
  }

  /* LIST VIEW */
  const hour = new Date().getHours();
  const greeting = hour < 6 ? 'İyi Geceler' : hour < 12 ? 'Günaydın' : hour < 18 ? 'İyi Günler' : 'İyi Akşamlar';
  const today = new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const thisMonth = posts.filter(p => {
    const d = new Date(p.publishedAt);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;
  const categories = [...new Set(posts.map(p => p.category))].length;

  return (
    <div className="min-h-screen bg-[#050914] text-white selection:bg-[#c5a47e] selection:text-[#050914]">
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      {deleteTarget && <DeleteModal post={deleteTarget} onConfirm={handleDeleteConfirm} onCancel={() => setDeleteTarget(null)} />}

      {/* NAV */}
      <nav className="bg-[#050914]/90 backdrop-blur-xl border-b border-gray-800/50 px-6 py-3.5 sticky top-0 z-50 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#c5a47e]/10 border border-[#c5a47e]/30 rounded-lg flex items-center justify-center">
            <Scale className="text-[#c5a47e]" size={16} />
          </div>
          <span className="text-xs font-bold text-gray-400 tracking-wide">Panel</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/blog" target="_blank" className="hidden sm:flex items-center gap-1.5 text-gray-600 hover:text-[#c5a47e] text-[10px] font-bold uppercase tracking-widest transition-colors">
            Siteye Git <ExternalLink size={10} />
          </a>
          <button onClick={handleLogout} className="flex items-center gap-1.5 px-3.5 py-2 border border-gray-800/80 hover:border-red-500/30 text-gray-600 hover:text-red-400 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all">
            <LogOut size={11} /> Çıkış
          </button>
        </div>
      </nav>

      {/* ─── HERO KARŞILAMA ────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-gray-800/40">
        {/* Arka plan katmanları */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1120] via-[#080e1a] to-[#050914]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.025]" />
        <div className="absolute top-0 right-0 w-[600px] h-full bg-[#c5a47e]/[0.04] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-indigo-900/[0.06] blur-[100px]" />

        {/* Devasa arka plan yazısı */}
        <div className="absolute bottom-0 right-[-2%] font-playfair font-black text-white/[0.018] leading-none pointer-events-none select-none whitespace-nowrap"
          style={{ fontSize: 'clamp(80px, 14vw, 180px)' }}>
          HUKUK
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">

            {/* Sol: Karşılama Metni */}
            <div className="flex-1">
              {/* Saat bazlı selamlama */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-2 bg-[#c5a47e]/10 border border-[#c5a47e]/20 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 bg-[#c5a47e] rounded-full animate-pulse" />
                  <span className="text-[#c5a47e] text-[10px] font-bold uppercase tracking-[0.3em]">{greeting}</span>
                </div>
                <span className="text-gray-700 text-[10px] hidden sm:block">{today}</span>
              </div>

              {/* İsim */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-white leading-[1.05] tracking-tight mb-5">
                Av. Osman<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a47e] via-[#e8d5b5] to-[#c5a47e]">Özkaya</span>
              </h1>

              {/* Alıntı */}
              <div className="flex items-start gap-3 mb-8 max-w-md">
                <div className="w-0.5 h-full bg-[#c5a47e]/40 rounded-full flex-shrink-0 mt-1 self-stretch min-h-[2.5rem]" />
                <p className="text-gray-500 text-sm leading-relaxed italic">
                  "Hukuki bilginizi toplumla paylaşmak, güven inşa etmenin en güçlü yoludur."
                </p>
              </div>

              {/* İnline İstatistikler */}
              <div className="flex items-center gap-6 sm:gap-8">
                {[
                  { value: postsLoading ? '—' : posts.length, label: 'Toplam Makale' },
                  { value: postsLoading ? '—' : thisMonth, label: 'Bu Ay' },
                  { value: postsLoading ? '—' : categories, label: 'Kategori' },
                ].map(({ value, label }, i) => (
                  <div key={label} className="flex items-center gap-6 sm:gap-8">
                    {i > 0 && <div className="w-px h-8 bg-gray-800" />}
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-white leading-none">{value}</p>
                      <p className="text-[9px] text-gray-600 uppercase tracking-widest mt-1">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ: CTA Kartı */}
            <div className="flex-shrink-0">
              <div className="bg-[#0f172a]/80 border border-gray-800/60 rounded-2xl p-6 backdrop-blur-sm w-full md:w-64">
                <div className="w-12 h-12 bg-[#c5a47e]/10 border border-[#c5a47e]/20 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="text-[#c5a47e]" size={22} />
                </div>
                <p className="text-white font-bold text-base mb-1 font-playfair">Yeni Makale</p>
                <p className="text-gray-500 text-xs leading-relaxed mb-5">
                  Hukuki bilginizi okuyucularla paylaşın. Makaleniz anında yayınlanır.
                </p>
                <button
                  onClick={() => setView('create')}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#c5a47e] hover:bg-white text-[#050914] font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(197,164,126,0.25)] hover:shadow-[0_0_30px_rgba(197,164,126,0.45)] active:scale-95 group"
                >
                  <Plus size={15} className="group-hover:rotate-90 transition-transform duration-200" />
                  Yeni Makale Yaz
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── YAZI LİSTESİ ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 pb-24">

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">Yayındaki Makaleler</h2>
            {!postsLoading && posts.length > 0 && (
              <span className="bg-[#c5a47e]/10 text-[#c5a47e] border border-[#c5a47e]/20 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                {posts.length}
              </span>
            )}
          </div>
        </div>

        {postsLoading ? (
          <div className="space-y-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : error ? (
          <div className="text-center py-12 border border-red-500/20 rounded-xl bg-red-500/5">
            <p className="text-red-400 font-bold text-sm">Yazılar yüklenirken hata oluştu.</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-gray-800/60 rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#c5a47e]/5 border border-[#c5a47e]/10 rounded-2xl flex items-center justify-center">
              <Scale className="text-gray-700" size={28} />
            </div>
            <h3 className="text-white font-playfair font-bold text-xl mb-3">Henüz Makale Yok</h3>
            <p className="text-gray-600 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
              İlk hukuki makalenizi yayınlayarak potansiyel müvekkillere ulaşmaya başlayın.
            </p>
            <button
              onClick={() => setView('create')}
              className="inline-flex items-center gap-2 bg-[#c5a47e] text-[#050914] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-lg transition-all hover:bg-white"
            >
              <Plus size={14} /> İlk Makaleyi Yaz
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map(post => (
              <PostCard
                key={post._id}
                post={post}
                onEdit={(p) => { setEditTarget(p); setView('edit'); }}
                onDelete={setDeleteTarget}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
