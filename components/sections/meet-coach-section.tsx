'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function MeetCoachSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Color configuration - matching main page
  const primaryColor = "#68715E" // Green

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(section) // Animate only once
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    )

    observer.observe(section)

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "transition-opacity duration-1000",
            isVisible ? "opacity-100" : "opacity-0",
          )}
        >
          <div
            className={cn(
              "inline-block px-4 py-1 mb-4", 
              isVisible ? "opacity-100" : "opacity-0",
            )}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-white">Onze trainers</span>
          </div>
          <h2 className="text-3xl font-bold mb-16 tracking-tight text-gray-900">Ontmoet je coach</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Image Column - Slide in from Left */}
          <div
            className={cn(
              "md:col-span-5 relative h-[500px] md:h-auto transition-all duration-700 delay-200",
              isVisible ? "animate-in fade-in slide-in-from-left-16" : "opacity-0 -translate-x-16",
            )}
          >
            <div className="absolute inset-0" style={{ backgroundColor: `${primaryColor}1A` }} />
            <div className="absolute inset-0 m-4">
              <Image
                src="/body2coachpts.webp"
                alt="Team van Body2Coach trainers"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text Column - Slide in from Right */}
          <div
            className={cn(
              "md:col-span-7 transition-all duration-1000 delay-300",
              isVisible ? "animate-in fade-in slide-in-from-right-16" : "opacity-0 translate-x-16",
            )}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Al sinds 2013 in Apeldoorn</h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Al sinds 2013 is Body2Coach jouw personal trainer in Apeldoorn. Ons ervaren team helpt je met een unieke
              werkwijze naar het fitte lijf dat je verdient – op een manier die wél vol te houden is.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Of je nu individueel, als duo of in een groep traint, wij bieden persoonlijke aandacht, bewezen methoden
              en blijvende resultaten.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-gray-900">Training voor elke situatie</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-gray-900">Blijvende resultaten</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-gray-900">Grip op je leefstijl</span>
              </div>
            </div>
            <Button 
              className="rounded-none text-white hover:opacity-90" 
              style={{ backgroundColor: primaryColor }}
            >
              Plan een gratis intake
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 