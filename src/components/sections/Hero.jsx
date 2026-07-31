import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { TRUST_FACES } from '../../data/constants'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { useAppStore } from '../../store/useAppStore'

// ── HERO IMAGE ────────────────────────────────────────────────
// import heroSrc from '../../assets/images/hero.jpg'
// Recommended: 900×1080px portrait of a surprise moment
const heroSrc = null

export default function Hero() {
  const { t } = useTranslation()
  const clearSelection = useAppStore((s) => s.clearSelection)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-gold-pale border border-gold-edge/55 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-[11px] font-semibold text-gold-deep tracking-wide uppercase">
                {t('hero.tag')}
              </span>
            </div>

            <h1 className="display-heading mb-5">
              {t('hero.titleLine1')}{' '}
              <span className="italic font-display text-gold-deep">{t('hero.titleEmphasis')}</span>
            </h1>

            <p className="text-lg text-ink-soft leading-relaxed mb-9 max-w-md">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <button onClick={() => { clearSelection(); scrollTo('contact') }} className="btn-gold">
                {t('hero.ctaPrimary')} <span>→</span>
              </button>
              <button onClick={() => scrollTo('how')} className="btn-outline">
                {t('hero.ctaSecondary')}
              </button>
            </div>

            <div className="flex items-center gap-3 mt-9">
              <div className="flex">
                {TRUST_FACES.map((src, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-parchment overflow-hidden -ml-2 first:ml-0 bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-xs font-semibold text-ink"
                  >
                    {src ? <img src={src} alt="" className="w-full h-full object-cover" /> : '✦'}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-parchment -ml-2 bg-gold flex items-center justify-center text-[10px] font-bold text-ink">
                  +
                </div>
              </div>
              <p className="text-sm text-ink-muted">
                <strong className="text-ink font-semibold">{t('hero.trustCount')}</strong>{' '}
                {t('hero.trustLabel')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="relative order-first lg:order-last"
          >
            <ImagePlaceholder
              src={heroSrc}
              alt="A beautifully decorated surprise setup"
              hint={t('hero.imageHint')}
              className="w-full aspect-[5/6] ribbon-border"
            />

            <div className="absolute -bottom-4 -left-4 sm:left-[-20px] bg-parchment border border-gold-edge/55 rounded-xl px-4 py-3 shadow-card flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-pale rounded-lg flex items-center justify-center text-xl">
                🎂
              </div>
              <div>
                <p className="text-[10px] text-ink-muted leading-none mb-0.5">{t('hero.badgeLabel')}</p>
                <p className="text-sm font-semibold text-ink">{t('hero.badgeValue')}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
