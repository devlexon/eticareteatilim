"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ChevronDown, ChevronUp, Heart, Share2, ShoppingCart, Truck, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { addItem, openCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedFlavor, setSelectedFlavor] = useState("birthday-cake")
  const [selectedSize, setSelectedSize] = useState("400g")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  // Mock product data - Protein Ocean exact copy
  const product = {
    id: 1,
    name: "WHEY PROTEIN",
    subtitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 4.8,
    reviewCount: 17613,
    inStock: true,
    images: [
      "/placeholder.svg?height=500&width=500", 
      "/placeholder.svg?height=500&width=500"
    ],
    flavors: [
      { id: "birthday-cake", name: "Birthday Cake", image: "/placeholder.svg?height=60&width=60" },
      { id: "biskivi", name: "Biskivi", image: "/placeholder.svg?height=60&width=60" },
      { id: "cookie-cream", name: "Cookie & Cream", image: "/placeholder.svg?height=60&width=60" },
      { id: "choco-nut", name: "Choco Nut", image: "/placeholder.svg?height=60&width=60" },
      { id: "dubai-chocolate", name: "Dubai Çikolata", image: "/placeholder.svg?height=60&width=60" },
      { id: "chocolate", name: "Çikolata", image: "/placeholder.svg?height=60&width=60" },
      { id: "strawberry", name: "Çilek", image: "/placeholder.svg?height=60&width=60" },
      { id: "banana", name: "Muz", image: "/placeholder.svg?height=60&width=60" },
      { id: "salted-caramel", name: "Salted Caramel", image: "/placeholder.svg?height=60&width=60" },
    ],
    sizes: [
      { 
        id: "400g", 
        name: "400G", 
        servings: 16, 
        price: 699, 
        image: "/placeholder.svg?height=80&width=60" 
      },
      { 
        id: "1.6kg", 
        name: "1.6KG", 
        servings: 64, 
        price: 1899, 
        image: "/placeholder.svg?height=80&width=60" 
      },
      {
        id: "1.6kg-x2",
        name: "1.6KG X 2 ADET",
        servings: 128,
        price: 3299,
        originalPrice: 3798,
        discount: 9,
        image: "/placeholder.svg?height=80&width=60",
      },
    ],
    badges: ["VEJETARYEN", "GLUTENSİZ"],
    description: `Biyoyararılığı ve hızlı sindirim sayesinde dünyada en popüler protein kaynağıdır. İlave sindirim enzimi ile zenginleştirilmiştir.`,
    features: [
      "Patentli DigeZyme® İlaveli.",
      "Normal protein metabolizmasına katkıda bulunan B6 Vitamini ilaveli.", 
      "Birbirinden lezzetli aromalar ile keyifle tüketilebilir.",
    ],
    specifications: [
      { name: "Protein", value: "24g", daily: "48%" },
      { name: "Karbonhidrat", value: "2.1g", daily: "1%" },
      { name: "Yağ", value: "0.8g", daily: "1%" },
      { name: "Kalori", value: "110", daily: "6%" },
      { name: "Sodyum", value: "120mg", daily: "5%" },
    ],
    usage: "1 ölçek (30g) ürünü 200-250ml su veya süt ile karıştırın. Günde 1-2 porsiyon tüketin.",
    certificates: "Ürün analiz sertifikaları ve test raporları mevcuttur.",
  }

  const selectedSizeData = product.sizes.find((size) => size.id === selectedSize)
  const pricePerServing = selectedSizeData ? (selectedSizeData.price / selectedSizeData.servings).toFixed(2) : "0"

  const handleAddToCart = () => {
    if (!selectedSizeData) return
    addItem({
      id: product.id,
      name: `${product.name} - ${product.flavors.find((f) => f.id === selectedFlavor)?.name} - ${selectedSizeData.name}`,
      price: selectedSizeData.price,
      image: product.images[0],
      variant: `${product.flavors.find((f) => f.id === selectedFlavor)?.name} - ${selectedSizeData.name}`,
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
      {/* Header Banner - Orange Gradient */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 text-center text-sm font-medium">
        🚚 99 TL ve üzeri alışverişlerinizde KARGO BEDAVA!
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm flex items-center space-x-2">
            <Link href="/" className="text-gray-500 hover:text-orange-600">
              Anasayfa  
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/protein" className="text-gray-500 hover:text-orange-600">
              Protein
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/protein" className="text-gray-500 hover:text-orange-600">
              Proteinler
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-orange-600 font-semibold">WHEY PROTEIN</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sol Taraf - Product Images */}
          <div>
            <div className="relative mb-4">
              <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
                {/* Sale Badge */}
                {selectedSizeData?.discount && (
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      %{selectedSizeData.discount} İNDİRİM
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-orange-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Sağ Taraf - Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-base text-gray-600 mb-4">{product.subtitle}</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? "text-yellow-400 fill-current" 
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} değerlendirme)
                </span>
              </div>
              
              {/* Badges */}
              <div className="flex space-x-2 mb-4">
                {product.badges.map((badge, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      badge === "VEJETARYEN" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">Stokta var</span>
              </div>
            </div>

            {/* Flavor Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-base mb-4 text-gray-900">AROMA:</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.flavors.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedFlavor(flavor.id)}
                    className={`relative p-3 rounded-lg border transition-all ${
                      selectedFlavor === flavor.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="relative w-10 h-10 mx-auto mb-2">
                      <Image
                        src={flavor.image || "/placeholder.svg"}
                        alt={flavor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-center block leading-tight">
                      {flavor.name}
                    </span>
                    {selectedFlavor === flavor.id && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-base mb-4 text-gray-900">BOYUT:</h3>
              <div className="space-y-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`relative w-full p-4 rounded-lg border transition-all flex items-center ${
                      selectedSize === size.id 
                        ? "border-orange-500 bg-orange-50" 
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="relative w-12 h-16 mr-4">
                      <Image 
                        src={size.image || "/placeholder.svg"} 
                        alt={size.name} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-sm">{size.name}</div>
                      <div className="text-xs text-gray-600">({size.servings} servis)</div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-900">{size.price} TL</div>
                      {size.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {size.originalPrice} TL
                        </div>
                      )}
                    </div>

                    {selectedSize === size.id && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    )}
                    
                    {size.discount && (
                      <div className="absolute -top-2 -left-2">
                        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          %{size.discount} İNDİRİM
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline space-x-3 mb-2">
                <span className="text-3xl font-bold text-gray-900">
                  {selectedSizeData?.price} TL
                </span>
                {selectedSizeData?.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {selectedSizeData.originalPrice} TL
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-600">
                {pricePerServing} TL / Servis
              </span>
            </div>

            {/* Add to Cart */}
            <div className="mb-8">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base py-3 rounded-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                SEPETE EKLE
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mb-8 text-xs text-center">
              <div className="flex flex-col items-center space-y-1">
                <Truck className="w-6 h-6 text-orange-500" />
                <span className="text-gray-600">Ücretsiz Kargo</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Shield className="w-6 h-6 text-orange-500" />
                <span className="text-gray-600">Güvenli Ödeme</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Award className="w-6 h-6 text-orange-500" />
                <span className="text-gray-600">Kaliteli Ürün</span>
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1 font-bold">•</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-2">
              {/* Besin İçeriği */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("nutrition")}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                >
                  <span className="font-semibold text-sm">BESİN İÇERİĞİ</span>
                  {expandedSections.nutrition ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </button>
                {expandedSections.nutrition && (
                  <div className="px-4 pb-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b text-xs text-gray-600">
                            <th className="text-left py-2">Besin Değeri</th>
                            <th className="text-left py-2">Miktar</th>
                            <th className="text-left py-2">Günlük %</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.specifications.map((spec, index) => (
                            <tr key={index} className="border-b text-xs">
                              <td className="py-2">{spec.name}</td>
                              <td className="py-2 font-semibold">{spec.value}</td>
                              <td className="py-2">{spec.daily}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Kullanım Şekli */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("usage")}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                >
                  <span className="font-semibold text-sm">KULLANIM ŞEKLİ</span>
                  {expandedSections.usage ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </button>
                {expandedSections.usage && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-700 text-sm">{product.usage}</p>
                  </div>
                )}
              </div>

              {/* Analiz Sertifikaları */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("certificates")}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                >
                  <span className="font-semibold text-sm">ANALİZ SERTİFİKALARI</span>
                  {expandedSections.certificates ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </button>
                {expandedSections.certificates && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-700 text-sm">{product.certificates}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}