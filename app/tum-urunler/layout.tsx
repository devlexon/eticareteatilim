import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tüm Ürünler - ProteinOCN",
  description:
    "En kaliteli spor besin takviyeleri ve protein ürünleri. Whey protein, kreatin, pre-workout ve daha fazlası.",
}

export default function TumUrunlerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
