import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'

const NAV_KEYS = [
  { key: 'occasions', href: '#occasions' },
  { key: 'how',       href: '#how' },
  { key: 'packages',  href: '#packages' },
  { key: 'gallery',   href: '#gallery' },
]

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const toggle = () => i18n.changeLanguage(i18n.language === 'am' ? 'en' : 'am')

  return (
    <button
      onClick={toggle}
      className="text-xs font-semibold text-ink-soft border border-gold rounded-full px-3 py-1.5 hover:bg-gold-pale transition-colors"
      aria-label="Switch language"
    >
      {i18n.language === 'am' ? 'EN' : 'አማ'}
    </button>
  )
}

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const handleAnchor = (href) => (e) => {
    if (isHome && href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-parchment/90 backdrop-blur-md border-b border-gold-edge/25 transition-shadow duration-200 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo — replace the placeholder div with a real <img> when logo is ready */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center font-display font-bold text-lg text-ink select-none">
              Y
            </div>
            <span className="font-display font-bold text-xl text-ink">Yehidat</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_KEYS.map(({ key, href }) => (
              <a
                key={key}
                href={isHome ? href : `/${href}`}
                onClick={handleAnchor(href)}
                className="text-sm font-medium text-ink-soft hover:text-ink transition-colors duration-150"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={isHome ? '#contact' : '/#contact'}
              onClick={handleAnchor('#contact')}
              className="btn-gold text-sm"
            >
              {t('nav.cta')}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="flex flex-col gap-1.5 p-1"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-0.5 bg-ink rounded transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-ink rounded transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-ink rounded transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gold-edge/25 bg-parchment overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_KEYS.map(({ key, href }) => (
                <a
                  key={key}
                  href={isHome ? href : `/${href}`}
                  onClick={handleAnchor(href)}
                  className="text-base font-medium text-ink-soft py-1"
                >
                  {t(`nav.${key}`)}
                </a>
              ))}
              <a
                href={isHome ? '#contact' : '/#contact'}
                onClick={handleAnchor('#contact')}
                className="btn-gold text-center text-sm mt-1"
              >
                {t('nav.cta')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
