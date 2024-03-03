"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { HeroParallax, products } from "../components/ui/hero-parallax";

export default function Page() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return <HeroParallax products={products} />;
}
