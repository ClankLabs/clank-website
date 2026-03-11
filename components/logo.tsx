import Image from "next/image";

export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/llama.png"
      alt="Clank"
      width={size}
      height={size}
      className={`rounded-lg ${className}`}
    />
  );
}
