'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function MeetCoachSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "transition-opacity duration-1000",
            isVisible ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="inline-block px-4 py-1 mb-4 bg-[#003366]">
            <span className="text-sm font-medium uppercase tracking-wider">Jouw coach</span>
          </div>
          <h2 className="text-3xl font-bold mb-16 tracking-tight">Ontmoet je coach</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Image Column - Slide in from Left */}
          <div
            className={cn(
              "md:col-span-5 relative h-[500px] md:h-auto transition-all duration-700 delay-200",
              isVisible ? "animate-in fade-in slide-in-from-left-16" : "opacity-0 -translate-x-16",
            )}
          >
            <div className="absolute inset-0 bg-[#a50100]/10 -m-4"></div>
            <div className="absolute inset-0 m-4">
              <Image
                src="/ptkragt.webp"
                alt="Julien, personal coach"
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
            <h3 className="text-2xl font-bold mb-6">Julien</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Julien is jouw persoonlijke online coach. Met zijn passie voor fitness en een wetenschappelijke
              benadering helpt hij je om je doelen op het gebied van gewichtsverlies en spieropbouw te bereiken.
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Zijn achtergrond in voedingswetenschap en jarenlange ervaring in krachttraining vormen de basis van zijn
              coaching. Julien combineert bewezen methoden met praktische tips, zodat jij het beste uit jezelf haalt.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#a50100] rounded-full"></div>
                <span>Online coach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#a50100] rounded-full"></div>
                <span>Voedingsdeskundige</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#a50100] rounded-full"></div>
                <span>Gewichtsverlies expert</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#a50100] rounded-full"></div>
                <span>Spieropbouw specialist</span>
              </div>
            </div>
            <Button className="bg-[#a50100] hover:bg-[#8a0100] rounded-none text-white">Plan een gesprek</Button>
          </div>
        </div>
      </div>
    </section>
  )
} 