"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CreditCard, Truck, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"
import { sipayService } from "@/lib/sipay"

export default function CheckoutPage() {
  const { state, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Address
    address: "",
    city: "",
    district: "",
    postalCode: "",

    // Payment
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",

    // Options
    paymentMethod: "card",
    deliveryOption: "standard",
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      if (formData.paymentMethod === "card") {
        // Process payment with Sipay
        const [expiryMonth, expiryYear] = formData.expiryDate.split("/")

        const paymentRequest = {
          merchant_key: "", // Will be set by sipayService
          invoice_id: `INV-${Date.now()}`,
          invoice_description: "ProteinOCN Sipariş",
          name: formData.firstName,
          surname: formData.lastName,
          total: subtotal + shipping,
          items: state.items.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          cc_holder_name: formData.cardName,
          cc_no: formData.cardNumber.replace(/\s/g, ""),
          expiry_month: expiryMonth,
          expiry_year: `20${expiryYear}`,
          cvv: formData.cvv,
          currency_code: "TRY",
          installments_number: 1,
          invoice_description_lang: "tr",
          return_url: `${window.location.origin}/checkout/success`,
          cancel_url: `${window.location.origin}/checkout/cancel`,
        }

        const paymentResult = await sipayService.processPayment(paymentRequest)

        if (paymentResult.status === "success") {
          // Payment successful
          clearCart()
          router.push("/checkout/success")
        } else {
          // Payment failed
          alert(`Ödeme hatası: ${paymentResult.status_description}`)
        }
      } else {
        // Handle other payment methods (bank transfer, etc.)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        clearCart()
        router.push("/checkout/success")
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Ödeme işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.")
    } finally {
      setIsProcessing(false)
    }
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Sepetiniz Boş</h1>
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700">ALIŞVERİŞE BAŞLA</Button>
          </Link>
        </div>
      </div>
    )
  }

  const subtotal = state.total
  const shipping = subtotal >= 150 ? 0 : 29
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/cart" className="flex items-center text-red-600 hover:text-red-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Sepete Dön
            </Link>
            <h1 className="text-2xl font-bold">GÜVENLİ ÖDEME</h1>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-600">SSL Korumalı</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Forms */}
            <div className="space-y-6">
              {/* Personal Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <span>KİŞİSEL BİLGİLER</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Ad *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Soyad *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">E-posta *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0555 123 45 67"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <span>TESLİMAT ADRESİ</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Adres *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Mahalle, sokak, bina no, daire no..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">İl *</Label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="">İl Seçin</option>
                        <option value="istanbul">İstanbul</option>
                        <option value="ankara">Ankara</option>
                        <option value="izmir">İzmir</option>
                        <option value="bursa">Bursa</option>
                        <option value="antalya">Antalya</option>
                        <option value="adana">Adana</option>
                        <option value="konya">Konya</option>
                        <option value="gaziantep">Gaziantep</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="district">İlçe *</Label>
                      <Input
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Posta Kodu</Label>
                    <Input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <span>ÖDEME YÖNTEMİ</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleInputChange}
                        className="text-red-600"
                      />
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <span>Kredi/Banka Kartı (Sipay ile Güvenli Ödeme)</span>
                    </label>

                    <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="transfer"
                        checked={formData.paymentMethod === "transfer"}
                        onChange={handleInputChange}
                        className="text-red-600"
                      />
                      <span>🏦</span>
                      <span>Havale/EFT</span>
                    </label>
                  </div>

                  {formData.paymentMethod === "card" && (
                    <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-6" />
                        <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-6" />
                        <img src="/placeholder.svg?height=30&width=50" alt="Troy" className="h-6" />
                        <span className="text-sm text-gray-600">Sipay ile güvenli ödeme</span>
                      </div>

                      <div>
                        <Label htmlFor="cardNumber">Kart Numarası *</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Son Kullanma *</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            maxLength={5}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Kart Üzerindeki İsim *</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          placeholder="AD SOYAD"
                          required
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div>
              <Card className="border-0 shadow-lg sticky top-4">
                <CardHeader>
                  <CardTitle>SİPARİŞ ÖZETİ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-contain rounded"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                          <p className="text-xs text-gray-500">Adet: {item.quantity}</p>
                        </div>
                        <span className="text-sm font-semibold">{item.price * item.quantity} TL</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Ara Toplam:</span>
                      <span>{subtotal} TL</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Kargo:</span>
                      <span className={shipping === 0 ? "text-green-600" : ""}>
                        {shipping === 0 ? "ÜCRETSİZ" : `${shipping} TL`}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-2">
                      <span>TOPLAM:</span>
                      <span className="text-red-600">{total} TL</span>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Sipay ile güvenli ödeme</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Truck className="h-4 w-4 text-blue-600" />
                      <span>Hızlı ve güvenli teslimat</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-red-600 hover:bg-red-700 text-lg py-3 mt-6"
                  >
                    {isProcessing ? "İŞLENİYOR..." : `${total} TL ÖDEMEYİ TAMAMLA`}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-2">
                    Siparişi tamamlayarak{" "}
                    <Link href="/terms" className="text-red-600">
                      Kullanım Şartları
                    </Link>{" "}
                    ve{" "}
                    <Link href="/privacy" className="text-red-600">
                      Gizlilik Politikası
                    </Link>
                    'nı kabul etmiş olursunuz.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
