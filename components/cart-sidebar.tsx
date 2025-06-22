"use client"

import Image from "next/image"
import Link from "next/link"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

export function CartSidebar() {
  const { state, closeCart, updateQuantity, removeItem } = useCart()

  if (!state.isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeCart} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold">SEPETİM ({state.itemCount})</h2>
            <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Sepetiniz boş</p>
                <Button onClick={closeCart} className="bg-red-600 hover:bg-red-700">
                  ALIŞVERİŞE BAŞLA
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain rounded"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm line-clamp-2">{item.name}</h3>
                      {item.variant && <p className="text-xs text-gray-500">{item.variant}</p>}
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-red-600">{item.price}₺</span>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <button onClick={() => removeItem(item.id)} className="p-1 hover:bg-red-100 rounded text-red-500">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">TOPLAM:</span>
                <span className="text-xl font-bold text-red-600">{state.total}₺</span>
              </div>

              <div className="space-y-2">
                <Link href="/cart" onClick={closeCart}>
                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                    SEPETİ GÖRÜNTÜLE
                  </Button>
                </Link>
                <Link href="/checkout" onClick={closeCart}>
                  <Button className="w-full bg-red-600 hover:bg-red-700">HEMEN SATIN AL</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
