"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/contexts/cart-context"
import { CartSidebar } from "./cart-sidebar"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { state, toggleCart } = useCart()

  return (
    <>
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-center py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center space-x-8">
          <span>🚚 ÜCRETSİZ KARGO - 150 TL ÜZERİ SİPARİŞLERDE</span>
          <span>⚡ AYNI GÜN KARGO - 16:00'DAN ÖNCESİ SİPARİŞLERDE</span>
          <span>🎯 GÜVENLİ ALIŞVERİŞ - 1.000.000+ MUTLU MÜŞTERİ</span>
        </div>
      </div>

      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold">
                  <span className="text-blue-600">protein</span>
                  <span className="text-red-600">OCN</span>
                </div>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="150+ den fazla ürünün ara"
                  className="w-full pl-4 pr-10 py-2 border-2 border-gray-200 rounded-lg focus:border-red-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-sm">
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">ARA</span>
              </div>
              <Button variant="ghost" className="flex items-center space-x-1">
                <User className="h-5 w-5" />
                <span>HESAP</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-1 relative" onClick={toggleCart}>
                <ShoppingCart className="h-5 w-5" />
                <span>SEPET</span>
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="hidden md:flex items-center space-x-8 py-3 border-t">
            <Link href="/tum-urunler" className="text-gray-700 hover:text-red-600 font-semibold">
              TÜM ÜRÜNLER
            </Link>
            <Link href="/protein" className="text-red-600 font-semibold hover:text-red-700">
              PROTEİN
            </Link>
            <Link href="/creatine" className="text-gray-700 hover:text-red-600">
              KREATİN
            </Link>
            <Link href="/pre-workout" className="text-gray-700 hover:text-red-600">
              PRE-WORKOUT
            </Link>
            <Link href="/vitamins" className="text-gray-700 hover:text-red-600">
              VİTAMİN
            </Link>
            <Link href="/accessories" className="text-gray-700 hover:text-red-600">
              AKSESUAR
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-red-600">
              PAKETLER
            </Link>
            <Link href="/sports-foods" className="text-gray-700 hover:text-red-600">
              SPOR GIDALAR
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <div className="mb-4">
                  <Input type="text" placeholder="Ürün ara..." className="w-full" />
                </div>
                <Link href="/protein" className="block px-3 py-2 text-red-600 font-semibold">
                  PROTEİN
                </Link>
                <Link href="/creatine" className="block px-3 py-2 text-gray-700">
                  KREATİN
                </Link>
                <Link href="/pre-workout" className="block px-3 py-2 text-gray-700">
                  PRE-WORKOUT
                </Link>
                <Link href="/vitamins" className="block px-3 py-2 text-gray-700">
                  VİTAMİN
                </Link>
              </div>
            </div>
          )}
        </div>
        <CartSidebar />
      </nav>
    </>
  )
}
