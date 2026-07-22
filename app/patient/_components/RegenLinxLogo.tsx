// ---------------------------------------------------------------------------
// RegenLinx wordmark
// Text-based logo matching the RegenLinx brand system. No raster logo asset was
// supplied, so this renders a clean, scalable wordmark. Swap for a next/image
// <Image> once an official logo file is provided.
// ---------------------------------------------------------------------------
export function RegenLinxLogo({
  className = "",
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span className="text-2xl font-bold tracking-tight text-slate-900">
        Regen<span className="text-blue-600">Linx</span>
      </span>
      {showTagline && (
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          a division of Medlinx
        </span>
      )}
    </div>
  );
}
