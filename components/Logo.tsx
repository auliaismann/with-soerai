import Image from "next/image";

interface LogoProps {
  className?: string;
  withTagline?: boolean;
}

export default function Logo({ className, withTagline = false }: LogoProps) {
  void withTagline;

  return (
    <Image
      src="/images/logo-withsoerai.png"
      alt="WITH SOERAI"
      width={370}
      height={92}
      className={className}
    />
  );
}
