"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Facebook,
  Instagram,
  Mail,
  Twitter,
  Menu,
  X,
  Dumbbell,
  Scale,
  Zap,
  TrendingUp,
  ShieldPlus,
  Carrot,
} from "lucide-react"
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
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { MeetCoachSection } from "../components/sections/meet-coach-section"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Color configuration - hardcoded for easy reference
  const backgroundColor = "#ffffff" // White
  const primaryColor = "#68715E" // Green
  const textColor = "#1a1a1a" // Dark text
  const grayText = "#6b7280" // Gray text

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
          <span className="font-bold tracking-wider text-lg text-gray-900">Body2Coach</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm uppercase hover:text-[#68715E]">
              Home
            </Link>
            <Link href="/over-ons" className="text-sm uppercase hover:text-[#68715E]">
              Over ons
            </Link>
            <Link href="#werkwijze" className="text-sm uppercase hover:text-[#68715E]">
              Onze aanpak
            </Link>
            <Link href="#services" className="text-sm uppercase hover:text-[#68715E]">
              Doelen
            </Link>
            <Link href="/blog" className="text-sm uppercase hover:text-[#68715E]">
              Blog
            </Link>
            <Link href="#contact" className="text-sm uppercase hover:text-[#68715E]">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden border-gray-300 text-gray-900"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center animate-in fade-in duration-300 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          <nav className="flex flex-col items-center gap-8">
            <Link
              href="/"
              className="text-2xl font-semibold hover:text-[#68715E]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/over-ons"
              className="text-2xl font-semibold hover:text-[#68715E]"
              onClick={() => setIsMenuOpen(false)}
            >
              Over ons
            </Link>
            <Link
              href="#werkwijze"
              className="text-2xl font-semibold hover:text-[#68715E]"
              onClick={() => setIsMenuOpen(false)}
            >
              Onze aanpak
            </Link>
            <Link
              href="#services"
              className="text-2xl font-semibold hover:text-[#68715E]"
              onClick={() => setIsMenuOpen(false)}
            >
              Doelen
            </Link>
            <Link
              href="/blog"
              className="text-2xl font-semibold hover:text-[#68715E]"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-2xl font-semibold hover:text-[#68715E]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
      {/* Redesigned Hero Section - Full-width with Overlay */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Fitness training"
            fill
            className="object-cover object-center animate-in fade-in duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
            <div className="flex items-center mb-8">
              <div style={{ backgroundColor: primaryColor }} className="h-1 w-16 mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-white">Zoek je een personal trainer?</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              Al sinds 2013 jouw personal trainer in Apeldoorn
            </h1>
            <p className="text-lg md:text-xl text-white mb-12 max-w-2xl font-light">
              Ons team helpt je met een unieke werkwijze naar het fitte lijf dat je verdient – op een manier die wél
              vol te houden is.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                style={{ backgroundColor: primaryColor, color: "white" }}
                className="hover:opacity-90 px-8 py-6 rounded-none text-lg"
              >
                Maak nu gratis kennis
              </Button>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div
                  className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center group-hover:border-[#68715E] transition-colors"
                >
                  <ArrowRight className="h-5 w-5 group-hover:text-[#68715E] transition-colors text-white" />
                </div>
                <span className="text-lg group-hover:text-[#68715E] transition-colors text-white">Plan een intakegesprek</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 flex flex-col items-end">
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Facebook
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Twitter
            </a>
          </div>
          <div className="h-px w-32 bg-gray-400"></div>
        </div>
      </section>

      {/* Meet the Trainer Section */}
      <MeetCoachSection />

      {/* Goals Section - Replaced Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Personal training voor jouw doelen</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Kies wat bij jou past! Terugval en weinig resultaat is verleden tijd. Onze personal training in Apeldoorn
              helpt je met het halen van resultaten in afvallen, maar ook zul je sterker en fitter worden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Scale className="h-10 w-10 mb-4" style={{ color: primaryColor }} />,
                title: "Afvallen & gewichtsverlies",
              },
              {
                icon: <Dumbbell className="h-10 w-10 mb-4" style={{ color: primaryColor }} />,
                title: "Krachttraining - sterker worden",
              },
              {
                icon: <Zap className="h-10 w-10 mb-4" style={{ color: primaryColor }} />,
                title: "Fitter worden - meer energie",
              },
              {
                icon: <TrendingUp className="h-10 w-10 mb-4" style={{ color: primaryColor }} />,
                title: "Conditie verbeteren",
              },
              {
                icon: <ShieldPlus className="h-10 w-10 mb-4" style={{ color: primaryColor }} />,
                title: "Trainen met blessures",
              },
              {
                icon: <Carrot className="h-10 w-10 mb-4" style={{ color: primaryColor }} />,
                title: "Gezonder leren eten",
              },
            ].map((goal, index) => (
              <div key={index} className="bg-white p-8 shadow-sm flex flex-col items-center text-center">
                {goal.icon}
                <h3 className="text-xl font-bold text-gray-900">{goal.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-sm font-medium uppercase tracking-wider text-white">Trainingsvormen</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Onze trainingsvormen</h2>
            </div>
            <p className="text-gray-600 max-w-md mt-4 md:mt-0">
              Wij bieden diverse trainingen die passen bij jouw doelen, van privé-sessies tot groepstrainingen en
              bedrijfstrajecten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Privé-training",
                description: "1-op-1 training in onze studio voor maximaal resultaat en persoonlijke aandacht.",
                features: [
                  "Volledig gepersonaliseerde training",
                  "Directe feedback en correctie",
                  "Flexibele planning",
                  "Voortgangsmetingen",
                  "Voedings- en hersteladvies",
                ],
                highlighted: true,
              },
              {
                title: "DUO training",
                description: "Train samen met een vriend, partner of familielid voor extra motivatie.",
                features: [
                  "Training met z'n tweeën",
                  "Gedeelde kosten",
                  "Wederzijdse motivatie",
                  "Aangepaste oefeningen voor beiden",
                  "Flexibele planning",
                ],
              },
              {
                title: "Groepstrainingen",
                description: "Laagdrempelige Small Group Training of de intensieve LEVEL UP training.",
                features: [
                  "Begeleiding van ervaren trainer",
                  "Keuze uit Small Group of LEVEL UP",
                  "Veilig en toch uitdagend",
                  "Persoonlijke adviezen in de groep",
                  "Vaste trainingsmomenten",
                ],
              },
              {
                title: "Trainen via werkgever",
                description: "Investeer in de gezondheid en productiviteit van je medewerkers.",
                features: [
                  "Fittere en energiekere medewerkers",
                  "Verlaagt ziekteverzuim",
                  "Versterkt teambuilding",
                  "Programma's op maat",
                  "Fiscaal voordelige opties",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-8 bg-white border-2 flex flex-col ${
                  plan.highlighted ? "border-[#68715E] shadow-lg" : "border-gray-200"
                } rounded-lg`}
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{plan.title}</h3>
                  <p className="text-gray-600 mb-6 h-24">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span style={{ color: primaryColor }} className="mr-2 pt-1">
                          ✓
                        </span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className={`w-full rounded-none mt-auto ${
                    plan.highlighted ? "text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                  style={{ backgroundColor: plan.highlighted ? primaryColor : "" }}
                >
                  Meer informatie
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Coaching Section */}
      <section id="online" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-sm font-medium uppercase tracking-wider text-white">Online coaching</span>
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight text-gray-900">Persoonlijke begeleiding op afstand</h2>
              <p className="text-gray-700 mb-8">
                Klaar voor de volgende stap? Met onze online coaching helpen we je je doelen te bereiken, waar je ook bent. 
                Verwacht een volledig op maat gemaakt programma met continue ondersteuning.
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
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button style={{ backgroundColor: primaryColor }} className="hover:opacity-90 rounded-none text-white">
                Plan een intakegesprek
              </Button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-auto">
              <div className="absolute inset-0" style={{ backgroundColor: `${primaryColor}1A` }}></div>
              <div className="absolute inset-0 m-4">
                <Image
                  src="/ptvoorbeeld.jpg"
                  alt="Online coaching sessie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Training Section */}
      <section id="personal" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-sm font-medium uppercase tracking-wider text-white">Personal Training</span>
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight text-gray-900">1-op-1 training in de studio</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-white font-bold">💪</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Volledige aandacht</p>
                    <p className="text-gray-600 text-sm">1-op-1 begeleiding voor maximaal resultaat</p>
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
                    <p className="font-semibold text-gray-900">Professionele studio</p>
                    <p className="text-gray-600 text-sm">Volledig uitgeruste trainingsruimte</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Directe feedback</p>
                    <p className="text-gray-600 text-sm">Onmiddellijke correctie van technieken</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  style={{ backgroundColor: primaryColor, color: "white" }}
                  className="hover:opacity-90 px-8 py-6 rounded-none text-lg"
                >
                  Proefles boeken
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#68715E] text-[#68715E] hover:bg-[#68715E]/10 px-8 py-6 rounded-none text-lg"
                >
                  Meer informatie
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                <Image
                  src="/pttraining.webp"
                  alt="Personal training in de studio"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-white/10"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#68715E] text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-lg">€75</p>
                <p className="text-sm">per sessie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Duo Training Section */}
      <section id="duo" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1">
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                <Image
                  src="/duotraining.webp"
                  alt="Duo training"
                  fill
                  className="object-cover object-center"
                />
                {/* Removed the overlay div */}
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#68715E] text-white px-6 py-3 rounded-lg shadow-lg">
                {/* Pricing removed */}
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-sm font-medium uppercase tracking-wider text-white">Duo Training</span>
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight text-gray-900">Train samen, bereik meer</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-white font-bold">👥</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Samen trainen</p>
                    <p className="text-gray-600 text-sm">Met een vriend, partner of familielid</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-white font-bold">💰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Kosteneffectief</p>
                    <p className="text-gray-600 text-sm">Deel de kosten van personal training</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="text-white font-bold">🔥</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Extra motivatie</p>
                    <p className="text-gray-600 text-sm">Steun elkaar tijdens de training</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  style={{ backgroundColor: primaryColor, color: "white" }}
                  className="hover:opacity-90 px-8 py-6 rounded-none text-lg"
                >
                  Duo sessie boeken
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#68715E] text-[#68715E] hover:bg-[#68715E]/10 px-8 py-6 rounded-none text-lg"
                >
                  Meer informatie
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Werkwijze Section - Vertical Timeline */}
      <section id="werkwijze" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
            <span className="text-sm font-medium uppercase tracking-wider text-white">Jouw traject</span>
          </div>
          <h2 className="text-3xl font-bold mb-16 tracking-tight text-gray-900">Onze werkwijze</h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-gray-300"></div>

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
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-white z-10"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-4 py-1 mb-4" style={{ backgroundColor: primaryColor }}>
                <span className="text-sm font-medium uppercase tracking-wider text-white">Contact</span>
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight text-gray-900">Vragen of interesse?</h2>
              <p className="text-gray-700 mb-8">
                Klaar om je krachtdoelen te bereiken of heb je een vraag? Neem contact op via onderstaand formulier
                of mail direct.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <Mail style={{ color: primaryColor }} className="mr-4" />
                  <a href="mailto:info@personalkragttraining.nl" className="hover:text-[#68715E] text-gray-700">
                    info@personalkragttraining.nl
                  </a>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-[#68715E] hover:border-[#68715E] hover:text-white transition-colors text-gray-600"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-[#68715E] hover:border-[#68715E] hover:text-white transition-colors text-gray-600"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-[#68715E] hover:border-[#68715E] hover:text-white transition-colors text-gray-600"
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
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#68715E] transition-colors focus:outline-none text-gray-900"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#68715E] transition-colors focus:outline-none text-gray-900"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-900">
                    Interesse in
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#68715E] transition-colors focus:outline-none text-gray-900"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-white text-gray-500">
                      Selecteer een dienst...
                    </option>
                    <option value="online-coaching" className="bg-white text-gray-900">
                      Online Coaching
                    </option>
                    <option value="personal-training" className="bg-white text-gray-900">
                      Personal Training
                    </option>
                    <option value="duo-training" className="bg-white text-gray-900">
                      Duo Training
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#68715E] transition-colors focus:outline-none text-gray-900"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                  className="w-full hover:opacity-90 rounded-none"
                >
                  Verstuur bericht
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div style={{ color: primaryColor }} className="font-bold text-xl">
                P
              </div>
              <span className="font-bold tracking-wider text-gray-900">Personal Kragt Training</span>
            </div>
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Personal Kragt Training
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
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
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#68715E]/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-gray-900">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-600">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
