"use client"

import Image from "next/image"
import { Star, Flame, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

export default function HomePage() {
  const { addItem, openCart } = useCart()

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id || Math.random(),
      name: product.name,
      price: Number.parseInt(product.price.replace("₺", "")),
      originalPrice: product.originalPrice ? Number.parseInt(product.originalPrice.replace("₺", "")) : undefined,
      image: product.image,
    })
    openCart()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Tiger Blood Style */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/60 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Intense workout background"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="relative">
              {/* Product Image */}
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Whey Protein Container"
                  width={400}
                  height={400}
                  className="relative z-10 drop-shadow-2xl"
                />

                {/* Badges */}
                <div className="absolute -top-4 -left-4 z-20">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-green-400 text-black font-bold text-lg px-4 py-2 rotate-12">
                    YENİ FORMÜL
                  </Badge>
                </div>

                <div className="absolute -bottom-4 -right-4 z-20">
                  <div className="bg-red-600 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center font-bold border-4 border-yellow-400">
                    <span className="text-xs">SADECE</span>
                    <span className="text-lg">299₺</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="mb-6">
                <Badge className="bg-red-600 text-white font-bold text-sm px-3 py-1 mb-4">LANSMANLA ÖZEL İNDİRİM</Badge>
                <h1 className="text-6xl md:text-8xl font-black mb-4 leading-none">
                  <span className="text-red-500">BEAST</span>
                  <br />
                  <span className="text-yellow-400">MODE</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">WHEY PROTEIN ISOLATE</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">30g Protein Per Serving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Flame className="h-6 w-6 text-red-500" />
                  <span className="text-lg">Zero Sugar, Zero Fat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">Premium Quality Guaranteed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg px-8 py-4"
                >
                  FIRSATI KAÇIRMA
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-lg px-8 py-4"
                >
                  DETAYLARI GÖR
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">ÇOK SATANLAR</h2>
            <p className="text-xl text-gray-600">En popüler spor besin takviyeleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                name: "WHEY PROTEIN",
                subtitle: "İzole Whey Protein",
                price: "349₺",
                originalPrice: "449₺",
                discount: "%22 İNDİRİM",
                image: "/placeholder.svg?height=300&width=250",
                badge: "FITNESS PAKETİ",
                rating: 4.8,
              },
              {
                id: 2,
                name: "CREATINE",
                subtitle: "Monohydrate Formula",
                price: "199₺",
                originalPrice: "249₺",
                discount: "%20 İNDİRİM",
                image: "/placeholder.svg?height=300&width=250",
                badge: "YENİ FORMÜL",
                rating: 4.9,
              },
              {
                id: 3,
                name: "PRE-WORKOUT",
                subtitle: "Extreme Energy",
                price: "279₺",
                originalPrice: "329₺",
                discount: "%15 İNDİRİM",
                image: "/placeholder.svg?height=300&width=250",
                badge: "GÜNLÜK VİTAMİN",
                rating: 4.7,
              },
              {
                id: 4,
                name: "BCAA",
                subtitle: "Amino Acid Complex",
                price: "159₺",
                originalPrice: "199₺",
                discount: "%20 İNDİRİM",
                image: "/placeholder.svg?height=300&width=250",
                badge: "SPOR GIDASI",
                rating: 4.6,
              },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative">
                  <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-600 text-white font-bold">{product.discount}</Badge>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600 text-white text-xs">{product.badge}</Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="mb-2">
                    <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.subtitle}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-red-600">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    </div>
                  </div>

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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">HIZLI TESLİMAT</h3>
              <p className="text-gray-300">Aynı gün kargo ile hızlı teslimat</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">ORİJİNAL ÜRÜN</h3>
              <p className="text-gray-300">%100 orijinal ve kaliteli ürünler</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">UZMAN DESTEĞİ</h3>
              <p className="text-gray-300">Profesyonel spor beslenme danışmanlığı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">ÖZEL İNDİRİMLERDEN HABERDAR OL</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Yeni ürünler ve kampanyalardan ilk sen haberdar ol!
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8">ABONE OL</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
