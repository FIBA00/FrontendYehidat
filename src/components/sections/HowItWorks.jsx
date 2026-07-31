import { useTranslation } from 'react-i18next'
import Reveal from '../ui/Reveal'

const STEPS = [1, 2, 3]

export default function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section id="how" className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal className="text-center mb-14">
          <p className="eyebrow">{t('how.eyebrow')}</p>
          <h2 className="section-heading">{t('how.title')}</h2>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="hidden md:block absolute top-7 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px"
            style={{ background: 'linear-gradient(90deg, #B8960C, rgba(184,150,12,0.25), #B8960C)' }}
          />

          {STEPS.map((step, i) => (
            <Reveal key={step} delay={i * 0.1} className="text-center px-4">
              <div
                className="relative z-10 w-14 h-14 rounded-full bg-gold mx-auto mb-5 flex items-center justify-center font-display font-bold text-xl text-ink"
                style={{ boxShadow: '0 0 0 6px #FFF8DC, 0 0 0 7.5px rgba(184,150,12,0.55)' }}
              >
                {step}
              </div>
              <h3 className="font-display font-bold text-lg mb-2.5">{t(`how.step${step}Title`)}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{t(`how.step${step}Body`)}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
