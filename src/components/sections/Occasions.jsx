import { useTranslation } from 'react-i18next'
import { OCCASIONS } from '../../data/constants'
import { useAppStore } from '../../store/useAppStore'
import Reveal from '../ui/Reveal'

export default function Occasions() {
  const { t } = useTranslation()
  const setSelectedOccasion = useAppStore((s) => s.setSelectedOccasion)

  const handlePick = (occasionId) => {
    setSelectedOccasion(occasionId)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="occasions" className="py-20 bg-gold-cream">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal className="text-center mb-12">
          <p className="eyebrow">{t('occasions.eyebrow')}</p>
          <h2 className="section-heading">{t('occasions.title')}</h2>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {OCCASIONS.map(({ id, emoji }) => (
            <button
              key={id}
              onClick={() => handlePick(id)}
              className="bg-parchment border border-gold-edge/25 rounded-xl py-5 px-3 text-center
                         transition-all duration-200 hover:-translate-y-1
                         hover:border-gold-edge hover:shadow-gold"
            >
              <div className="text-3xl mb-2.5">{emoji}</div>
              <p className="text-xs font-semibold text-ink-soft leading-tight">{t(`occasions.${id}`)}</p>
            </button>
          ))}
        </Reveal>

      </div>
    </section>
  )
}
