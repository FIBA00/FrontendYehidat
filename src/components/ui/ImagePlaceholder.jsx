/**
 * ImagePlaceholder
 *
 * Usage:
 *   <ImagePlaceholder src="/images/hero.jpg" alt="Hero" className="w-full h-96 object-cover rounded-2xl" hint="900 × 1080 px" />
 *
 * When `src` is null/undefined, renders a dashed placeholder with the hint text.
 * When `src` is provided, renders a normal <img> (or <video> if type="video").
 */
export default function ImagePlaceholder({
  src,
  alt = '',
  hint = '',
  className = '',
  type = 'image',
  videoProps = {},
}) {
  if (!src) {
    return (
      <div className={`img-placeholder ${className}`}>
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} opacity={0.35}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="leading-snug whitespace-pre-line">{hint || 'Replace with image'}</span>
      </div>
    )
  }

  if (type === 'video') {
    return (
      <video autoPlay muted loop playsInline className={className} {...videoProps}>
        <source src={src} type="video/mp4" />
      </video>
    )
  }

  return <img src={src} alt={alt} className={`${className} object-cover`} />
}
