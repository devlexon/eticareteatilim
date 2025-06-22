import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-bold">
                <span className="text-blue-400">protein</span>
                <span className="text-red-500">OCN</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Türkiye'nin en güvenilir spor besin takviyeleri mağazası. Premium kalite, uygun fiyat.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-red-500">ÜRÜN KATEGORİLERİ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/protein" className="text-gray-300 hover:text-white">
                  Whey Protein
                </Link>
              </li>
              <li>
                <Link href="/creatine" className="text-gray-300 hover:text-white">
                  Kreatin
                </Link>
              </li>
              <li>
                <Link href="/pre-workout" className="text-gray-300 hover:text-white">
                  Pre-Workout
                </Link>
              </li>
              <li>
                <Link href="/vitamins" className="text-gray-300 hover:text-white">
                  Vitaminler
                </Link>
              </li>
              <li>
                <Link href="/bcaa" className="text-gray-300 hover:text-white">
                  BCAA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-red-500">MÜŞTERİ HİZMETLERİ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-white">
                  Kargo Bilgileri
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-white">
                  İade & Değişim
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-300 hover:text-white">
                  Kullanım Kılavuzu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-red-500">İLETİŞİM</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">0850 XXX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">info@proteinocn.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">İstanbul, Türkiye</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">ÇALIŞMA SAATLERİ</h4>
              <p className="text-gray-300 text-sm">Pazartesi - Cuma: 09:00 - 18:00</p>
              <p className="text-gray-300 text-sm">Cumartesi: 10:00 - 16:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© 2024 ProteinOCN. Tüm hakları saklıdır.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm">
                Kullanım Şartları
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white text-sm">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
