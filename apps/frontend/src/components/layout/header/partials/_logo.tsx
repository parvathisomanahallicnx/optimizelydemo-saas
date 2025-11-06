"use client";
import Image from "next/image";
import Link from "next/link";
import { type JSX, type FunctionComponent } from "react";
import useFlag from "@/useFlag";

type LogoProps = JSX.IntrinsicElements["a"] & {
  logo?: string;
  logoDark?: string;
};

export const Logo: FunctionComponent<LogoProps> = ({
  logo = "/assets/moseybank-logo.svg",
  logoDark,
  ...divProps
}) => {
  // Always call useFlag at the top level
  const flagConfig = useFlag("layout_configuration", { 
    logo: "/assets/moseybank-logo.svg",
    theme_switcher: true 
  });
  
  // Use CMS-provided logos, fallback to feature flag, then default
  const logoUrl = logo !== "/assets/moseybank-logo.svg" ? logo : flagConfig.logo;
  
  return (
    <Link href="/" className="flex items-center grow-0 shrink-0" {...divProps}>
      <Image
        src={logoUrl}
        alt="Mosey Bank Logo"
        fill
        unoptimized
        priority
        className="dark:brightness-0 dark:invert !w-auto !h-12 !relative"
      />
    </Link>
  );
};

Logo.displayName = "Logo";

export default Logo;
