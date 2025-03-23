import Image from "next/image";

interface AppLogoProps {
  size: number;
}

export default function AppLogo({ size }: AppLogoProps) {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image src="/logo.png" alt="FAPViz Logo" width={size} height={size} />
    </div>
  );
}
