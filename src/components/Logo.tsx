/**
 * Brand lockup: blue wordmark on yellow, over a blue "official distributer" bar.
 *
 * Rebuilt as markup rather than a raster asset so it stays crisp at nav size and
 * on retina. Both strings are reproduced exactly as they appear on the supplied
 * artwork — note "Enterprise" (singular) and "DISTRIBUTER", which differ from the
 * "Prateek Enterprises" / "distributor" spelling used in the page copy.
 */
export function Logo({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const scale = size === 'lg' ? 'text-xl sm:text-2xl' : 'text-base'
  const barText = size === 'lg' ? 'text-[10px]' : 'text-[7px]'

  return (
    <a
      href="#top"
      aria-label="Prateek Enterprise — official Bharat Gas distributer — home"
      className="group inline-block overflow-hidden rounded-md transition-transform duration-300 hover:-translate-y-0.5"
    >
      <span className="block bg-brand-yellow px-3 pb-1 pt-1.5">
        <span
          className={`block font-extrabold leading-none tracking-tight text-brand-blue ${scale}`}
        >
          Prateek Enterprise
        </span>
      </span>
      <span className="block bg-brand-blue px-3 py-1">
        <span
          className={`block text-center font-bold uppercase leading-none tracking-[0.18em] text-white ${barText}`}
        >
          Official Distributer
        </span>
      </span>
    </a>
  )
}
