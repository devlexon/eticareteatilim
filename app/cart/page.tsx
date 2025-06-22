"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus, Minus, X, ShoppingBag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"

export default function CartPage() {
  const { state, updateQuantity, removeItem, clearCart } = useCart()

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Sepetiniz Boş</h1>
            <p className="text-gray-600 mb-8">Henüz sepetinize ürün eklemediniz.</p>
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700">ALIŞVERİŞE BAŞLA</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm flex items-center space-x-2">
            <Link href="/" className="text-gray-500 hover:text-red-600">
              Ana Sayfa
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-red-600 font-semibold">Sepet</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">SEPETİM ({state.itemCount} Ürün)</h1>
          <Button variant="outline" onClick={clearCart} className="text-red-600 border-red-600 hover:bg-red-50">
            SEPETİ BOŞALT
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="divide-y">
                  {state.items.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-contain rounded"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{item.name}</h3>
                          {item.variant && <p className="text-sm text-gray-500 mt-1">{item.variant}</p>}

                          <div className="flex items-center space-x-4 mt-3">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600">Adet:</span>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-12 text-center font-semibold">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-xl font-bold text-red-600 mb-2">{item.price * item.quantity}₺</div>
                          {item.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                              {item.originalPrice * item.quantity}₺
                            </div>
                          )}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="mt-2 p-2 text-red-500 hover:bg-red-50 rounded-full"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                ALIŞVERİŞE DEVAM ET
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">SİPARİŞ ÖZETİ</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Ara Toplam:</span>
                    <span className="font-semibold">{state.total}₺</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Kargo:</span>
                    <span className="font-semibold text-green-600">{state.total >= 150 ? "ÜCRETSİZ" : "29₺"}</span>
                  </div>

                  {state.total < 150 && (
                    <div className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg">
                      <strong>{150 - state.total}₺</strong> daha alışveriş yapın, kargo ücretsiz olsun!
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>TOPLAM:</span>
                      <span className="text-red-600">{state.total + (state.total >= 150 ? 0 : 29)}₺</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">SATIN AL</Button>
                  </Link>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <span>🔒</span>
                      <span>Güvenli SSL ile şifrelenmiş ödeme</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">Ödeme Seçenekleri</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-100 p-2 rounded text-center text-xs">VISA</div>
                    <div className="bg-gray-100 p-2 rounded text-center text-xs">MC</div>
                    <div className="bg-gray-100 p-2 rounded text-center text-xs">AMEX</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
