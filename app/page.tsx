import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Facebook, Instagram, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from "react"
import { cn } from "@/lib/utils"
import { MeetCoachSection } from "../components/sections/meet-coach-section"

export default function Page() {
  const primaryColor = "#a50100" // Deep Red

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div style={{ color: primaryColor }} className="font-bold text-2xl">
              B
            </div>
            <span className="font-bold tracking-wider text-lg">Body Business Coaching</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent text-sm uppercase hover:text-[#c09a3e] focus:text-[#c09a3e] focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-none"
                >
                  Online Coaching
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-none">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#0f0f0f] border border-black/50">
                    <ListItem href="#personal" title="1-op-1 begeleiding">
                      Volledig op maat gemaakt programma met continue ondersteuning.
                    </ListItem>
                    <ListItem href="#challenge" title="8 Week Body Challenge">
                      Een vliegende start voor een gezondere levensstijl.
                    </ListItem>
                    <ListItem href="#werkwijze" title="Onze werkwijze">
                      Bekijk hoe we je helpen je doelen te bereiken.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#werkwijze" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-sm uppercase hover:text-[#c09a3e] focus:text-[#c09a3e] focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-none`}
                  >
                    Onze werkwijze
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-sm uppercase hover:text-[#c09a3e] focus:text-[#c09a3e] focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-none`}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      {/* Redesigned Hero Section - Full-width with Overlay */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/movegym.png"
            alt="Fitness training"
            fill
            className="object-cover object-center animate-in fade-in duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
            <div className="flex items-center mb-8">
              <div style={{ backgroundColor: primaryColor }} className="h-1 w-16 mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-gray-300">Jouw online coach</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-none">
              Behaal je <br />
              <span style={{ color: primaryColor }}>Fitness Doelen</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-lg font-light">
              Ontdek je potentieel met persoonlijke online coaching voor gewichtsverlies en spieropbouw.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                style={{ backgroundColor: primaryColor, color: "white" }}
                className="hover:bg-[#8a0100] px-8 py-6 rounded-none text-lg"
              >
                Bekijk diensten
              </Button>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div
                  className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-[#c09a3e] transition-colors"
                >
                  <ArrowRight className="h-5 w-5 group-hover:text-[#c09a3e] transition-colors" />
                </div>
                <span className="text-lg group-hover:text-[#c09a3e] transition-colors">Gesprek inplannen</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 flex flex-col items-end">
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
          <div className="h-px w-32 bg-white/30"></div>
        </div>
      </section>

      {/* Meet the Trainer Section */}
      <MeetCoachSection />

      {/* Main Services Section - Clear Separation */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Onze diensten</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Ontdek wat Body Business Coaching voor jou kan betekenen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Online Coaching */}
            <div className="bg-[#0f0f0f] border-t-4" style={{ borderTopColor: primaryColor }}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://www.strengthmovements.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-03-28-at-2.27.56-PM-600x598.jpeg"
                  alt="Online Coaching"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Online coaching</h3>
                <p className="text-gray-400 mb-6">
                  Krijg persoonlijke begeleiding en een plan op maat om je fitnessdoelen te bereiken, waar je ook
                  bent.
                </p>
                <Link href="#personal" className="inline-flex items-center" style={{ color: primaryColor }}>
                  <span>Ontdek meer</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* 8 Week Challenge */}
            <div className="bg-[#0f0f0f] border-t-4" style={{ borderTopColor: primaryColor }}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/oostenrijk.jpeg"
                  alt="8 Week Body Challenge"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">8 week body challenge</h3>
                <p className="text-gray-400 mb-6">
                  Een vliegende start naar een gezonder en fitter leven. Transformeer je lichaam en gewoontes in 8
                  weken.
                </p>
                <Link href="#challenge" className="inline-flex items-center" style={{ color: primaryColor }}>
                  <span>Bekijk de challenge</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Sport Trip */}
            <div className="bg-[#0f0f0f] border-t-4" style={{ borderTopColor: primaryColor }}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/oostenrijk-1.webp"
                  alt="Sport Trip Oostenrijk"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Sport trip Oostenrijk</h3>
                <p className="text-gray-400 mb-6">
                  Ga mee op een onvergetelijke sportreis naar de prachtige bergen van Oostenrijk.
                </p>
                <Link href="#trip" className="inline-flex items-center" style={{ color: primaryColor }}>
                  <span>Meer informatie</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-sm font-medium uppercase tracking-wider">Pakketten</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Kies jouw traject</h2>
            </div>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0">
              Selecteer het pakket dat het beste aansluit bij jouw persoonlijke fitnessdoelen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
            {[
              {
                title: "8 Week Body Challenge",
                description: "Een vliegende start voor een gezonder en fitter leven.",
                features: [
                  "Ongezonde patronen doorbreken",
                  "Opbouwen van gezonde gewoontes",
                  "Passend trainingsschema op niveau",
                  "24/7 toegang tot Move Fitness",
                  "Voedingsplan met recepten",
                  "Professionele berekening energieverbruik",
                ],
                price: "€249",
                period: "eenmalig",
              },
              {
                title: "1-op-1 Online Coaching",
                description: "Continue persoonlijke begeleiding voor maximaal resultaat.",
                features: [
                  "Trainingsschema op maat",
                  "Continue voortgang bijhouden",
                  "Regelmatige feedbackmomenten",
                  "Advies over voeding & herstel",
                  "Strategie voor je doelen",
                  "Onbeperkt contact via WhatsApp",
                ],
                price: "€149",
                period: "per maand",
                highlighted: true,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-10 ${
                  plan.highlighted
                    ? `bg-[${primaryColor}]/10 border-t-4`
                    : "bg-[#0f0f0f] border-t-4 border-t-transparent"
                } ${index === 0 ? "" : "border-l border-l-white/10"}`}
                style={{ borderTopColor: plan.highlighted ? primaryColor : "transparent" }}
              >
                <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
                <p className="text-gray-400 mb-6 h-12">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span style={{ color: primaryColor }} className="mr-2">
                        ✓
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-none ${
                    plan.highlighted ? "text-white" : "bg-[#111] hover:bg-[#222] text-white"
                  }`}
                  style={{ backgroundColor: plan.highlighted ? primaryColor : "" }}
                >
                  Bekijk details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Training Section - Split with Image */}
      <section id="personal" className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-sm font-medium uppercase tracking-wider">1-op-1 coaching</span>
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Persoonlijke begeleiding</h2>
              <p className="text-gray-300 mb-8">
                Klaar voor de volgende stap? Met onze persoonlijke online coaching helpen we je optimaal voorbereid te
                zijn. Verwacht een volledig op maat gemaakt programma met continue ondersteuning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  "Trainingsschema op maat",
                  "Continue voortgang bijhouden",
                  "Regelmatige feedbackmomenten",
                  "Advies over voeding & herstel",
                  "Strategie voor je doelen",
                  "Onbeperkt contact via WhatsApp",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div
                      className="mt-1 mr-3 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${primaryColor}33` }}
                    >
                      <span style={{ color: primaryColor }} className="text-xs">
                        ✓
                      </span>
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Button style={{ backgroundColor: primaryColor }} className="hover:bg-[#8a0100] rounded-none text-white">
                Plan een intakegesprek
              </Button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-auto">
              <div className="absolute inset-0" style={{ backgroundColor: `${primaryColor}1A` }}></div>
              <div className="absolute inset-0 m-4">
                <Image
                  src="/ptvoorbeeld.jpg"
                  alt="Personal training sessie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sport Trip to Austria Section */}
      <section id="trip" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-sm font-medium uppercase tracking-wider">Sport Trip</span>
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Ga je met ons mee?</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-white font-bold">🗓️</span>
                  </div>
                  <div>
                    <p className="font-semibold">1 t/m 6 oktober 2025</p>
                    <p className="text-gray-400 text-sm">6 dagen intensieve training</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-white font-bold">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Hochkrimml, Oostenrijk</p>
                    <p className="text-gray-400 text-sm">Prachtige bergomgeving</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-white font-bold">➡️</span>
                  </div>
                  <div>
                    <p className="font-semibold">Er zijn nog 2 plekken beschikbaar!</p>
                    <p className="text-gray-400 text-sm">Beperkte beschikbaarheid</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  style={{ backgroundColor: primaryColor, color: "white" }}
                  className="hover:bg-[#8a0100] px-8 py-6 rounded-none text-lg"
                >
                  Meer informatie
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-none text-lg"
                >
                  Direct aanmelden
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                <Image
                  src="/oostenrijk-1.webp"
                  alt="Sport trip naar Oostenrijk"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-black px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">2 plekken</p>
                <p className="text-sm text-gray-600">beschikbaar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Werkwijze Section - Vertical Timeline */}
      <section id="werkwijze" className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
            <span className="text-sm font-medium uppercase tracking-wider">Jouw traject</span>
          </div>
          <h2 className="text-3xl font-bold mb-16 tracking-tight">Onze werkwijze</h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-white/10"></div>

            {[
              {
                number: "01",
                title: "Intake & doelstelling",
                description:
                  "We starten met een uitgebreid gesprek om je doelen, huidige levensstijl en wensen in kaart te brengen.",
              },
              {
                number: "02",
                title: "Persoonlijk plan",
                description:
                  "Je ontvangt een op maat gemaakt trainings- en voedingsplan, volledig afgestemd op jouw lichaam en doelen.",
              },
              {
                number: "03",
                title: "Wekelijkse check-ins",
                description:
                  "We houden je voortgang nauwlettend in de gaten en sturen bij waar nodig om maximale resultaten te garanderen.",
              },
              {
                number: "04",
                title: "Resultaat en verder",
                description:
                  "Na het traject heb je niet alleen je doelen bereikt, maar heb je ook de kennis om je gezonde levensstijl vast te houden.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative mb-16 last:mb-0 flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16"}`}>
                  <div className={`inline-block mb-2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <span style={{ color: primaryColor }} className="text-5xl font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                <div
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-[#0f0f0f] z-10"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section - Minimal Dark */}
      <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-sm font-medium uppercase tracking-wider">Contact</span>
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Vragen of interesse?</h2>
              <p className="text-gray-300 mb-8">
                Klaar om je fysieke doelen te bereiken of heb je een vraag? Neem contact op via onderstaand formulier
                of mail direct.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <Mail style={{ color: primaryColor }} className="mr-4" />
                  <a href="mailto:info@bodybusinesscoaching.nl" className="hover:text-[#c09a3e]">
                    info@bodybusinesscoaching.nl
                  </a>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#c09a3e] hover:border-[#c09a3e] transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#c09a3e] hover:border-[#c09a3e] transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#c09a3e] hover:border-[#c09a3e] transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-[#c09a3e] transition-colors focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-[#c09a3e] transition-colors focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Interesse in
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-[#c09a3e] transition-colors focus:outline-none text-white/70"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#0a0a0a] text-white/50">
                      Selecteer een dienst...
                    </option>
                    <option value="online-coaching" className="bg-[#0a0a0a] text-white">
                      Online Coaching
                    </option>
                    <option value="8-week-challenge" className="bg-[#0a0a0a] text-white">
                      8 Week Body Challenge
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-[#c09a3e] transition-colors focus:outline-none"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                  className="w-full hover:bg-[#8a0100] rounded-none"
                >
                  Verstuur bericht
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="py-8 bg-[#0a0a0a] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div style={{ color: primaryColor }} className="font-bold text-xl">
                B
              </div>
              <span className="font-bold tracking-wider">Body Business Coaching</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Body Business Coaching
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Helper component for dropdown list items
const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#c09a3e]/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-white">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
