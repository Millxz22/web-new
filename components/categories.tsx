import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2 } from "lucide-react"

const categories = [
  { name: "Smartphones", icon: Smartphone, color: "bg-blue-100 text-blue-600" },
  { name: "Laptops", icon: Laptop, color: "bg-green-100 text-green-600" },
  { name: "Headphones", icon: Headphones, color: "bg-purple-100 text-purple-600" },
  { name: "Watches", icon: Watch, color: "bg-orange-100 text-orange-600" },
  { name: "Cameras", icon: Camera, color: "bg-red-100 text-red-600" },
  { name: "Gaming", icon: Gamepad2, color: "bg-indigo-100 text-indigo-600" },
]

export function Categories() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <Card key={category.name} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center p-6">
                <div className={`p-3 rounded-full ${category.color} mb-3`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
