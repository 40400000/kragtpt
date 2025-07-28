import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Facebook, Instagram, Mail, Twitter } from "lucide-react"
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
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#003366]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-[#003366] font-bold text-2xl">H</div>
            <span className="font-bold tracking-wider text-lg">Strength Movements</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm uppercase hover:text-[#003366] focus:text-[#003366] focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-none">
                  Krachtschema&apos;s
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-none">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-[#0f0f0f] border border-black/50">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="#schema"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">Alle schema's</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Gestructureerde plannen voor elke afstand.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#schema" title="Sprint afstand">
                      Focus op snelheid en techniek.
                    </ListItem>
                    <ListItem href="#schema" title="Halve triathlon / 70.3">
                      Balans tussen duurvermogen en intensiteit.
                    </ListItem>
                    <ListItem href="#schema" title="Hele triathlon / Ironman">
                      Complete voorbereiding op de ultieme uitdaging.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm uppercase hover:text-[#003366] focus:text-[#003366] focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-none">
                  Personal Training
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-none">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#0f0f0f] border border-black/50">
                    <ListItem href="#personal" title="1-op-1 begeleiding">
                      Volledig op maat gemaakt programma met continue ondersteuning.
                    </ListItem>
                    <ListItem href="#personal" title="Intakegesprek plannen">
                      Start jouw traject met een persoonlijk gesprek.
                    </ListItem>
                    <ListItem href="#analyses" title="Analyses & testen">
                      Optimaliseer je training met data-gedreven inzichten.
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
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-sm uppercase hover:text-[#003366] focus:text-[#003366] focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-none`}
                  >
                    Onze werkwijze
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent text-sm uppercase hover:text-[#003366] focus:text-[#003366] focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-none`}
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
            src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/gertjan/triathlon680f8a5e03d3b_jpg-3LwAChX6lZGf4aWLdjsZdT0KiLdEgP.jpg"
            alt="Triathlete in actie"
            fill
            className="object-cover object-center animate-in fade-in duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
            <div className="flex items-center mb-8">
              <div className="h-1 w-16 bg-[#003366] mr-4"></div>
              <span className="text-sm uppercase tracking-widest text-gray-300">Professionele coaching</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-none">
              Triathlon <br />
              <span className="text-[#003366]">Excellentie</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-lg font-light">
              Ontdek jouw volledige potentieel met gepersonaliseerde training op het hoogste niveau
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-[#003366] hover:bg-[#002244] text-white px-8 py-6 rounded-none text-lg">
                Bekijk diensten
              </Button>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-[#003366] transition-colors">
                  <ArrowRight className="h-5 w-5 group-hover:text-[#003366] transition-colors" />
                </div>
                <span className="text-lg group-hover:text-[#003366] transition-colors">Gesprek inplannen</span>
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

      {/* Meet the Trainer Section - Now using Client Component */}
      <MeetCoachSection />

      {/* Main Services Section - Clear Separation */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Onze diensten</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Ontdek wat Strength Movements voor jou kan betekenen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kracht Schema's */}
            <div className="bg-[#0f0f0f] border-t-4 border-t-[#003366] group hover:bg-[#111] transition-colors">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/gertjan/schemas-pO1PLPWb2nJdyQ4P7msaTGTZpyBDO7.jpg"
                  alt="Kracht Schema's"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Kracht schema&apos;s</h3>
                <p className="text-gray-400 mb-6">
                  Ontvang een gestructureerd triathlonschema voor jouw specifieke afstand, van Sprint tot Ironman of
                  Xterra. Start vandaag nog met doelgericht trainen.
                </p>
                <Link href="#schema" className="inline-flex items-center text-[#003366] group-hover:text-white">
                  <span>Bekijk abonnementen</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Personal Training */}
            <div className="bg-[#0f0f0f] border-t-4 border-t-[#003366] group hover:bg-[#111] transition-colors">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://www.strengthmovements.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-03-28-at-2.27.56-PM-600x598.jpeg"
                  alt="Personal Training"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Personal training</h3>
                <p className="text-gray-400 mb-6">
                  Ambitie voor een (halve) Ironman? Met onze persoonlijke online coaching sta jij optimaal voorbereid
                  aan de start. Ontdek onze 1-op-1 begeleiding.
                </p>
                <Link href="#personal" className="inline-flex items-center text-[#003366] group-hover:text-white">
                  <span>Ontdek meer</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Analyses & Testen */}
            <div className="bg-[#0f0f0f] border-t-4 border-t-[#003366] group hover:bg-[#111] transition-colors">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/gertjan/metingen-qHW7g5flg00z5Lo70R8OAA2CCBUGKo.jpg"
                  alt="Analyses & Testen"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Analyses en testen</h3>
                <p className="text-gray-400 mb-6">
                  Optimaliseer je training door inzicht in je huidige niveau. Bepaal je hartslagzones, meet je vermogen
                  (FTP) of analyseer je techniek.
                </p>
                <Link href="#analyses" className="inline-flex items-center text-[#003366] group-hover:text-white">
                  <span>Bekijk testen</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kracht Schema's Section - Minimalist Cards */}
      <section id="schema" className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <div className="inline-block px-4 py-1 mb-4 bg-[#003366]">
                <span className="text-sm font-medium uppercase tracking-wider">Abonnementen</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Krachtschema&apos;s & pakketten</h2>
            </div>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0">
              Kies het abonnement dat het beste bij jouw doelen en ambities past.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {[
              {
                title: "Sprint afstand",
                description: "Gerichte training voor de kortere triathlonafstanden.",
                features: [
                  "Persoonlijk trainingsschema",
                  "Wekelijkse updates & feedback",
                  "Focus op snelheid & techniek",
                  "Coach bereikbaar via WhatsApp",
                ],
                price: "€79",
                period: "per maand",
              },
              {
                title: "Halve triathlon / 70.3",
                description: "Gestructureerde voorbereiding op de middellange afstand.",
                features: [
                  "Uitgebreid persoonlijk schema",
                  "Regelmatige analyse & bijsturing",
                  "Balans duurvermogen & intensiteit",
                  "Coach bereikbaar via WhatsApp",
                ],
                price: "€119",
                period: "per maand",
                highlighted: true,
              },
              {
                title: "Hele triathlon / Ironman",
                description: "Complete begeleiding voor jouw Ironman uitdaging.",
                features: [
                  "Compleet persoonlijk programma",
                  "Continue monitoring & feedback",
                  "Voedings- & wedstrijdstrategie",
                  "Coach bereikbaar via WhatsApp",
                ],
                price: "€159",
                period: "per maand",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-10 ${
                  plan.highlighted
                    ? "bg-[#003366]/10 border-t-4 border-t-[#003366]"
                    : "bg-[#0f0f0f] border-t-4 border-t-transparent"
                } ${index === 0 ? "" : "border-l border-l-white/10"}`}
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
                      <span className="text-[#003366] mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-none ${
                    plan.highlighted ? "bg-[#003366] hover:bg-[#002244] text-white" : "bg-[#111] hover:bg-[#222] text-white"
                  }`}
                >
                 Bekijk details
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Training Section - Split with Image */}
      <section id="personal" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1 mb-4 bg-[#003366]">
                <span className="text-sm font-medium uppercase tracking-wider">1-op-1 coaching</span>
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Persoonlijke begeleiding</h2>
              <p className="text-gray-300 mb-8">
                Klaar voor de volgende stap? Met onze persoonlijke online coaching helpen we je optimaal voorbereid aan de start te staan van jouw (halve) Ironman. Verwacht een volledig op maat gemaakt programma met continue ondersteuning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  "Trainingsschema op maat",
                  "Continue voortgang bijhouden",
                  "Regelmatige feedbackmomenten",
                  "Advies over voeding & herstel",
                  "Strategie voor de wedstrijddag",
                  "Onbeperkt contact via WhatsApp",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-1 mr-3 w-5 h-5 rounded-full bg-[#003366]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#003366] text-xs">✓</span>
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-[#003366] hover:bg-[#002244] rounded-none text-white">Plan een intakegesprek</Button>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-auto">
              <div className="absolute inset-0 bg-[#003366]/10 -m-4"></div>
              <div className="absolute inset-0 m-4">  
                <Image
                  src="https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/gertjan/traithlonbike-hRviEorRz052gi12tVEQqNcryMTBZW.jpg"
                  alt="Personal training sessie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analyses & Testing Section - Redesigned Grid Layout */}
      <section id="analyses" className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <div className="inline-block px-4 py-1 mb-4 bg-[#003366]">
                <span className="text-sm font-medium uppercase tracking-wider">Optimaliseer je training</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Analyses & prestatietesten</h2>
            </div>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0">
              Krijg inzicht in je huidige niveau en train gerichter met onze analyses en testen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Hartslagzones bepalen",
                description:
                  "Weet precies in welke zones je moet trainen voor optimaal resultaat bij fietsen en hardlopen.",
                image: "/heart-rate-zones.png",
              },
              {
                title: "Vermogenstests (Ramp & FTP)",
                description: "Meet je maximale vermogen en functionele drempelvermogen (FTP) voor fietsen en lopen.",
                image: "/ramp-test.png",
              },
              {
                title: "Zwemniveau bepalen",
                description: "Specifieke zwemtesten om je training in het water af te stemmen op jouw niveau.",
                image: "/ftp-test.png",
              },
              {
                title: "Techniekanalyse",
                description: "Ontvang gedetailleerde feedback op je zwem-, fiets- of looptechniek via videoanalyse.",
                image: "/swim-analysis.png",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] border border-white/10 group hover:border-[#003366] transition-colors overflow-hidden"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#003366] hover:bg-[#002244] rounded-none px-8 py-6 text-white">Bekijk alle testen</Button>
          </div>
        </div>
      </section>

      {/* Onze Werkwijze Section - Vertical Timeline */}
      <section id="werkwijze" className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-1 mb-4 bg-[#003366]">
            <span className="text-sm font-medium uppercase tracking-wider">Jouw coach</span>
          </div>
          <h2 className="text-3xl font-bold mb-16 tracking-tight">Onze werkwijze</h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-white/10"></div>

            {[
              {
                number: "01",
                title: "Start met een schema",
                description:
                  "Je ontvangt een duidelijk, gestructureerd trainingsschema, afgestemd op jouw gekozen afstand en niveau.",
              },
              {
                number: "02",
                title: "Begeleiding waar nodig",
                description:
                  "Vind je het lastig om zelf aan de slag te gaan? Elliot biedt coaching en ondersteuning op maat.",
              },
              {
                number: "03",
                title: "Focus op jouw doel",
                description:
                  "We houden je voortgang in de gaten en zorgen dat je gericht blijft trainen voor jouw specifieke doel.",
              },
              {
                number: "04",
                title: "Bereik je ambities",
                description: "Met de juiste structuur en coaching helpen we je om jouw triathlonambities waar te maken.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative mb-16 last:mb-0 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16"}`}>
                  <div className={`inline-block mb-2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <span className="text-[#003366] text-5xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#003366] border-2 border-[#0f0f0f] z-10"></div>
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
              <div className="inline-block px-4 py-1 mb-4 bg-[#003366]">
                <span className="text-sm font-medium uppercase tracking-wider">Contact</span>
              </div>
              <h2 className="text-3xl font-bold mb-8 tracking-tight">Vragen of interesse?</h2>
              <p className="text-gray-300 mb-8">
                Klaar om je triathlonprestaties naar een hoger niveau te tillen of heb je een vraag? Neem contact op
                via onderstaand formulier of mail direct.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <Mail className="text-[#003366] mr-4" />
                  <a href="mailto:info@strengthmovements.com" className="hover:text-[#003366]">
                    info@strengthmovements.com
                  </a>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#003366] hover:border-[#003366] transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#003366] hover:border-[#003366] transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#003366] hover:border-[#003366] transition-colors"
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
                      className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-[#003366] transition-colors focus:outline-none"
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
                      className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-[#003366] transition-colors focus:outline-none"
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
                    className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-[#003366] transition-colors focus:outline-none text-white/70"
                    required
                  >
                    <option value="" disabled selected className="bg-[#0a0a0a] text-white/50">
                      Selecteer een dienst...
                    </option>
                    <option value="krachtschemas" className="bg-[#0a0a0a] text-white">
                      Krachtschema's
                    </option>
                    <option value="personal-training" className="bg-[#0a0a0a] text-white">
                      Personal training
                    </option>
                    <option value="metingen" className="bg-[#0a0a0a] text-white">
                      Analyses & metingen
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
                    className="w-full px-4 py-3 bg-transparent border border-white/10 focus:border-[#003366] transition-colors focus:outline-none"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-[#003366] hover:bg-[#002244] rounded-none text-white">Verstuur bericht</Button>
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
              <div className="text-[#003366] font-bold text-xl">H</div>
              <span className="font-bold tracking-wider">Strength Movements</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Strength Movements
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
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#003366]/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
