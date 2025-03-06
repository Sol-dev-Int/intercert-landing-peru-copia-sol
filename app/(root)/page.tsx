'use server'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default async function Home() {
  return (
      <>
          <section id="presentation" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
              <div className="container px-4 md:px-6">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">

                      <div className="space-y-4">
                          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                              Your Trusted Partner for ISO Certification in Peru
                          </h1>
                          <p className="max-w-[600px] text-muted-foreground md:text-xl">
                              Intercert helps organizations achieve international standards through comprehensive ISO certification
                              services. Enhance your credibility and operational excellence.
                          </p>
                          <div className="flex flex-col gap-2 min-[400px]:flex-row">
                              <Button size="lg">Get Started</Button>
                              <Button variant="outline" size="lg">
                                  Learn More
                              </Button>
                          </div>
                      </div>



                      {/*TODO: add socials */}


                  </div>
              </div>
          </section>
          <section>

          </section>
          <section>
              {/*TODO: carrusel empresas */}
          </section>
          <section>
              <h2> Servicios </h2>
          </section>
          <section>
              <h2> Acreditaciones </h2>
          </section>
          <section>
              <h2> mas de +17 años de experiencia</h2>
          </section>
          <section>
              <h2> Parthners </h2>
          </section>
          <section>
              <h2> Porque intercert  </h2>
          </section>
          <section>
              <h2> Contacto </h2>
          </section>


      </>
  );
}
