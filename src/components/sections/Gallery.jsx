import { useTranslation } from 'react-i18next'
import { GALLERY_ITEMS } from '../../data/constants'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import Reveal from '../ui/Reveal'

// ── GALLERY IMAGE INSERTION ───────────────────────────────────
// In data/constants.js, update GALLERY_ITEMS[n].src with imported paths:
//   import g1 from '../assets/images/gallery-1.jpg'  then  src: g1
// For video (item 0 only, recommended): set type: 'video'
// Sizes: item 0 (large) 800×600px min, items 1–4: 400×300px min
// ─────────────────────────────────────────────────────────────

const HINTS = {
  0: 'Photo or video\n800 × 600 px',
  1: '400 × 300 px',
  2: '400 × 300 px',
  3: '400 × 300 px',
  4: '400 × 300 px',
}

export default function Gallery() {
  const { t } = useTranslation()

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal className="text-center mb-10">
          <p className="eyebrow">{t('gallery.eyebrow')}</p>
          <h2 className="section-heading">{t('gallery.title')}</h2>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 md:grid-cols-12 grid-rows-2 gap-3 md:gap-4" style={{ minHeight: '420px' }}>
          {GALLERY_ITEMS.map((item, i) => {
            const colSpan = i === 0 ? 'md:col-span-6 md:row-span-2' : 'md:col-span-3 md:row-span-1'
            return (
              <div key={item.id} className={`rounded-2xl overflow-hidden ${colSpan}`}>
                <ImagePlaceholder
                  src={item.src}
                  alt={item.alt}
                  type={item.type}
                  hint={HINTS[i]}
                  className="w-full h-full min-h-[160px]"
                />
              </div>
            )
          })}
        </Reveal>

      </div>
    </section>
  )
}
