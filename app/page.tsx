'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Heart, ShoppingBag, Eye, Info, Star, X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

interface ClothingItem {
  id: string
  name: string
  price: string
  image: string
  colors: string[]
  story: string
  material: string
  fit: string
  stock: number
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

interface ProductSet {
  id: string
  mainImage: string
  title: string
  items: ClothingItem[]
  detailImages: string[]
}

const sampleReviews: Review[] = [
  {
    id: "1",
    name: "Alex M.",
    rating: 5,
    comment: "Incredible quality and the design is absolutely stunning. The fabric feels premium and the fit is perfect.",
    date: "2 days ago",
    verified: true
  },
  {
    id: "2",
    name: "Sarah K.",
    rating: 4,
    comment: "Love the artistic design! Fits well and gets lots of compliments. Only wish it came in more colors.",
    date: "1 week ago",
    verified: true
  },
  {
    id: "3",
    name: "Jordan P.",
    rating: 5,
    comment: "This piece is pure art. The quality exceeded my expectations and it's become my favorite shirt.",
    date: "2 weeks ago",
    verified: true
  }
]

const allProductSets: ProductSet[] = [
  {
    id: "mor-ve-otesi-set",
    mainImage: "/mor-ve-otesi-tshirt.png",
    title: "Mor ve Ötesi Collection",
    detailImages: ["/mor-ve-otesi-tshirt.png"],
    items: [
      {
        id: "mor-ve-otesi-tee",
        name: "Mor ve Ötesi Tee",
        price: "€45.90",
        image: "/mor-ve-otesi-tshirt.png",
        colors: ["#2D2D2D", "#4A4A4A", "#1A1A1A"],
        story: "Post-apocalyptic circus walk between decay and beauty. Where architectural ruins meet human silhouettes.",
        material: "100% Organic Cotton, 180gsm heavyweight",
        fit: "Oversized fit, drop shoulder design",
        stock: 7,
        reviews: sampleReviews,
        averageRating: 4.7,
        totalReviews: 23
      }
    ]
  },
  {
    id: "kara-orkestra-set",
    mainImage: "/kara-orkestra-tshirt.png",
    title: "Kara Orkestra Collection",
    detailImages: ["/kara-orkestra-detay-1.png", "/kara-orkestra-detay-2.png"],
    items: [
      {
        id: "kara-orkestra-tee",
        name: "Kara Orkestra Tee",
        price: "€46.90",
        image: "/kara-orkestra-detay-1.png",
        colors: ["#2D2D2D", "#3D3D3D", "#1A1A1A"],
        story: "The crowned conductor of chaos. Where music meets mysticism in wearable art.",
        material: "100% Combed Cotton, soft-hand feel",
        fit: "Modern fit, tapered sides",
        stock: 9,
        reviews: sampleReviews,
        averageRating: 4.6,
        totalReviews: 19
      },
      {
        id: "kara-orkestra-wanderer",
        name: "Kara Orkestra Wanderer",
        price: "€48.90",
        image: "/kara-orkestra-detay-2.png",
        colors: ["#2D2D2D", "#3D3D3D"],
        story: "The lone wanderer's journey through desolate landscapes. A story of solitude and strength.",
        material: "100% Ring-spun Cotton, vintage wash",
        fit: "Relaxed fit, distressed edges",
        stock: 5,
        reviews: sampleReviews.slice(0, 2),
        averageRating: 4.8,
        totalReviews: 15
      }
    ]
  },
  {
    id: "duman-set",
    mainImage: "/duman-main.png",
    title: "Duman Craft Collection",
    detailImages: ["/duman-main-2.png", "/duman-detay-1.png", "/duman-detay-2.png", "/duman-detay-3.png", "/duman-detay-4.png"],
    items: [
      {
        id: "duman-craft-tee",
        name: "Duman Craft Tee",
        price: "€42.90",
        image: "/duman-main.png",
        colors: ["#8B7355", "#A0956B", "#6B5B47"],
        story: "Ancient craftsmanship meets modern rebellion. The potter's wheel spins eternal stories.",
        material: "100% Organic Cotton, enzyme washed",
        fit: "Classic fit, ribbed collar",
        stock: 15,
        reviews: sampleReviews,
        averageRating: 4.6,
        totalReviews: 18
      },
      {
        id: "duman-vintage-car",
        name: "Duman Vintage Car",
        price: "€44.90",
        image: "/duman-main-2.png",
        colors: ["#2D2D2D", "#3D3D3D"],
        story: "Journey through time with vintage automotive nostalgia. Where memories meet the road.",
        material: "100% Cotton, vintage treatment",
        fit: "Regular fit, classic cut",
        stock: 12,
        reviews: sampleReviews,
        averageRating: 4.5,
        totalReviews: 22
      },
      {
        id: "duman-ravens",
        name: "Duman Ravens",
        price: "€43.90",
        image: "/duman-detay-1.png",
        colors: ["#2D2D2D", "#4A4A4A"],
        story: "The mysterious figure walks among ravens. A tale of solitude and ancient wisdom.",
        material: "100% Organic Cotton, soft-hand feel",
        fit: "Oversized fit, dropped shoulders",
        stock: 8,
        reviews: sampleReviews.slice(0, 2),
        averageRating: 4.7,
        totalReviews: 16
      }
    ]
  },
  {
    id: "athena-set",
    mainImage: "/athena-main.png",
    title: "Athena Gothic Collection",
    detailImages: ["/athena-main-2.png"],
    items: [
      {
        id: "athena-gothic-tee",
        name: "Athena Gothic Tee",
        price: "€48.90",
        image: "/athena-main.png",
        colors: ["#3D4A3D", "#2D2D2D", "#4A3D4A"],
        story: "Wisdom through darkness. The owl's gaze pierces through purple shadows of ancient knowledge.",
        material: "100% Ring-spun Cotton, pre-shrunk",
        fit: "Fitted silhouette, reinforced seams",
        stock: 2,
        reviews: sampleReviews,
        averageRating: 4.8,
        totalReviews: 35
      },
      {
        id: "athena-wolves",
        name: "Athena Wolves",
        price: "€49.90",
        image: "/athena-main-2.png",
        colors: ["#3D4A3D", "#2D2D2D"],
        story: "Pack hunters in the darkness. Ancient wisdom meets primal instinct.",
        material: "100% Cotton jersey, enzyme washed",
        fit: "Athletic cut, tapered fit",
        stock: 6,
        reviews: sampleReviews,
        averageRating: 4.6,
        totalReviews: 28
      }
    ]
  },
  {
    id: "rashit-set",
    mainImage: "/rashit-collection-dark-art.png",
    title: "Rashit Collection",
    detailImages: [],
    items: [
      {
        id: "rashit-tee",
        name: "Rashit Tee",
        price: "€47.90",
        image: "/rashit-tshirt.png",
        colors: ["#2D2D2D", "#4A4A4A"],
        story: "Experimental artistry meets street culture. Bold expressions for the fearless.",
        material: "100% Organic Cotton, heavyweight",
        fit: "Oversized fit, boxy cut",
        stock: 10,
        reviews: sampleReviews,
        averageRating: 4.4,
        totalReviews: 12
      }
    ]
  },
  {
    id: "kurban-set",
    mainImage: "/kurban-collection-gothic.png",
    title: "Kurban Collection",
    detailImages: [],
    items: [
      {
        id: "kurban-tee",
        name: "Kurban Tee",
        price: "€46.90",
        image: "/kurban-tshirt-gothic.png",
        colors: ["#1A1A1A", "#2D2D2D"],
        story: "Sacrifice and rebirth. Ancient rituals reimagined for modern souls.",
        material: "100% Ring-spun Cotton, garment dyed",
        fit: "Regular fit, classic silhouette",
        stock: 14,
        reviews: sampleReviews.slice(0, 2),
        averageRating: 4.5,
        totalReviews: 18
      }
    ]
  }
]

const collections = [
  { id: "mor-ve-otesi", name: "Mor ve Ötesi" },
  { id: "kara-orkestra", name: "Kara Orkestra" },
  { id: "duman", name: "Duman" },
  { id: "athena", name: "Athena" },
  { id: "rashit", name: "Rashit" },
  { id: "kurban", name: "Kurban" }
]

export default function Component() {
  const [selectedProductSet, setSelectedProductSet] = useState<ProductSet | null>(null)
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null)
  const [activeTab, setActiveTab] = useState<'story' | 'material' | 'fit' | 'shipping' | 'reviews'>('story')
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [showAllCollections, setShowAllCollections] = useState(false)
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Show only first 4 collections initially
  const displayedProducts = showAllCollections ? allProductSets : allProductSets.slice(0, 4)

