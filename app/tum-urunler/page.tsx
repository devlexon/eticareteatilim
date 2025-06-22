"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"

export default function TumUrunlerPage() {
  const { addItem, openCart } = useCart()

  const products = [
    {
      id: 1,
      name: "WHEY PROTEIN",
      description: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
      price: 699,
      rating: 4.8,
      reviewCount: 17613,
      image: "/placeholder.svg?height=300&width=300",
      slug: "whey-protein",
    },
    {
      id: 2,
      name: "CREATINE",
      description: "EN POPÜLER SPORCU TAKVİYESİ",
      price: 239,
      rating: 4.9,
      reviewCount: 14714,
      image: "/placeholder.svg?height=300&width=300",
      slug: "creatine",
    },
    {
      id: 3,
      name: "CREAM OF RICE",
      description: "EN LEZZETLİ PİRİNÇ KREMASI",
      price: 299,
      rating: 4.7,
      reviewCount: 8693,
      image: "/placeholder.svg?height=300&width=300",
      slug: "cream-of-rice",
    },
    {
      id: 4,
      name: "MASS GAINER",
      description: "YÜKSEK KALORİLİ PRAKTİK ÇÖZÜM",
      price: 1299,
      rating: 4.6,
      reviewCount: 1305,
      image: "/placeholder.svg?height=300&width=300",
      slug: "mass-gainer",
    },
    {
      id: 5,
      name: "PRE-WORKOUT SUPREME",
      description: "ANTRENMANİN ÖNCESİ TAKVİYESİ",
      price: 449,
      rating: 4.8,
      reviewCount: 9644,
      image: "/placeholder.svg?height=300&width=300",
      slug: "pre-workout-supreme",
    },
    {
      id: 6,
      name: "WHEY ISOLATE",
      description: "%90 PROTEİNLİ EN SAF WHEY",
      price: 1299,
      rating: 4.9,
      reviewCount: 1419,
      image: "/placeholder.svg?height=300&width=300",
      slug: "whey-isolate",
    },
    {
      id: 7,
      name: "ZMA",
      description: "ÇİNKO - MAGNEZYUM - B6 VİTAMİNİ",
      price: 299,
      rating: 4.5,
      reviewCount: 4906,
      image: "/placeholder.svg?height=300&width=300",
      slug: "zma",
    },
    {
      id: 8,
      name: "L-CARNITINE",
      description: "TOZ FORMLU SAYESİNDE KOLAY TÜKETİM",
      price: 449,
      rating: 4.7,
      reviewCount: 3640,
      image: "/placeholder.svg?height=300&width=300",
      slug: "l-carnitine",
    },
  ]

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    openCart()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">
              Ana Sayfa
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-red-600 font-semibold">Tüm Ürünler</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">TÜM ÜRÜNLER</h1>
          <p className="text-xl text-gray-600">En kaliteli spor besin takviyeleri</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-gray-600">{products.length} ürün bulundu</span>
          </div>
          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500">
              <option>Önerilen Sıralama</option>
              <option>Fiyat: Düşükten Yükseğe</option>
              <option>Fiyat: Yüksekten Düşüğe</option>
              <option>En Çok Satan</option>
              <option>En Yeni</option>
              <option>En Çok Değerlendirilen</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-white"
            >
              <div className="relative">
                <div className="relative h-64 bg-gray-50 flex items-center justify-center">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Quick Actions */}
                <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <Link href={`/urun/${product.slug}`}>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </Link>
                </div>
              </div>

              <CardContent className="p-4 text-center">
                <Link href={`/urun/${product.slug}`}>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{product.reviewCount} Yorum</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-red-600">{product.price} TL</span>
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-bold"
                  onClick={() => handleAddToCart(product)}
                >
                  SEPETE EKLE
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3">
            DAHA FAZLA ÜRÜN YÜKLE
          </Button>
        </div>
      </div>
    </div>
  )
}
