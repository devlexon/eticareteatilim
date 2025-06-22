"use client"

import Image from "next/image"
import { Star, Heart, Share2, Truck, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

export default function ProteinPage() {
  const { addItem, openCart } = useCart()

  const products = [
    {
      id: 1,
      name: "BEAST MODE WHEY PROTEIN",
      subtitle: "İzole Whey Protein - Çikolata Aroması",
      price: "349₺",
      originalPrice: "449₺",
      discount: "22",
      rating: 4.8,
      reviews: 1247,
      image: "/placeholder.svg?height=400&width=400",
      inStock: true,
      features: ["30g Protein", "Zero Sugar", "Fast Absorption", "Premium Quality"],
    },
    {
      id: 2,
      name: "TITAN WHEY ISOLATE",
      subtitle: "Ultra Pure Whey Isolate - Vanilya",
      price: "399₺",
      originalPrice: "499₺",
      discount: "20",
      rating: 4.9,
      reviews: 892,
      image: "/placeholder.svg?height=400&width=400",
      inStock: true,
      features: ["35g Protein", "Lactose Free", "Instant Mix", "No Artificial Colors"],
    },
  ]

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: Number.parseInt(product.price.replace("₺", "")),
      originalPrice: product.originalPrice ? Number.parseInt(product.originalPrice.replace("₺", "")) : undefined,
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
            <span className="text-gray-500">Ana Sayfa</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-red-600 font-semibold">Protein</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">PROTEİN ÜRÜNLER</h1>
          <p className="text-xl text-red-100">En kaliteli whey protein çeşitleri burada!</p>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">FİLTRELE</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Fiyat Aralığı</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">100₺ - 200₺</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">200₺ - 300₺</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">300₺ - 400₺</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">400₺+</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Protein Tipi</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Whey Isolate</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Whey Concentrate</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Casein</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Plant Based</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Aroma</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Çikolata</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Vanilya</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Çilek</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Muz</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{products.length} ürün bulundu</p>
              <select className="border border-gray-300 rounded-lg px-4 py-2">
                <option>Önerilen Sıralama</option>
                <option>Fiyat: Düşükten Yükseğe</option>
                <option>Fiyat: Yüksekten Düşüğe</option>
                <option>En Çok Satan</option>
                <option>En Yeni</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
                >
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
                      <Badge className="bg-red-600 text-white font-bold">%{product.discount} İNDİRİM</Badge>
                    </div>

                    {/* Wishlist & Share */}
                    <div className="absolute top-2 right-2 flex flex-col space-y-2">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                        <Heart className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50">
                        <Share2 className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>

                    {/* Stock Status */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">STOKTA YOK</span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <div className="mb-2">
                      <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{product.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-1">{product.subtitle}</p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
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
                      <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-red-600">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                      </div>
                    </div>

                    <Button
                      className={`w-full font-bold ${
                        product.inStock
                          ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      disabled={!product.inStock}
                      onClick={() => handleAddToCart(product)}
                    >
                      {product.inStock ? "SEPETE EKLE" : "STOKTA YOK"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">ÜCRETSİZ KARGO</h3>
              <p className="text-gray-600">150₺ üzeri siparişlerde ücretsiz kargo</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">GÜVENLİ ALIŞVERİŞ</h3>
              <p className="text-gray-600">SSL sertifikası ile güvenli ödeme</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">ORİJİNAL ÜRÜN</h3>
              <p className="text-gray-600">%100 orijinal ve kaliteli ürünler</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
