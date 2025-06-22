"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Star, ChevronDown, ChevronUp, Check, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

export default function WheyProteinPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { addItem, openCart } = useCart()
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedFlavor, setSelectedFlavor] = useState(searchParams.get('Aroma') || "Birthday-Cake")
  const [selectedSize, setSelectedSize] = useState(searchParams.get('Boyut') || "400g")
  const [quantity, setQuantity] = useState(1)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // URL parametrelerini güncelle
  useEffect(() => {
    const params = new URLSearchParams()
    params.set('Aroma', selectedFlavor)
    params.set('Boyut', selectedSize)
    router.replace(`/urun/whey-protein?${params.toString()}`, { scroll: false })
  }, [selectedFlavor, selectedSize, router])

  const product = {
    id: 1,
    name: "WHEY PROTEIN",
    subtitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 4.8,
    reviewCount: 17613,
    inStock: true,
    images: {
      "Birthday-Cake": [
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
      ],
      "Biskivi": [
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
      ],
      "Cookie-Cream": [
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
      ],
      "Choco-Nut": [
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
      ],
      "Dubai-Chocolate": [
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
      ],
      "Chocolate": [
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
      ],
      "Strawberry": [
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
      ],
      "Banana": [
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
      ],
      "Salted-Caramel": [
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
        "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp",
      ]
    },
    flavors: [
      { id: "Birthday-Cake", name: "Birthday Cake", image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
      { id: "Biskivi", name: "Biskivi", image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
      { id: "Cookie-Cream", name: "Cookie & Cream", image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
      { id: "Choco-Nut", name: "Choco Nut", image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
      { id: "Dubai-Chocolate", name: "Dubai Çikolata", image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
      { id: "Chocolate", name: "Çikolata", image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
      { id: "Strawberry", name: "Çilek", image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
      { id: "Banana", name: "Muz", image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
      { id: "Salted-Caramel", name: "Salted Caramel", image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
    ],
    sizes: [
      { id: "400g", name: "400G", servings: 16, price: 699, image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
      { id: "1.6kg", name: "1.6KG", servings: 64, price: 1899, image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
      { id: "1.6kg-x2", name: "1.6KG X 2 ADET", servings: 128, price: 3299, originalPrice: 3798, discount: 9, image: "https://cdn.myikas.com/images/00b6c111-71dc-4400-932f-8db87e5da64c/3924c0ca-96b9-4cc6-abbb-b04a896f8712/720/wheyproteinbirthdaycake-1500cc.webp" },
    ],
    badges: ["VEJETARYEN", "GLUTENSİZ"],
    description: `Biyoyararılığı ve hızlı sindirim sayesinde dünyada en popüler protein kaynağıdır. İlave sindirim enzimi ile zenginleştirilmiştir.`,
    features: [
      "Patentli DigeZyme® İlaveli.",
      "Normal protein metabolizmasına katkıda bulunan B6 Vitamini ilaveli.",
      "Birbirinden lezzetli aromalar ile keyifle tüketilebilir.",
    ],
    nutritionValues: [
      { nutrient: "Enerji", per30g: "110 kcal", per100g: "367 kcal" },
      { nutrient: "Yağ", per30g: "0.8 g", per100g: "2.7 g" },
      { nutrient: "- Doymuş yağ", per30g: "0.5 g", per100g: "1.7 g" },
      { nutrient: "Karbonhidrat", per30g: "2.1 g", per100g: "7.0 g" },
      { nutrient: "- Şeker", per30g: "1.8 g", per100g: "6.0 g" },
      { nutrient: "Protein", per30g: "24 g", per100g: "80 g" },
      { nutrient: "Tuz", per30g: "0.30 g", per100g: "1.0 g" },
      { nutrient: "Kalsiyum", per30g: "150 mg (%19*)", per100g: "500 mg" },
      { nutrient: "Fosfor", per30g: "120 mg (%17*)", per100g: "400 mg" },
      { nutrient: "Magnezyum", per30g: "25 mg (%7*)", per100g: "83 mg" },
      { nutrient: "B6 Vitamini", per30g: "0.42 mg (%30*)", per100g: "1.4 mg" },
    ],
    aminoProfile: [
      { amino: "Alanin", value: "1.2 g" }, { amino: "Arginin", value: "0.6 g" }, { amino: "Aspartik Asit", value: "2.5 g" },
      { amino: "Sistin", value: "0.5 g" }, { amino: "Glutamik Asit", value: "4.1 g" }, { amino: "Glisin", value: "0.4 g" },
      { amino: "Histidin", value: "0.4 g" }, { amino: "İzolösin", value: "1.4 g" }, { amino: "Lösin", value: "2.4 g" },
      { amino: "Lizin", value: "2.1 g" }, { amino: "Metiyonin", value: "0.5 g" }, { amino: "Fenilalanin", value: "0.7 g" },
      { amino: "Prolin", value: "1.3 g" }, { amino: "Serin", value: "1.1 g" }, { amino: "Treonin", value: "1.6 g" },
      { amino: "Triptofan", value: "0.4 g" }, { amino: "Tirozin", value: "0.7 g" }, { amino: "Valin", value: "1.3 g" },
    ],
    usage: "1 ölçek (30g) ürünü 200-250ml su veya süt ile karıştırın. Günde 1-2 porsiyon tüketin.",
    certificates: "Ürün analiz sertifikaları ve test raporları mevcuttur.",
  }

  useEffect(() => {
    setSelectedImage(0)
  }, [selectedFlavor])

  const currentImages = product.images[selectedFlavor as keyof typeof product.images] || product.images["Birthday-Cake"]
  const selectedSizeData = product.sizes.find((size) => size.id === selectedSize)
  const selectedFlavorData = product.flavors.find((flavor) => flavor.id === selectedFlavor)
  const pricePerServing = selectedSizeData ? (selectedSizeData.price / selectedSizeData.servings).toFixed(2) : "0"

  const handleAddToCart = () => {
    if (!selectedSizeData || !selectedFlavorData) return
    
    const uniqueId = `${product.id}-${selectedFlavor}-${selectedSize}`
    
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: uniqueId,
        name: `${product.name} - ${selectedFlavorData.name}`,
        price: selectedSizeData.price,
        image: currentImages[0],
        variant: `${selectedFlavorData.name} - ${selectedSizeData.name}`,
      })
    }
    openCart()
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <nav className="text-sm flex items-center space-x-2">
            <Link href="/" className="text-gray-500 hover:text-red-600">Anasayfa</Link>
            <span className="text-gray-400">/</span>
            <Link href="/protein" className="text-gray-500 hover:text-red-600">Protein</Link>
            <span className="text-gray-400">/</span>
            <Link href="/protein" className="text-gray-500 hover:text-red-600">Proteinler</Link>
            <span className="text-gray-400">/</span>
            <span className="text-red-600 font-semibold">WHEY PROTEIN</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images - En büyük */}
          <div>
            <div className="relative mb-4">
              <div 
                className="relative w-full h-[800px] bg-transparent overflow-hidden cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Original Image - En büyük boyut */}
                <Image
                  src={currentImages[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                
                {/* Zoom Window - Radiussuz */}
                {isHovering && (
                  <div 
                    className="absolute w-40 h-40 border-2 border-gray-400 bg-white shadow-lg overflow-hidden pointer-events-none z-10"
                    style={{
                      left: `${Math.min(Math.max(mousePosition.x - 10, 0), 80)}%`,
                      top: `${Math.min(Math.max(mousePosition.y - 10, 0), 80)}%`,
                    }}
                  >
                    <Image
                      src={currentImages[selectedImage]}
                      alt={product.name}
                      fill
                      className="object-contain"
                      style={{
                        transform: 'scale(8)',
                        transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex justify-center space-x-3">
              {currentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index ? "border-blue-600 shadow-lg" : "border-gray-300"
                  }`}
                >
                  <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.subtitle}</p>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                  ))}
                </div>
                <span className="text-blue-600 font-semibold">{product.reviewCount} Yorum</span>
              </div>
              
              <div className="flex space-x-2 mb-6">
                {product.badges.map((badge, index) => (
                  <Badge key={index} className={`${badge === "VEJETARYEN" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"} font-semibold rounded-lg`}>
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Flavor Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">AROMA:</h3>
              <div className="grid grid-cols-7 gap-2">
                {product.flavors.map((flavor) => (
                  <div key={flavor.id} className="text-center">
                    <button
                      onClick={() => setSelectedFlavor(flavor.id)}
                      className={`relative w-14 h-14 rounded-lg border-2 transition-all duration-300 ease-in-out mb-1 ${
                        selectedFlavor === flavor.id ? "border-blue-600 bg-blue-50 scale-105" : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <Image src={flavor.image} alt={flavor.name} fill className="object-contain p-1 rounded-lg" />
                      {selectedFlavor === flavor.id && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center">
                          <Check className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </button>
                    <span className="text-xs font-medium text-center block leading-tight">{flavor.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">BOYUT:</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`relative p-3 rounded-xl border-2 transition-all duration-300 ease-in-out ${
                      selectedSize === size.id ? "border-blue-600 bg-blue-50 scale-105" : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="relative w-12 h-16 mx-auto mb-2">
                      <Image src={size.image} alt={size.name} fill className="object-contain" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-sm">{size.name}</div>
                      <div className="text-xs text-gray-600">({size.servings} servis)</div>
                    </div>
                    {selectedSize === size.id && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <Check className="w-2 h-2 text-white" />
                      </div>
                    )}
                    {size.discount && (
                      <div className="absolute -top-2 -left-2">
                        <Badge className="bg-red-600 text-white text-xs font-bold rounded">%{size.discount} İNDİRİM</Badge>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-gray-900">{selectedSizeData?.price} TL</span>
                  {selectedSizeData?.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">{selectedSizeData.originalPrice} TL</span>
                  )}
                </div>
                <span className="text-lg text-gray-600">{pricePerServing} TL / Servis</span>
              </div>
            </div>

            {/* Quantity & Add to Cart - Aynı yükseklik */}
            <div className="flex items-stretch space-x-4 mb-6">
              <div className="w-1/4 flex items-center border-2 border-gray-300 rounded-xl bg-white h-14">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-100 transition-colors h-full">
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-3 font-bold text-lg text-center flex-1">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-100 transition-colors h-full">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <Button
                onClick={handleAddToCart}
                className="w-3/4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-14"
              >
                🛒 SEPETE EKLE
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center space-x-6 mb-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <span>⏰</span>
                <span>1.000.000+ Mutlu Müşteri</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>🛡️</span>
                <span>Memnuniyet Garantisi</span>
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-4">
              <div className="border-b border-gray-200">
                <button onClick={() => toggleSection("nutrition")} className="w-full flex items-center justify-between py-4 text-left">
                  <span className="font-semibold text-lg">BESİN İÇERİĞİ</span>
                  {expandedSections.nutrition ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>
                {expandedSections.nutrition && (
                  <div className="pb-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Besin Değeri</th>
                            <th className="text-left py-2">30g'da</th>
                            <th className="text-left py-2">100g'da</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.nutritionValues.map((item, index) => (
                            <tr key={index} className="border-b">
                              <td className="py-2">{item.nutrient}</td>
                              <td className="py-2 font-semibold">{item.per30g}</td>
                              <td className="py-2">{item.per100g}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Aminoasit Profili (30g'da)</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {product.aminoProfile.map((amino, index) => (
                          <div key={index} className="flex justify-between py-1">
                            <span>{amino.amino}</span>
                            <span className="font-semibold">{amino.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200">
                <button onClick={() => toggleSection("usage")} className="w-full flex items-center justify-between py-4 text-left">
                  <span className="font-semibold text-lg">KULLANIM ŞEKLİ</span>
                  {expandedSections.usage ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>
                {expandedSections.usage && (
                  <div className="pb-4">
                    <p className="text-gray-700">{product.usage}</p>
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200">
                <button onClick={() => toggleSection("certificates")} className="w-full flex items-center justify-between py-4 text-left">
                  <span className="font-semibold text-lg">ANALİZ SERTİFİKALARI</span>
                  {expandedSections.certificates ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </button>
                {expandedSections.certificates && (
                  <div className="pb-4">
                    <p className="text-gray-700">{product.certificates}</p>
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