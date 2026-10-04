import Image from "next/image";

/**
 * An app's icon, or a plain initial tile when the app has no icon artwork yet
 * (apps still in the build stage). Never invents artwork.
 */
export function AppIcon({
  icon,
  name,
  size,
  className = "",
}: {
  icon?: string;
  name: string;
  size: number;
  className?: string;
}) {
  if (icon) {
    return (
      <Image
        src={icon}
        alt=""
        width={size}
        height={size}
        priority={size >= 56}
        className={className}
      />
    );
  }
  return (
    <span
      aria-hidden
      style={{ width: size, height: size, fontSize: size * 0.45 }}
      className={`${className} font-display text-indigo-soft inline-flex shrink-0 items-center justify-center font-semibold`}
    >
      {name.trim().charAt(0).toUpperCase()}
    </span>
  );
}