  const handleProductClick = (productSet: ProductSet) => {
    setSelectedProductSet(productSet)
    setSelectedItem(productSet.items[0])
    setSelectedSize('')
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProductSet(null)
    setSelectedItem(null)
    setActiveTab('story')
    setCurrentImageIndex(0)
  }

  const toggleFavorite = (itemId: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(itemId)) {
      newFavorites.delete(itemId)
    } else {
      newFavorites.add(itemId)
    }
    setFavorites(newFavorites)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : i < rating 
            ? 'fill-yellow-400/50 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  const nextImage = () => {
    if (selectedProductSet) {
      const totalImages = selectedProductSet.detailImages.length
      setCurrentImageIndex((prev) => (prev + 1) % totalImages)
    }
  }

  const prevImage = () => {
    if (selectedProductSet) {
      const totalImages = selectedProductSet.detailImages.length
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
    }
  }

  const getCurrentImage = () => {
    if (selectedProductSet && selectedProductSet.detailImages.length > 0) {
      return selectedProductSet.detailImages[currentImageIndex]
    }
    return selectedProductSet?.mainImage || "/placeholder.svg"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Sticky with Glass Morphism */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center">
              <div className="text-xl font-bold tracking-wider text-gray-900">TARN</div>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <a href="#" className="px-3 py-1.5 text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors bg-black/5 rounded-full border border-black/10 backdrop-blur-sm">
                SHOP
              </a>
              
              {/* Collections Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setCollectionsDropdownOpen(!collectionsDropdownOpen)}
                  className="px-3 py-1.5 text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors bg-black/5 rounded-full border border-black/10 backdrop-blur-sm flex items-center space-x-1"
                >
                  <span>COLLECTIONS</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${collectionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {collectionsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-2xl border border-black/10 shadow-lg py-2 z-50">
                    {collections.map((collection) => (
                      <button
                        key={collection.id}
                        onClick={() => {
                          setCollectionsDropdownOpen(false)
                          // Navigate to collection page (placeholder for now)
                          console.log(`Navigate to ${collection.name} collection`)
                        }}
                        className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-black/5 hover:text-gray-900 transition-colors"
                      >
                        {collection.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#" className="px-3 py-1.5 text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors bg-black/5 rounded-full border border-black/10 backdrop-blur-sm">
                LOOKBOOK
              </a>
              <a href="#" className="px-3 py-1.5 text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors bg-black/5 rounded-full border border-black/10 backdrop-blur-sm">
                ABOUT
              </a>
              <a href="#" className="px-3 py-1.5 text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors bg-black/5 rounded-full border border-black/10 backdrop-blur-sm">
                SUPPORT
              </a>
            </div>
            
            {/* Right Navigation */}
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1.5 text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors bg-black/5 rounded-full border border-black/10 backdrop-blur-sm">
                SEARCH
              </button>
              <button className="px-3 py-1.5 text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors bg-black/5 rounded-full border border-black/10 backdrop-blur-sm">
                CART (0)
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6 pt-24">
        {/* Hero Section - Compact */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
            TARN — AUTUMN/WINTER 2025
          </h1>
          
          {/* Collection Manifesto - Modern Minimalist Design */}
          <div className="max-w-2xl mx-auto text-center mb-8 relative">
            <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8 rounded-2xl relative overflow-hidden">
              {/* Subtle overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 text-white tracking-wide">The Ritual of Darkness</h2>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Each piece carries the weight of ancient stories, 
                  reimagined for the modern wanderer and, this is not just clothing—it's armor for the soul.
                </p>
              </div>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
          </div>
          
          {/* CTA Buttons - Smaller */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button 
              onClick={() => setShowAllCollections(!showAllCollections)}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 text-xs font-medium tracking-wider uppercase"
            >
              {showAllCollections ? 'Show Featured Collections' : 'Discover the Full Collection'}
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-6 py-2 text-xs font-medium tracking-wider uppercase">
              Shop TARN AW2025
            </Button>
          </div>
        </div>

        {/* Fashion Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((productSet) => (
            <div 
              key={productSet.id} 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(productSet.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden relative">
                <img
                  src={productSet.mainImage || "/placeholder.svg"}
                  alt={productSet.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                />
                
                {/* Enhanced Hover Overlay with Animation */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${
                  hoveredProduct === productSet.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* Product Info on Hover */}
                  <div className={`absolute bottom-4 left-4 right-4 text-white transform transition-all duration-500 ${
                    hoveredProduct === productSet.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <h4 className="font-bold text-sm mb-1">{productSet.title}</h4>
                    <p className="text-xs opacity-90 mb-3">From €{Math.min(...productSet.items.map(item => parseFloat(item.price.replace('€', ''))))}</p>
                    <div className="flex space-x-1 mb-3">
                      {productSet.items[0].colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full border border-white/50"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* View Details Button */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    hoveredProduct === productSet.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    <Button 
                      onClick={() => handleProductClick(productSet)}
                      className="bg-white/90 hover:bg-white text-black px-4 py-2 text-xs font-medium transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <Eye className="w-3 h-3 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Product Title */}
              <div className="mt-3 text-center">
                <h3 className="font-medium text-gray-900 text-sm">{productSet.title}</h3>
                <p className="text-xs text-gray-600 mt-1">From €{Math.min(...productSet.items.map(item => parseFloat(item.price.replace('€', ''))))}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Enhanced Product Detail Modal */}
      {selectedProductSet && selectedItem && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50 p-4" 
          onClick={closeModal}
        >
          <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            
            {/* Enhanced Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={closeModal}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row h-full">
              {/* Product Image with Navigation */}
              <div className="flex-1 p-4 md:p-8 relative">
                <img
                  src={getCurrentImage() || "/placeholder.svg"}
                  alt={selectedProductSet.title}
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Image Navigation */}
                {selectedProductSet.detailImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-6 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/20"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/20"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProductSet.detailImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Product Details Sidebar */}
              <div className="w-full md:w-96 bg-white/10 backdrop-blur-2xl p-4 md:p-6 flex flex-col border-l border-white/20 rounded-r-3xl overflow-y-auto">
                
                {/* Selected Item Details */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{selectedItem.name}</h2>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{selectedItem.price}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center mt-2 space-x-2">
                        <div className="flex">
                          {renderStars(selectedItem.averageRating)}
                        </div>
                        <span className="text-sm text-gray-600">
                          {selectedItem.averageRating} ({selectedItem.totalReviews} reviews)
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleFavorite(selectedItem.id)}
                      className="p-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Heart 
                        className={`w-5 h-5 ${favorites.has(selectedItem.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                      />
                    </button>
                  </div>

                  {/* Stock Status */}
                  <div className="mb-4">
                    {selectedItem.stock <= 5 && (
                      <p className="text-sm text-orange-600 font-medium bg-orange-50/50 px-3 py-1 rounded-full inline-block">
                        ⚡ Only {selectedItem.stock} left in stock
                      </p>
                    )}
                  </div>

                  {/* Size Selection */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Size</p>
                    <div className="flex space-x-2">
                      {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
                            selectedSize === size
                              ? 'bg-white/30 border-white/50 text-gray-900'
                              : 'bg-white/10 border-white/20 text-gray-700 hover:bg-white/20'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-900 mb-2">Colors</p>
                    <div className="flex space-x-2">
                      {selectedItem.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full border-2 border-white/50 cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {[
                        { key: 'story', label: 'Story' },
                        { key: 'material', label: 'Material' },
                        { key: 'fit', label: 'Fit' },
                        { key: 'shipping', label: 'Shipping' },
                        { key: 'reviews', label: 'Reviews' }
                      ].map((tab) => (
                        <button
                          key={tab.key}
                          onClick={() => setActiveTab(tab.key as any)}
                          className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                            activeTab === tab.key 
                              ? 'bg-white/30 text-gray-900' 
                              : 'text-gray-600 hover:bg-white/20'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-h-[120px] max-h-[200px] overflow-y-auto">
                      {activeTab === 'story' && (
                        <p className="text-sm text-gray-800 leading-relaxed">{selectedItem.story}</p>
                      )}
                      {activeTab === 'material' && (
                        <p className="text-sm text-gray-800">{selectedItem.material}</p>
                      )}
                      {activeTab === 'fit' && (
                        <p className="text-sm text-gray-800">{selectedItem.fit}</p>
                      )}
                      {activeTab === 'shipping' && (
                        <div className="text-sm text-gray-800 space-y-2">
                          <p>• Free shipping on orders over €75</p>
                          <p>• 2-3 business days delivery</p>
                          <p>• 30-day return policy</p>
                          <p>• Express shipping available</p>
                        </div>
                      )}
                      {activeTab === 'reviews' && (
                        <div className="space-y-4">
                          {selectedItem.reviews.map((review) => (
                            <div key={review.id} className="border-b border-white/10 pb-3 last:border-b-0">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                  <span className="text-sm font-medium text-gray-900">{review.name}</span>
                                  {review.verified && (
                                    <span className="text-xs bg-green-100/50 text-green-700 px-2 py-1 rounded-full">
                                      Verified
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs text-gray-600">{review.date}</span>
                              </div>
                              <div className="flex mb-2">
                                {renderStars(review.rating)}
                              </div>
                              <p className="text-sm text-gray-800">{review.comment}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Other Items */}
                <div className="flex-1 mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Other Items</h3>
                  <div className="space-y-3 max-h-32 overflow-y-auto">
                    {selectedProductSet.items
                      .filter(item => item.id !== selectedItem.id)
                      .map((item) => (
                        <div 
                          key={item.id} 
                          className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-colors"
                          onClick={() => setSelectedItem(item)}
                        >
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.price}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Action Buttons - Dynamic Text */}
                <div className="space-y-3">
                  <Button 
                    className={`w-full py-3 font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                      selectedSize 
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white' 
                        : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    }`}
                    disabled={!selectedSize}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    {selectedSize ? 'ADD TO CART' : 'SELECT SIZE FIRST'}
                  </Button>
                  <Button variant="outline" className="w-full border-white/30 text-gray-900 hover:bg-white/20 py-2">
                    Quick Add to Favorites
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">TARN</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Where darkness meets design. Crafting stories through fabric since the beginning of time.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 TARN. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* Help Button */}
      <div className="fixed bottom-8 right-8">
        <Button 
          className="w-14 h-14 rounded-full bg-black hover:bg-gray-800 text-white font-medium text-xs transition-all duration-300 shadow-lg hover:shadow-xl"
          size="lg"
        >
          Help
        </Button>
      </div>
    </div>
  )
}
