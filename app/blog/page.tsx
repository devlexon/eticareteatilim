import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Superfoods to Boost Your Energy Naturally",
      excerpt:
        "Discover nutrient-dense foods that can help increase your energy levels throughout the day without relying on caffeine or sugar.",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Nutrition Tips",
    },
    {
      id: 2,
      title: "The Science Behind Intermittent Fasting",
      excerpt:
        "Learn about the research-backed benefits of intermittent fasting and how to implement it safely for optimal health results.",
      author: "James Rodriguez",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Weight Management",
    },
    {
      id: 3,
      title: "Meal Prep Made Simple: A Beginner's Guide",
      excerpt:
        "Master the art of meal preparation with these practical tips and strategies for busy professionals and families.",
      author: "Lisa Thompson",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Meal Planning",
    },
    {
      id: 4,
      title: "Hydration: More Than Just Water",
      excerpt:
        "Understanding the importance of proper hydration and exploring various ways to meet your daily fluid needs.",
      author: "Dr. Sarah Mitchell",
      date: "March 8, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Wellness",
    },
    {
      id: 5,
      title: "Plant-Based Protein Sources for Athletes",
      excerpt: "Complete guide to meeting protein requirements on a plant-based diet for optimal athletic performance.",
      author: "James Rodriguez",
      date: "March 5, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sports Nutrition",
    },
    {
      id: 6,
      title: "Managing Blood Sugar Through Diet",
      excerpt:
        "Evidence-based strategies for maintaining stable blood sugar levels through mindful food choices and timing.",
      author: "Lisa Thompson",
      date: "March 3, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Health Management",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nutrition <span className="text-green-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, practical tips, and the latest research in nutrition and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <p className="text-gray-600">Our latest and most popular content</p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{blogPosts[0].author}</span>
                    <Calendar className="h-5 w-5 text-gray-400 ml-4" />
                    <span className="text-gray-600">{blogPosts[0].date}</span>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with our newest content</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest nutrition tips, recipes, and wellness insights delivered to your
            inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 focus:outline-none"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
