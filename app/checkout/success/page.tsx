import Link from "next/link"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckoutSuccessPage() {
  const orderNumber = "PO" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SİPARİŞİNİZ ALINDI!</h1>
          <p className="text-gray-600">Siparişiniz başarıyla oluşturuldu ve işleme alındı.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-red-600" />
                <span>SİPARİŞ BİLGİLERİ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Sipariş No:</span>
                <span className="font-semibold">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tarih:</span>
                <span className="font-semibold">{new Date().toLocaleDateString("tr-TR")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Durum:</span>
                <span className="text-green-600 font-semibold">Onaylandı</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ödeme:</span>
                <span className="text-green-600 font-semibold">Tamamlandı</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-blue-600" />
                <span>TESLİMAT BİLGİLERİ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Kargo Firması:</span>
                <span className="font-semibold">Aras Kargo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tahmini Teslimat:</span>
                <span className="font-semibold">1-2 İş Günü</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Kargo Takip:</span>
                <span className="text-blue-600 font-semibold">SMS ile bildirilecek</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-purple-600" />
              <span>SONRAKI ADIMLAR</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">E-posta Onayı</h3>
                  <p className="text-gray-600 text-sm">Sipariş detaylarınızı e-posta adresinize gönderdik.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Sipariş Hazırlığı</h3>
                  <p className="text-gray-600 text-sm">Siparişiniz 24 saat içinde hazırlanacak ve kargoya verilecek.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Kargo Takibi</h3>
                  <p className="text-gray-600 text-sm">Kargo takip numaranızı SMS ile alacaksınız.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700">ALIŞVERİŞE DEVAM ET</Button>
          </Link>
          <Link href="/account/orders">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              SİPARİŞLERİMİ GÖRÜNTÜLE
            </Button>
          </Link>
        </div>

        {/* Support */}
        <div className="text-center mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">Yardıma mı ihtiyacınız var?</h3>
          <p className="text-gray-600 mb-4">
            Sipariş sürecinizle ilgili herhangi bir sorunuz varsa bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:08505551234" className="text-red-600 hover:text-red-700 font-semibold">
              📞 0850 555 12 34
            </a>
            <a href="mailto:destek@proteinocn.com" className="text-red-600 hover:text-red-700 font-semibold">
              ✉️ destek@proteinocn.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
