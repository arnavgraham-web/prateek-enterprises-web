/**
 * Bharat Petroleum "energy roundel" — shown alongside the Prateek Enterprise
 * lockup to signal the authorised-distributor relationship at a glance.
 *
 * Source: Wikimedia Commons, File:Bharat_Petroleum_logo.svg — simple geometric
 * shapes/text, ineligible for copyright (PD-textlogo), though the mark itself
 * remains BPCL's trademark. Sits on its own white chip so it stays legible
 * over both the transparent hero header and photographic backgrounds — the
 * SVG's interior is transparent, not white, so it would otherwise pick up
 * whatever is behind it.
 */
export function BpclBadge() {
  return (
    <img
      src="/images/bpcl-logo.svg"
      alt="Bharat Petroleum"
      className="h-10 w-auto shrink-0 rounded-md bg-white p-1 shadow-sm ring-1 ring-black/5"
    />
  )
}
