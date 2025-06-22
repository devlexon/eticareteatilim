import Image from "next/image"
import { CheckCircle, Heart, Target, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">NutriWell</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about helping people achieve optimal health through personalized nutrition and
              sustainable lifestyle changes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At NutriWell, we believe that proper nutrition is the foundation of a healthy, fulfilling life. Our
                mission is to empower individuals with the knowledge, tools, and support they need to make lasting
                positive changes to their health and well-being.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We combine evidence-based nutrition science with personalized care to create sustainable solutions that
                fit your unique lifestyle, preferences, and health goals.
              </p>
              <div className="space-y-4">
                {[
                  "Evidence-based nutrition guidance",
                  "Personalized approach to wellness",
                  "Sustainable lifestyle changes",
                  "Ongoing support and accountability",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our mission"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Compassionate Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We approach every client with empathy, understanding, and genuine care for their well-being and
                  success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Results-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We're committed to helping you achieve measurable, lasting results through proven strategies and
                  consistent support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Collaborative Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We work with you as partners in your health journey, respecting your preferences and lifestyle needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your health and wellness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Mitchell",
                role: "Lead Nutritionist",
                credentials: "RD, PhD in Nutrition Science",
                bio: "15+ years of experience in clinical nutrition and wellness coaching.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "James Rodriguez",
                role: "Sports Nutritionist",
                credentials: "MS, CSSD, ACSM-CPT",
                bio: "Specializes in performance nutrition for athletes and active individuals.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Lisa Thompson",
                role: "Wellness Coach",
                credentials: "RD, CDE",
                bio: "Expert in diabetes management and sustainable lifestyle changes.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.credentials}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
