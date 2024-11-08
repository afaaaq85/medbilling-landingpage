import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Adnan Naseer",
    role: "Director",
    content: "I am honored to extend my warmest greetings as the CEO of our esteemed medical billing company. At MedBilling, we are driven by a passion for excellence and a commitment to providing unparalleled services to our clients."
  },
  {
    id: 2,
    name: "Danyal Ahmad",
    role: "Account Manager",
    content: "As your dedicated Account Manager at MedBilling, I am thrilled to be part of your journey towards financial success. Together, we will streamline your revenue cycle, maximize reimbursements, and ensure seamless operations. Your success is our priority."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Client Relations Director",
    content: "Working with healthcare providers to optimize their billing processes has been incredibly rewarding. Our team's dedication to accuracy and efficiency has helped numerous practices thrive in today's challenging healthcare landscape."
  },
  {
    id: 4,
    name: "Umar Qadeer",
    role: "Owner at MedBilling LLC",
    content: "Working with healthcare providers to optimize their billing processes has been incredibly rewarding. Our team's dedication to accuracy and efficiency has helped numerous practices thrive in today's challenging healthcare landscape."
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)
  const dragStartRef = useRef(0)
  const dragAmountRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 2) % testimonials.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isDragging])

  const handleDragStart = (e) => {
    setIsDragging(true)
    dragStartRef.current = 'touches' in e ? e.touches[0].clientX : e.clientX
  }

  const handleDragMove = (e) => {
    if (!isDragging) return

    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX
    dragAmountRef.current = currentX - dragStartRef.current

    if (Math.abs(dragAmountRef.current) > 100) {
      const direction = dragAmountRef.current > 0 ? -1 : 1
      setCurrentIndex((prev) => {
        const newIndex = prev + direction
        if (newIndex < 0) return testimonials.length - 1
        if (newIndex >= testimonials.length) return 0
        return newIndex
      })
      setIsDragging(false)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    dragAmountRef.current = 0
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map(
              (testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col items-start gap-4 p-6 rounded-lg bg-white shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gray-100">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                </div>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#0070f3]' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
