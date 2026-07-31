import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'motion/react'
import { CONTACT, OCCASIONS } from '../../data/constants'
import { useAppStore } from '../../store/useAppStore'
import Reveal from '../ui/Reveal'

// ── FORM BACKEND ──────────────────────────────────────────────
// Set FORM_ACTION to a real endpoint when ready:
//   Formspree:      'https://formspree.io/f/YOUR_FORM_ID'
//   Express backend: '/api/callback-requests'
// Until then, submitCallback() just resolves after a short delay
// so the success state can be previewed end-to-end.
// ─────────────────────────────────────────────────────────────
const FORM_ACTION = ''

async function submitCallback(payload) {
  if (!FORM_ACTION) {
    await new Promise((r) => setTimeout(r, 500))
    return { ok: true }
  }
  const res = await fetch(FORM_ACTION, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Submission failed')
  return res.json()
}

function ChannelCard({ icon, label, value, href, external }) {
  const inner = (
    <div className="flex items-center gap-3 px-4 py-4 bg-parchment border border-gold-edge/25 rounded-xl transition-all duration-150 hover:border-gold-edge hover:shadow-[0_0_0_3px_#FFF8DC]">
      <div className="w-11 h-11 rounded-lg bg-gold-pale flex items-center justify-center text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[11px] text-ink-muted">{label}</p>
        <p className="text-sm font-semibold text-ink">{value}</p>
      </div>
    </div>
  )
  if (!href) return <div>{inner}</div>
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
      {inner}
    </a>
  )
}

export default function Contact() {
  const { t } = useTranslation()
  const selectedOccasion = useAppStore((s) => s.selectedOccasion)
  const clearSelection = useAppStore((s) => s.clearSelection)

  const [form, setForm] = useState({ name: '', phone: '', occasion: '', date: '', message: '' })

  // Pre-fill occasion when the user arrived here via an Occasion card / package pick
  useEffect(() => {
    if (selectedOccasion) {
      setForm((f) => ({ ...f, occasion: t(`occasions.${selectedOccasion}`) }))
    }
  }, [selectedOccasion, t])

  const mutation = useMutation({
    mutationFn: submitCallback,
  })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate(form)
  }

  const handleReset = () => {
    mutation.reset()
    clearSelection()
    setForm({ name: '', phone: '', occasion: '', date: '', message: '' })
  }

  const CHANNELS = [
    { icon: '💬', label: t('contact.whatsappLabel'), value: CONTACT.PHONE_DISPLAY, href: `https://wa.me/${CONTACT.WHATSAPP_NUMBER}`, external: true },
    { icon: '📞', label: t('contact.callLabel'), value: CONTACT.PHONE_DISPLAY, href: `tel:${CONTACT.PHONE_RAW}`, external: false },
    { icon: '🕐', label: t('contact.hoursLabel'), value: t('contact.hoursValue'), href: null },
  ]

  return (
    <section id="contact" className="py-20 bg-gold-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <Reveal>
            <p className="eyebrow">{t('contact.eyebrow')}</p>
            <h2 className="section-heading mb-4">{t('contact.title')}</h2>
            <p className="text-base text-ink-soft leading-relaxed mb-8">{t('contact.subtitle')}</p>
            <div className="flex flex-col gap-3">
              {CHANNELS.map((c) => <ChannelCard key={c.label} {...c} />)}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="ribbon-border bg-parchment p-8 md:p-9">
            <AnimatePresence mode="wait">
              {mutation.isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-display font-bold text-xl mb-2">{t('contact.successTitle')}</h3>
                  <p className="text-sm text-ink-muted">
                    {t('contact.successBody', { phone: form.phone })}
                  </p>
                  <button onClick={handleReset} className="btn-outline mt-6 text-sm">
                    {t('contact.submitAnother')}
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h3 className="font-display font-bold text-xl mb-1">{t('contact.formTitle')}</h3>
                  <p className="text-sm text-ink-muted mb-6">{t('contact.formSubtitle')}</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-ink-soft mb-1.5 tracking-wide">
                          {t('contact.nameLabel')}
                        </label>
                        <input
                          name="name" value={form.name} onChange={handleChange} required
                          placeholder={t('contact.namePlaceholder')}
                          className="w-full px-4 py-3 border border-gold-edge/25 rounded-lg text-sm text-ink bg-parchment outline-none focus:border-gold-edge focus:shadow-[0_0_0_3px_#FFF8DC] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-ink-soft mb-1.5 tracking-wide">
                          {t('contact.phoneLabel')}
                        </label>
                        <input
                          name="phone" value={form.phone} onChange={handleChange} required type="tel"
                          placeholder={t('contact.phonePlaceholder')}
                          className="w-full px-4 py-3 border border-gold-edge/25 rounded-lg text-sm text-ink bg-parchment outline-none focus:border-gold-edge focus:shadow-[0_0_0_3px_#FFF8DC] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-ink-soft mb-1.5 tracking-wide">
                        {t('contact.occasionLabel')}
                      </label>
                      <select
                        name="occasion" value={form.occasion} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gold-edge/25 rounded-lg text-sm text-ink bg-parchment outline-none focus:border-gold-edge focus:shadow-[0_0_0_3px_#FFF8DC] transition-all"
                      >
                        <option value="" disabled>{t('contact.occasionPlaceholder')}</option>
                        {OCCASIONS.map(({ id }) => (
                          <option key={id} value={t(`occasions.${id}`)}>{t(`occasions.${id}`)}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-ink-soft mb-1.5 tracking-wide">
                        {t('contact.dateLabel')}
                      </label>
                      <input
                        name="date" value={form.date} onChange={handleChange} type="date"
                        className="w-full px-4 py-3 border border-gold-edge/25 rounded-lg text-sm text-ink bg-parchment outline-none focus:border-gold-edge focus:shadow-[0_0_0_3px_#FFF8DC] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-ink-soft mb-1.5 tracking-wide">
                        {t('contact.messageLabel')}
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        rows={3} placeholder={t('contact.messagePlaceholder')}
                        className="w-full px-4 py-3 border border-gold-edge/25 rounded-lg text-sm text-ink bg-parchment outline-none focus:border-gold-edge focus:shadow-[0_0_0_3px_#FFF8DC] transition-all resize-none"
                      />
                    </div>

                    {mutation.isError && (
                      <p className="text-sm text-red-600">Something went wrong — please try again or WhatsApp us directly.</p>
                    )}

                    <button type="submit" disabled={mutation.isPending} className="btn-gold w-full justify-center mt-1 disabled:opacity-60">
                      {mutation.isPending ? '…' : t('contact.submit')}
                    </button>
                    <p className="text-[11px] text-ink-muted text-center">{t('contact.formNote')}</p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
