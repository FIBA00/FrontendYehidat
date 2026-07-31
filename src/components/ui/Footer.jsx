import { useTranslation } from 'react-i18next'
import { CONTACT, SOCIAL } from '../../data/constants'

const QUICK_LINK_KEYS = [
  { key: 'occasions', href: '#occasions' },
  { key: 'how',       href: '#how' },
  { key: 'packages',  href: '#packages' },
  { key: 'gallery',   href: '#gallery' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-ink text-parchment/70">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          <div>
            <p className="font-display font-bold text-xl text-gold mb-3">Yehidat</p>
            <p className="text-sm leading-relaxed max-w-xs">{t('footer.brandDesc')}</p>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-gold mb-4">
              {t('footer.quickLinks')}
            </p>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINK_KEYS.map(({ key, href }) => (
                <li key={key}>
                  <a href={href} className="text-sm text-parchment/65 hover:text-gold transition-colors duration-150">
                    {t(`nav.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-gold mb-4">
              {t('footer.contact')}
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={`https://wa.me/${CONTACT.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-sm text-parchment/65 hover:text-gold transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.PHONE_RAW}`} className="text-sm text-parchment/65 hover:text-gold transition-colors">
                  {CONTACT.PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.EMAIL}`} className="text-sm text-parchment/65 hover:text-gold transition-colors">
                  {CONTACT.EMAIL}
                </a>
              </li>
              <li className="text-sm text-parchment/40 mt-1">{CONTACT.LOCATION}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-parchment/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-parchment/40">
          <span>© {new Date().getFullYear()} Yehidat. {t('footer.rights')}</span>
          <div className="flex gap-3">
            {[
              { href: SOCIAL.INSTAGRAM, label: 'Instagram', emoji: '📸' },
              { href: SOCIAL.TIKTOK,    label: 'TikTok',    emoji: '🎵' },
              { href: SOCIAL.TELEGRAM,  label: 'Telegram',  emoji: '✈️' },
            ].map(({ href, label, emoji }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-parchment/15 rounded-lg flex items-center justify-center text-sm hover:border-gold hover:text-gold transition-colors"
              >
                {emoji}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
