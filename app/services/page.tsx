import Image from "next/image"
import { CheckCircle, Clock, Users, Target, Heart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive nutrition solutions tailored to your unique needs and health goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Nutrition Counseling */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Nutrition Counseling"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Nutrition Counseling</CardTitle>
                </div>
                <CardDescription className="text-base">
                  One-on-one sessions with certified nutritionists to address your specific health concerns and goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {[
                    "Comprehensive nutritional assessment",
                    "Personalized dietary recommendations",
                    "Health condition management",
                    "Ongoing support and monitoring",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$150/session</span>
                  <Button className="bg-green-600 hover:bg-green-700">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Meal Planning */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=300&width=500" alt="Meal Planning" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Custom Meal Planning</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Personalized meal plans designed to fit your lifestyle, preferences, and nutritional needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {[
                    "Weekly meal plans with recipes",
                    "Shopping lists included",
                    "Dietary restrictions accommodated",
                    "Prep time optimization",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$99/month</span>
                  <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
                </div>
              </CardContent>
            </Card>

            {/* Weight Management */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Weight Management"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Weight Management</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Sustainable weight loss and maintenance programs based on proven strategies and behavioral changes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {[
                    "Personalized calorie and macro targets",
                    "Behavioral coaching sessions",
                    "Progress tracking and adjustments",
                    "Long-term maintenance strategies",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$199/month</span>
                  <Button className="bg-green-600 hover:bg-green-700">Start Program</Button>
                </div>
              </CardContent>
            </Card>

            {/* Sports Nutrition */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Sports Nutrition"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Sports Nutrition</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Performance-focused nutrition strategies for athletes and active individuals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {[
                    "Pre and post-workout nutrition",
                    "Hydration strategies",
                    "Supplement recommendations",
                    "Competition day planning",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$175/session</span>
                  <Button className="bg-green-600 hover:bg-green-700">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Specialized programs for specific health needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Heart Health",
                description: "Cardiovascular nutrition programs to support heart health and manage cholesterol levels.",
                price: "$125/session",
              },
              {
                icon: Users,
                title: "Family Nutrition",
                description: "Whole-family approach to healthy eating with kid-friendly meal planning and education.",
                price: "$200/session",
              },
              {
                icon: Target,
                title: "Diabetes Management",
                description: "Specialized nutrition counseling for Type 1 and Type 2 diabetes management.",
                price: "$160/session",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <div className="text-lg font-semibold text-green-600 mb-4">{service.price}</div>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
