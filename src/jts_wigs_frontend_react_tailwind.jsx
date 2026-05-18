import { useState } from 'react'
import { ShoppingBag, Search, Menu, Calendar, Star, X } from 'lucide-react'

export default function JTSWigsStore() {
  const [cartCount, setCartCount] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All Wigs')
  const [selectedProductType, setSelectedProductType] = useState('Wigs')
  const [activePage, setActivePage] = useState('home')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])
  const [cartDetails, setCartDetails] = useState([])
  const [openDropdown, setOpenDropdown] = useState(null)
  
  const wigStyles = ['Straight', 'Bodywave', 'Deep Wave', 'Water Wave', 'Burmese Curl', 'Pineapple Wave']
  
  const wigCategories = [
    {
      title: 'Straight',
      image: 'images/1.PNG',
      description: 'JTs Transparent Lace Wig • 250 Density • Natural Color 1B',
      price: '$250',
      style: 'Straight',
      details: 'Premium straight wig with 250 density transparent lace',
    },
    {
      title: 'Bodywave',
      image: 'images/body-wave-1.PNG',
      description: 'JTs Beauty Bodywave 13x4 • 250 Density • Transparent Lace',
      price: 'From $280',
      style: 'Bodywave',
      details: 'Luxurious body wave wig, 10 inch to 40 inch available',
    },
    {
      title: 'Deep Wave',
      image: 'images/2.PNG',
      description: 'JTs Beauty Deep Wave 13x4 • 250 Density • Transparent Lace',
      price: 'From $280',
      style: 'Deep Wave',
      details: 'Elegant deep wave wig, 10 inch to 40 inch available',
    },
    {
      title: 'Water Wave',
      image: 'images/water-wave-1.PNG',
      description: 'JTs Beauty Water Wave 13x4 • 250 Density • Transparent Lace',
      price: 'From $300',
      style: 'Water Wave',
      details: 'Stunning water wave wig, 10 inch to 40 inch available',
    },
    {
      title: 'Burmese Curl',
      image: 'images/burmese-curl-1.PNG',
      description: 'JTs Beauty Burmese Curl • 250 Density • Transparent Lace',
      price: 'From $320',
      style: 'Burmese Curl',
      details: 'Beautiful Burmese curl texture with premium quality',
    },
    {
      title: 'Pineapple Wave',
      image: 'images/3.PNG',
      description: '13x4 Transparent Lace • 250 Density • 26 inch',
      price: '$420',
      style: 'Pineapple Wave',
      details: '26 inch pineapple wave with premium transparent lace',
    },
  ]

  const featuredProducts = [
    {
      title: 'Tri Color Body Wave',
      price: '$500',
      image: 'images/body-wave-2.PNG',
      description: 'JTs Beauty Tri Color Body Wave 13x4 • 250 Density • 30 inch • Transparent Lace',
      category: 'Wigs',
      type: 'Featured',
    },
    {
      title: 'Light Color Bob Wig',
      price: '$280',
      image: 'images/logo-1.jpeg',
      description: '13x4 • 14 inch • 230 Density • Transparent Lace',
      category: 'Wigs',
      type: 'Bob Wigs',
    },
    {
      title: 'Dark Bob Wig',
      price: '$290',
      image: 'images/logo-2.jpeg',
      description: 'Premium Dark Bob • 230 Density • Transparent Lace',
      category: 'Wigs',
      type: 'Bob Wigs',
    },
  ]

  const beautyProducts = [
    {
      name: 'JTs Beauty World LG Bonding Glue',
      price: '$7.50',
      category: 'Hair Products',
      id: 'glue-1',
    },
    {
      name: 'JTs Lace Tint - Light Warm Brown',
      price: '$10',
      category: 'Lace Tints',
      id: 'tint-1',
    },
    {
      name: 'JTs Lace Tint - Dark Brown',
      price: '$10',
      category: 'Lace Tints',
      id: 'tint-2',
    },
    {
      name: 'JTs Lace Tint - Medium Brown',
      price: '$10',
      category: 'Lace Tints',
      id: 'tint-3',
    },
    {
      name: 'JTs Lace Tint - Light Brown',
      price: '$10',
      category: 'Lace Tints',
      id: 'tint-4',
    },
    {
      name: 'JTs Beauty Mousse',
      price: '$8',
      category: 'Hair Products',
      id: 'mousse-1',
    },
  ]

  const productCategories = {
    'Wigs': wigCategories.concat(featuredProducts.filter(p => p.category === 'Wigs')),
    'Bonnets': [
      { name: 'Premium Hair Bonnet', price: '$15', category: 'Bonnets', id: 'bonnet-1' },
      { name: 'Silk Sleep Bonnet', price: '$18', category: 'Bonnets', id: 'bonnet-2' },
    ],
    'Lace Tints': beautyProducts.filter(p => p.category === 'Lace Tints'),
    'Hair Products': beautyProducts.filter(p => p.category === 'Hair Products'),
  }

  const filteredWigs = selectedCategory === 'All Wigs' 
    ? wigCategories 
    : wigCategories.filter(wig => wig.title === selectedCategory)

  const handleAddToCart = (product) => {
    const cartItem = { ...product, cartId: Date.now() }
    setCart([...cart, cartItem])
    setCartDetails([...cartDetails, cartItem])
    setCartCount(cartCount + 1)
  }

  const handleRemoveFromCart = (cartId) => {
    const newCart = cart.filter(item => item.cartId !== cartId)
    const newCartDetails = cartDetails.filter(item => item.cartId !== cartId)
    setCart(newCart)
    setCartDetails(newCartDetails)
    setCartCount(newCart.length)
  }

  return (
    <div className="min-h-screen bg-[#f6f2ee] text-[#183528] font-sans">
      {/* Top Bar */}
      <div className="bg-[#e8ebe8] text-center py-3 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
        Welcome To JTS Wigs — Luxury Wigs
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#183528] text-white shadow-md">
        <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
          <button className="space-y-1">
            <Menu size={24} />
          </button>

          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
            <img
              src="images/logo.png"
              alt="JTS Logo"
              className="h-16 sm:h-20 object-contain"
            />
            <div className="text-left">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-[0.25em] uppercase leading-none">
                JTS WIGS
              </h1>
            </div>
          </div>

          <div className="flex gap-4 items-center text-xl">
            <button>
              <Search size={22} />
            </button>

            <button
              onClick={() => setActivePage('cart')}
              className="relative"
            >
              <ShoppingBag size={22} />
              <span className="absolute -top-2 -right-2 bg-white text-[#183528] text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <nav className="border-t border-[#e5e5e5] bg-white text-[#183528]">
          <div className="overflow-x-auto flex whitespace-nowrap gap-6 px-5 py-4 text-sm sm:text-base items-center">
            <a href="#home" className="hover:text-[#d4c2aa] transition">
              All Wigs
            </a>
            <div className="relative">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'categories' ? null : 'categories')}
                className="hover:text-[#d4c2aa] transition flex items-center gap-1"
              >
                Categories ▾
              </button>

              {openDropdown === 'categories' && (
                <div className="absolute top-8 left-0 bg-white shadow-xl border border-gray-100 min-w-[220px] z-50">
                  <button
                    onClick={() => {
                      setSelectedCategory('All Wigs')
                      setOpenDropdown(null)
                    }}
                    className="block w-full text-left px-5 py-3 hover:bg-[#f6f2ee] text-sm text-[#183528]"
                  >
                    All Wigs
                  </button>
                  {wigCategories.map((wig, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCategory(wig.title)
                        setOpenDropdown(null)
                      }}
                      className="block w-full text-left px-5 py-3 hover:bg-[#f6f2ee] text-sm text-[#183528]"
                    >
                      {wig.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}
                className="hover:text-[#d4c2aa] transition flex items-center gap-1"
              >
                Products ▾
              </button>

              {openDropdown === 'products' && (
                <div className="absolute top-8 left-0 bg-white shadow-xl border border-gray-100 min-w-[220px] z-50">
                  <button 
                    onClick={() => {
                      setSelectedProductType('Wigs')
                      setActivePage('products')
                      setOpenDropdown(null)
                    }} 
                    className="block w-full text-left px-5 py-3 hover:bg-[#f6f2ee] text-sm text-[#183528]"
                  >
                    Wigs
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedProductType('Bonnets')
                      setActivePage('products')
                      setOpenDropdown(null)
                    }} 
                    className="block w-full text-left px-5 py-3 hover:bg-[#f6f2ee] text-sm text-[#183528]"
                  >
                    Bonnets
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedProductType('Lace Tints')
                      setActivePage('products')
                      setOpenDropdown(null)
                    }} 
                    className="block w-full text-left px-5 py-3 hover:bg-[#f6f2ee] text-sm text-[#183528]"
                  >
                    Lace Tints
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedProductType('Hair Products')
                      setActivePage('products')
                      setOpenDropdown(null)
                    }} 
                    className="block w-full text-left px-5 py-3 hover:bg-[#f6f2ee] text-sm text-[#183528]"
                  >
                    Hair Products
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => setActivePage('appointment')}
              className="hover:text-[#d4c2aa] transition"
            >
              Appointment
            </button>
            <a href="#reviews" className="hover:text-[#d4c2aa] transition">
              Reviews
            </a>
            <a href="#contact" className="hover:text-[#d4c2aa] transition">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      {activePage === 'home' && (
      <>
      <section
        id="home"
        className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="images/bg-image.jpeg"
          alt="Luxury wigs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 px-6 max-w-3xl text-white">
          <p className="uppercase tracking-[0.3em] text-sm mb-5">
            Luxury Human Hair Wigs
          </p>
          <h2 className="text-5xl sm:text-7xl font-black leading-none mb-6">
            WE’VE GOT YOU COVERED
          </h2>
          <button className="bg-[#f5f2ef] text-[#183528] px-10 py-4 font-semibold tracking-[0.15em] uppercase hover:bg-[#d9d2ca] transition-all duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.3em] text-sm text-[#3a5c4b]">
              Wig Collections
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3">
              Shop By Style
            </h2>

            <div className="mt-8 flex justify-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-[#183528] bg-white px-5 py-3 min-w-[250px] text-sm uppercase tracking-[0.15em]"
              >
                <option>All Wigs</option>
                {wigCategories.map((wig, index) => (
                  <option key={index}>{wig.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {filteredWigs.map((wig, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={wig.image}
                    alt={wig.title}
                    className="h-56 sm:h-80 w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold uppercase tracking-wide">
                    {wig.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{wig.description}</p>
                  <p className="mt-4 font-bold text-lg">{wig.price}</p>

                  <div className="space-y-3 mt-5">
                    <button
                      onClick={() => {
                        setSelectedProduct(wig)
                        setActivePage('details')
                      }}
                      className="border border-[#183528] text-[#183528] px-5 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#183528] hover:text-white transition-all duration-300 w-full"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleAddToCart(wig)}
                      className="bg-[#183528] text-white px-5 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#2f5140] transition-all duration-300 w-full"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Banner */}
      <section className="bg-[#f3efea] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-7xl font-black leading-none uppercase text-[#204533]">
            Schedule An Appointment
          </h2>

          <div className="w-44 h-2 bg-[#204533] mx-auto rounded-full mt-8 mb-10"></div>

          <button onClick={() => setActivePage('appointment')} className="bg-[#183528] text-white px-10 py-5 uppercase tracking-[0.2em] font-semibold hover:bg-[#2f5140] transition-all duration-300">
            Set Appointment
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#3a5c4b]">
                Best Sellers
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold mt-2">
                Featured Wigs
              </h2>
            </div>

            <button onClick={() => window.scrollTo(0, 0)} className="border border-[#183528] text-[#183528] px-6 py-3 uppercase tracking-[0.2em] text-sm hover:bg-[#183528] hover:text-white transition-all duration-300 w-fit">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold">
                    New
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <p className="text-2xl font-bold">{product.price}</p>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setSelectedProduct(product)
                          setActivePage('details')
                        }}
                        className="border border-[#183528] text-[#183528] px-4 py-2 text-xs uppercase tracking-[0.15em] hover:bg-[#183528] hover:text-white transition-all duration-300"
                      >
                        Details
                      </button>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-[#183528] text-white px-5 py-3 text-sm uppercase tracking-[0.15em] hover:bg-[#2f5140] transition-all duration-300"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beauty Products */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.3em] text-sm text-[#3a5c4b]">
              Accessories & Care
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mt-2">
              Beauty Products
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {beautyProducts.map((item, index) => (
              <div
                key={index}
                className="border border-[#e6e1da] p-6 flex items-center justify-between hover:border-[#183528] transition-all duration-300"
              >
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-[#183528] font-bold mt-2">{item.price}</p>
                </div>

                <button 
                  onClick={() => handleAddToCart(item)}
                  className="border border-[#183528] px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-[#183528] hover:text-white transition-all duration-300"
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="py-16 px-4 sm:px-6 lg:px-10 bg-[#183528] text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-300">
            Customer Reviews
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-12">
            Loved By Our Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              'The quality is amazing and the lace melts perfectly. Highly recommended!',
              'Shipping was fast and the wig density is exactly what I wanted.',
              'Best luxury wig store. The curls stay soft and beautiful for weeks.',
            ].map((review, index) => (
              <div
                key={index}
                className="bg-[#234736] p-8 border border-[#355846]"
              >
                <div className="text-2xl mb-4">★★★★★</div>
                <p className="leading-relaxed text-gray-200">{review}</p>
                <p className="mt-6 uppercase tracking-[0.2em] text-sm text-[#d6c4a7]">
                  Verified Customer
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 bg-[#f3efea]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="uppercase tracking-[0.3em] text-sm text-[#3a5c4b]">
                Live Social Media
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold mt-3 leading-tight">
                Stay Connected With JTS Beauty World
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Follow our latest wig drops, styling videos, transformations and
                customer reviews across all social media platforms.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://www.instagram.com/jtsbeautyworld?utm_source=qr&igsh=MXgxOHV0cWZvdHE2Zg=="
                  className="bg-[#183528] text-white px-6 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#2f5140] transition-all duration-300"
                >
                  Instagram
                </a>

                <a
                  href="https://www.tiktok.com/@jtsbeauty?_r=1&_t=ZP-96CYRj8ubNP"
                  className="border border-[#183528] text-[#183528] px-6 py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#183528] hover:text-white transition-all duration-300"
                >
                  TikTok
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 flex-1 w-full">
              <img
                src="images/burmese-curl-2.PNG"
                alt="Social"
                className="h-48 sm:h-72 w-full object-cover"
              />
              <img
                src="images/water-wave-2.PNG"
                alt="Social"
                className="h-48 sm:h-72 w-full object-cover"
              />
              <img
                src="images/body-wave-1.PNG"
                alt="Social"
                className="h-48 sm:h-72 w-full object-cover"
              />
              <img
                src="images/burmese-curl-3.PNG"
                alt="Social"
                className="h-48 sm:h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#183528] text-white px-4 sm:px-6 lg:px-10 py-16"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl lowercase font-light">JTS Beauty World</h3>
            <p className="mt-5 text-gray-300 leading-relaxed">
              Premium luxury wigs and beauty products crafted for confidence,
              elegance and beauty.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-sm text-[#d6c4a7] mb-5">
              Categories
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>Wigs</li>
              <li>Products</li>
              <li>Bonnets</li>
              <li>Bonnets</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-sm text-[#d6c4a7] mb-5">
              Contact
            </h4>

            <ul className="space-y-3 text-gray-300 break-words">
              <li>561-255-3698</li>
              <li>jtsbeautyworldboutiquellc@gmail.com</li>
              <li>Available 24/7 Online</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.2em] text-sm text-[#d6c4a7] mb-5">
              Social Media
            </h4>

            <div className="flex flex-col gap-3 text-gray-300">
              <a href="https://www.instagram.com/jtsbeautyworld?utm_source=qr&igsh=MXgxOHV0cWZvdHE2Zg==">
                Instagram
              </a>
              <a href="https://www.facebook.com/share/177aaiVESS/">
                Facebook
              </a>
              <a href="https://www.tiktok.com/@jtsbeauty?_r=1&_t=ZP-96CYRj8ubNP">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#355846] mt-14 pt-6 text-center text-sm text-gray-400">
          © 2026 JTS Beauty World — Luxury Wig Boutique.
        </div>
      </footer>
      </>
      )}

      {activePage === 'appointment' && (
        <section className="min-h-screen bg-[#f6f2ee] px-4 py-20 sm:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#3a5c4b]">
                Luxury Consultation
              </p>
              <h2 className="text-5xl font-black mt-4 leading-tight uppercase text-[#183528]">
                Set An Appointment
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                Schedule a private wig consultation inspired by the luxury Yaffa Wigs booking experience.
              </p>

              <div className="mt-10 space-y-5 text-[#183528]">
                <div className="flex gap-4 items-center bg-white p-5 shadow-sm">
                  <Calendar />
                  <span>In-Person Consultation</span>
                </div>

                <div className="flex gap-4 items-center bg-white p-5 shadow-sm">
                  <Calendar />
                  <span>Virtual Wig Appointment</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-xl border border-[#e7e1d8]">
              <h3 className="text-2xl font-semibold mb-6 uppercase tracking-[0.15em]">
                Book Appointment
              </h3>

              <div className="space-y-5">
                <input placeholder="Full Name" className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                <input placeholder="Email Address" className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                <input placeholder="Phone Number" className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />

                <select className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]">
                  <option>Select Wig Service</option>
                  <option>Custom Wig Consultation</option>
                  <option>Hair Styling</option>
                  <option>Wig Coloring</option>
                </select>

                <input type="date" className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />

                <textarea rows="5" placeholder="Additional Notes" className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]"></textarea>

                <button className="w-full bg-[#183528] text-white py-5 uppercase tracking-[0.2em] font-semibold hover:bg-[#2f5140] transition-all duration-300">
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {activePage === 'cart' && (
        <section className="min-h-screen bg-[#f6f2ee] px-4 py-20 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="uppercase tracking-[0.3em] text-sm text-[#3a5c4b]">
                  Shopping Cart
                </p>
                <h2 className="text-5xl font-black mt-3 uppercase">
                  Your Cart
                </h2>
              </div>

              <button
                onClick={() => setActivePage('home')}
                className="border border-[#183528] px-6 py-3 uppercase tracking-[0.15em] text-sm hover:bg-[#183528] hover:text-white transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>

            <div className="bg-white border border-[#e7e1d8] overflow-hidden">
              {cart.length === 0 ? (
                <div className="p-20 text-center">
                  <ShoppingBag size={60} className="mx-auto mb-6 text-[#183528]" />
                  <h3 className="text-3xl font-semibold">Your cart is empty</h3>
                  <p className="mt-4 text-gray-500">
                    Add your favorite wigs to begin shopping.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#eee]">
                  {cartDetails.map((item) => (
                    <div key={item.cartId} className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-5 flex-1">
                        {item.image && <img src={item.image} className="w-24 h-24 object-cover" />}
                        <div>
                          <h4 className="text-xl font-semibold">{item.title || item.name}</h4>
                          <p className="text-gray-500 mt-1">{item.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <p className="font-bold text-xl min-w-[80px] text-right">{item.price}</p>
                        <button
                          onClick={() => handleRemoveFromCart(item.cartId)}
                          className="text-red-500 hover:text-red-700 transition-all"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 bg-white border border-[#e7e1d8] p-6">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#e7e1d8]">
                <span className="text-xl font-semibold">Subtotal:</span>
                <span className="text-2xl font-bold text-[#183528]">
                  ${cartDetails.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '').replace('From ', '')) || 0), 0).toFixed(2)}
                </span>
              </div>
              <button 
                onClick={() => setActivePage('checkout')}
                className="w-full bg-[#183528] text-white px-10 py-5 uppercase tracking-[0.2em] font-semibold hover:bg-[#2f5140] transition-all duration-300"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </section>
      )}

      {activePage === 'details' && selectedProduct && (
        <section className="min-h-screen bg-white px-4 py-20 sm:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-[700px] object-cover"
              />
            </div>

            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#3a5c4b]">
                Luxury Collection
              </p>

              <h1 className="text-5xl font-black mt-4 uppercase leading-tight">
                {selectedProduct.title}
              </h1>

              <div className="flex items-center gap-2 mt-6">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <span className="text-gray-500 ml-2">Luxury Wig Collection</span>
              </div>

              <p className="text-4xl font-bold mt-8 text-[#183528]">
                {selectedProduct.price}
              </p>

              <p className="mt-8 text-gray-600 leading-relaxed text-lg">
                {selectedProduct.description}. Premium transparent lace wig crafted for a natural luxurious look inspired by Yaffa Wigs Miami.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <select className="border border-[#d9d1c7] p-4">
                  <option>Select Length</option>
                  <option>10 inch</option>
                  <option>20 inch</option>
                  <option>30 inch</option>
                  <option>40 inch</option>
                </select>

                <select className="border border-[#d9d1c7] p-4">
                  <option>Select Density</option>
                  <option>250 Density</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="bg-[#183528] text-white px-10 py-5 uppercase tracking-[0.2em] font-semibold hover:bg-[#2f5140] transition-all duration-300 flex-1"
                >
                  Add To Cart
                </button>

                <button
                  onClick={() => setActivePage('appointment')}
                  className="border border-[#183528] text-[#183528] px-10 py-5 uppercase tracking-[0.2em] font-semibold hover:bg-[#183528] hover:text-white transition-all duration-300 flex-1"
                >
                  Set Appointment
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {activePage === 'products' && (
        <section className="min-h-screen bg-[#f6f2ee] px-4 py-20 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="uppercase tracking-[0.3em] text-sm text-[#3a5c4b]">
                  Browse Collection
                </p>
                <h2 className="text-5xl font-black mt-3 uppercase">
                  {selectedProductType}
                </h2>
              </div>

              <button
                onClick={() => setActivePage('home')}
                className="border border-[#183528] px-6 py-3 uppercase tracking-[0.15em] text-sm hover:bg-[#183528] hover:text-white transition-all duration-300"
              >
                Back
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {selectedProductType === 'Wigs' && wigCategories.map((wig, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={wig.image}
                      alt={wig.title}
                      className="h-56 sm:h-80 w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold uppercase tracking-wide">
                      {wig.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">{wig.description}</p>
                    <p className="mt-4 font-bold text-lg">{wig.price}</p>

                    <div className="space-y-3 mt-5">
                      <button
                        onClick={() => {
                          setSelectedProduct(wig)
                          setActivePage('details')
                        }}
                        className="border border-[#183528] text-[#183528] px-5 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#183528] hover:text-white transition-all duration-300 w-full"
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => handleAddToCart(wig)}
                        className="bg-[#183528] text-white px-5 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#2f5140] transition-all duration-300 w-full"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {(selectedProductType === 'Lace Tints' || selectedProductType === 'Hair Products') && productCategories[selectedProductType]?.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#e6e1da] p-6 shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-[#183528] font-bold mt-4 text-xl">{product.price}</p>

                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full border border-[#183528] px-4 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#183528] hover:text-white transition-all duration-300 mt-5"
                  >
                    Add To Cart
                  </button>
                </div>
              ))}

              {selectedProductType === 'Bonnets' && productCategories['Bonnets']?.map((product, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#e6e1da] p-6 shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-[#183528] font-bold mt-4 text-xl">{product.price}</p>

                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full border border-[#183528] px-4 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#183528] hover:text-white transition-all duration-300 mt-5"
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activePage === 'checkout' && (
        <section className="min-h-screen bg-[#f6f2ee] px-4 py-20 sm:px-8">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="mb-10">
                <p className="uppercase tracking-[0.3em] text-sm text-[#3a5c4b]">
                  Secure Checkout
                </p>
                <h2 className="text-5xl font-black mt-4 uppercase text-[#183528]">
                  Complete Your Order
                </h2>
              </div>

              <div className="bg-white p-8 shadow-xl border border-[#e7e1d8] mb-8">
                <h3 className="text-2xl font-semibold mb-6 uppercase tracking-[0.15em]">
                  Billing Information
                </h3>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input placeholder="First Name" className="border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                    <input placeholder="Last Name" className="border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                  </div>

                  <input placeholder="Email Address" className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                  <input placeholder="Phone Number" className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                  <input placeholder="Street Address" className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                  
                  <div className="grid sm:grid-cols-3 gap-5">
                    <input placeholder="City" className="border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                    <input placeholder="State" className="border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                    <input placeholder="ZIP Code" className="border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 shadow-xl border border-[#e7e1d8]">
                <h3 className="text-2xl font-semibold mb-6 uppercase tracking-[0.15em]">
                  Payment Information
                </h3>

                <div className="space-y-5">
                  <input placeholder="Cardholder Name" className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                  <input placeholder="Card Number" className="w-full border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                  
                  <div className="grid grid-cols-2 gap-5">
                    <input placeholder="MM/YY" className="border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                    <input placeholder="CVV" className="border border-[#d9d1c7] p-4 outline-none focus:border-[#183528]" />
                  </div>

                  <button className="w-full bg-[#183528] text-white py-5 uppercase tracking-[0.2em] font-semibold hover:bg-[#2f5140] transition-all duration-300">
                    Place Order
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 shadow-xl border border-[#e7e1d8] sticky top-24">
                <h3 className="text-2xl font-semibold mb-6 uppercase tracking-[0.15em]">
                  Order Summary
                </h3>

                <div className="divide-y divide-[#e7e1d8] max-h-[400px] overflow-y-auto mb-6">
                  {cartDetails.map((item) => (
                    <div key={item.cartId} className="py-4">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-semibold text-sm">{item.title || item.name}</p>
                        <p className="font-bold">{item.price}</p>
                      </div>
                      {item.description && <p className="text-xs text-gray-500">{item.description.substring(0, 50)}...</p>}
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-[#183528] pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${cartDetails.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '').replace('From ', '')) || 0), 0).toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">$10.00</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${(cartDetails.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '').replace('From ', '')) || 0), 0) * 0.08).toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center bg-[#f6f2ee] p-3 mt-4">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl text-[#183528]">
                      ${(cartDetails.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '').replace('From ', '')) || 0), 0) + 10 + (cartDetails.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '').replace('From ', '')) || 0), 0) * 0.08)).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setActivePage('home')}
                  className="w-full border border-[#183528] text-[#183528] py-3 uppercase tracking-[0.2em] font-semibold hover:bg-[#183528] hover:text-white transition-all duration-300 mt-6"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden sm:block">
        <div className="bg-[#2f2f33] text-white px-4 py-8 rotate-180 [writing-mode:vertical-rl] tracking-[0.15em] uppercase text-sm">
          Get 10% Off
        </div>
      </div>
    </div>
  )
}
