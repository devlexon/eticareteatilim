"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ChevronDown, ChevronUp, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { addItem, openCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedFlavor, setSelectedFlavor] = useState("cikolatali")
  const [selectedSize, setSelectedSize] = useState("1kg")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  // Protein Ocean benzeri ürün datası
  const product = {
    id: 1,
    name: "WHEY PROTEIN",
    brand: "PROTEIN OCEAN",
    rating: 4.9,
    reviewCount: 2847,
    inStock: true,
    images: [
      "/placeholder.svg?height=600&width=600", 
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600"
    ],
    flavors: [
      { 
        id: "cikolatali", 
        name: "Çikolatalı", 
        image: "/placeholder.svg?height=80&width=80",
        color: "#8B4513"
      },
      { 
        id: "vanilyali", 
        name: "Vanilyalı", 
        image: "/placeholder.svg?height=80&width=80",
        color: "#F5DEB3"
      },
      { 
        id: "cilekli", 
        name: "Çilekli", 
        image: "/placeholder.svg?height=80&width=80",
        color: "#FF69B4"
      },
      { 
        id: "muzlu", 
        name: "Muzlu", 
        image: "/placeholder.svg?height=80&width=80",
        color: "#FFE135"
      },
      { 
        id: "karamelli", 
        name: "Karamelli", 
        image: "/placeholder.svg?height=80&width=80",
        color: "#CD853F"
      },
      { 
        id: "hindistancevizli", 
        name: "Hindistancevizli", 
        image: "/placeholder.svg?height=80&width=80",
        color: "#FFFFFF"
      }
    ],
    sizes: [
      { 
        id: "500g", 
        name: "500G", 
        servings: 20, 
        price: 299.90,
        originalPrice: 349.90,
        image: "/placeholder.svg?height=100&width=80",
        mostPopular: false
      },
      { 
        id: "1kg", 
        name: "1KG", 
        servings: 40, 
        price: 499.90,
        originalPrice: 599.90,
        image: "/placeholder.svg?height=120&width=80",
        mostPopular: true
      },
      { 
        id: "2kg", 
        name: "2KG", 
        servings: 80, 
        price: 899.90,
        originalPrice: 1099.90,
        image: "/placeholder.svg?height=140&width=80",
        mostPopular: false
      }
    ],
    badges: ["EN ÇOK SATAN", "HIZLI KARGO", "GÜVENLİ ÖDEME"],
    shortDescription: "Yüksek kaliteli whey protein izolat ile kas gelişiminizi destekleyin",
    features: [
      "✓ %90 Protein İçeriği",
      "✓ Hızlı Emilim",
      "✓ BCAA ve EAA Aminoasit Profili",
      "✓ Düşük Karbonhidrat ve Yağ",
      "✓ Laktoz İçermez",
      "✓ Yapay Renklendirici İçermez"
    ],
    nutritionFacts: [
      { name: "Enerji", value: "110 kcal", per100g: "367 kcal" },
      { name: "Protein", value: "25g", per100g: "83g" },
      { name: "Karbonhidrat", value: "1.2g", per100g: "4g" },
      { name: "Yağ", value: "0.5g", per100g: "1.7g" },
      { name: "Tuz", value: "0.1g", per100g: "0.33g" },
      { name: "BCAA", value: "5.5g", per100g: "18.3g" }
    ],
    ingredients: "Whey Protein İzolat (%90), Doğal Aroma, Tatlandırıcı (Stevia), Emülgatör (Soya Lesitini), Digestif Enzim Karışımı",
    usage: "1 ölçek (30g) powder'ı 200-300ml soğuk su veya süt ile karıştırın. Antrenman sonrası veya öğünler arası tüketin.",
    warnings: "Çocukların erişemeyeceği yerde, serin ve kuru ortamda saklayın. Günlük önerilen dozajı aşmayın.",
    certification: "ISO 22000, HACCP, GMP sertifikalı tesislerde üretilmiştir."
  }

  const selectedSizeData = product.sizes.find((size) => size.id === selectedSize)
  const selectedFlavorData = product.flavors.find((flavor) => flavor.id === selectedFlavor)
  const discount = selectedSizeData ? Math.round(((selectedSizeData.originalPrice - selectedSizeData.price) / selectedSizeData.originalPrice) * 100) : 0

  const handleAddToCart = () => {
    if (!selectedSizeData) return
    addItem({
      id: product.id,
      name: `${product.name} - ${selectedFlavorData?.name} - ${selectedSizeData.name}`,
      price: selectedSizeData.price,
      image: product.images[0],
      variant: `${selectedFlavorData?.name} - ${selectedSizeData.name}`,
    })
    openCart()
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb - Protein Ocean Stili */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm flex items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/protein" className="hover:text-blue-600 transition-colors">
              Protein
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Whey Protein</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sol Taraf - Ürün Görselleri */}
          <div className="space-y-4">
            {/* Ana Görsel */}
            <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-contain p-8 transition-all duration-300 hover:scale-105"
              />
              
              {/* Discount Badge */}
              {discount > 0 && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white font-bold text-sm px-3 py-1">
                    %{discount} İNDİRİM
                  </Badge>
                </div>
              )}

              {/* Wishlist & Share */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3 justify-center">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? "border-blue-500 shadow-lg scale-105" 
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Sağ Taraf - Ürün Bilgileri */}
          <div className="space-y-6">
            {/* Marka ve Ürün Adı */}
            <div>
              <p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-1">
                {product.brand}
              </p>
              <h1 className="text-4xl font-black text-gray-900 mb-3">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg">
                {product.shortDescription}
              </p>
            </div>

            {/* Rating ve Yorumlar */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) 
                        ? "text-yellow-400 fill-current" 
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="font-semibold text-gray-900 ml-2">
                  {product.rating}
                </span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <Link href="#yorumlar" className="text-blue-600 hover:text-blue-700 font-medium">
                {product.reviewCount} yorum
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.badges.map((badge, index) => (
                <Badge
                  key={index}
                  className="bg-green-100 text-green-800 font-medium px-3 py-1"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Aroma Seçimi */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                AROMA SEÇİNİZ
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {product.flavors.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedFlavor(flavor.id)}
                    className={`relative p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                      selectedFlavor === flavor.id
                        ? "border-blue-500 bg-blue-50 shadow-lg"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image
                        src={flavor.image}
                        alt={flavor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-center block">
                      {flavor.name}
                    </span>
                    {selectedFlavor === flavor.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Boyut Seçimi */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                BOYUT SEÇİNİZ
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`relative p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                      selectedSize === size.id
                        ? "border-blue-500 bg-blue-50 shadow-lg"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {size.mostPopular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-orange-500 text-white text-xs font-bold px-2 py-1">
                          EN POPÜLER
                        </Badge>
                      </div>
                    )}
                    
                    <div className="relative w-16 h-20 mx-auto mb-2">
                      <Image
                        src={size.image}
                        alt={size.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    <div className="text-center">
                      <div className="font-bold text-lg">{size.name}</div>
                      <div className="text-xs text-gray-600 mb-2">
                        {size.servings} servis
                      </div>
                      <div className="font-bold text-blue-600">
                        ₺{size.price}
                      </div>
                      {size.originalPrice && (
                        <div className="text-xs text-gray-500 line-through">
                          ₺{size.originalPrice}
                        </div>
                      )}
                    </div>

                    {selectedSize === size.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Fiyat */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-baseline space-x-3 mb-2">
                <span className="text-4xl font-black text-gray-900">
                  ₺{selectedSizeData?.price}
                </span>
                {selectedSizeData?.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ₺{selectedSizeData.originalPrice}
                  </span>
                )}
                {discount > 0 && (
                  <Badge className="bg-red-100 text-red-800 font-bold">
                    %{discount} İNDİRİM
                  </Badge>
                )}
              </div>
              <p className="text-gray-600">
                Servis başına: ₺{selectedSizeData ? (selectedSizeData.price / selectedSizeData.servings).toFixed(2) : "0"}
              </p>
            </div>

            {/* Sepete Ekle Butonu */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                size="lg"
              >
                🛒 SEPETE EKLE
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl"
                >
                  ❤️ FAVORİLERE EKLE
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-xl"
                >
                  📊 KARŞILAŞTIR
                </Button>
              </div>
            </div>

            {/* Güven Rozeti */}
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span className="font-medium text-green-800">Ücretsiz Kargo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">🚚</span>
                  <span className="font-medium text-green-800">Hızlı Teslimat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">🔒</span>
                  <span className="font-medium text-green-800">Güvenli Ödeme</span>
                </div>
              </div>
            </div>

            {/* Ürün Özellikleri */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-gray-900">
                ÜRÜN ÖZELLİKLERİ
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-600 font-bold">{feature.charAt(0)}</span>
                    <span className="text-gray-700">{feature.substring(1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Detaylı Bilgiler */}
        <div className="mt-16 space-y-4">
          {/* Besin Değerleri */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("nutrition")}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-bold text-xl text-gray-900">BESİN DEĞERLERİ</span>
              {expandedSections.nutrition ? (
                <ChevronUp className="h-6 w-6 text-gray-600" />
              ) : (
                <ChevronDown className="h-6 w-6 text-gray-600" />
              )}
            </button>
            {expandedSections.nutrition && (
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-4 font-semibold">Besin Değeri</th>
                        <th className="text-left py-3 px-4 font-semibold">30g'da</th>
                        <th className="text-left py-3 px-4 font-semibold">100g'da</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {product.nutritionFacts.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{item.name}</td>
                          <td className="py-3 px-4">{item.value}</td>
                          <td className="py-3 px-4">{item.per100g}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* İçerikler */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("ingredients")}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-bold text-xl text-gray-900">İÇERİKLER</span>
              {expandedSections.ingredients ? (
                <ChevronUp className="h-6 w-6 text-gray-600" />
              ) : (
                <ChevronDown className="h-6 w-6 text-gray-600" />
              )}
            </button>
            {expandedSections.ingredients && (
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{product.ingredients}</p>
              </div>
            )}
          </div>

          {/* Kullanım Şekli */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("usage")}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-bold text-xl text-gray-900">KULLANIM ŞEKLİ</span>
              {expandedSections.usage ? (
                <ChevronUp className="h-6 w-6 text-gray-600" />
              ) : (
                <ChevronDown className="h-6 w-6 text-gray-600" />
              )}
            </button>
            {expandedSections.usage && (
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">{product.usage}</p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">⚠️ Uyarılar:</h4>
                  <p className="text-amber-700 text-sm">{product.warnings}</p>
                </div>
              </div>
            )}
          </div>

          {/* Sertifikalar */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("certification")}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="font-bold text-xl text-gray-900">SERTİFİKALAR</span>
              {expandedSections.certification ? (
                <ChevronUp className="h-6 w-6 text-gray-600" />
              ) : (
                <ChevronDown className="h-6 w-6 text-gray-600" />
              )}
            </button>
            {expandedSections.certification && (
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{product.certification}</p>
                <div className="flex space-x-4 mt-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <span className="text-2xl">🏆</span>
                    <p className="text-sm font-medium text-blue-800 mt-1">ISO 22000</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <span className="text-2xl">✅</span>
                    <p className="text-sm font-medium text-green-800 mt-1">HACCP</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <span className="text-2xl">🔬</span>
                    <p className="text-sm font-medium text-purple-800 mt-1">GMP</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}