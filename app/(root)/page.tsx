'use server'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import bg from '../../public/certificate-background.png'

export default async function Home() {
  return (
      <>
          <section id="presentation" className="w-full py-12 md:py-24 lg:py-32 bg-muted"
                   style={{
                       backgroundImage: `url(${bg.src})`,
                       width: '100%',
                       objectFit: 'contain',
                   }}>
              <div className="container px-4 md:px-6" >
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                      <div className="space-y-4">
                          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                              Especialistas en Certificaciones ISO de alta calidad
                          </h1>
                          <p className="max-w-[600px] text-muted-foreground md:text-xl">
                              Con años de experiencia y un equipo altamente calificado, garantizamos que tu empresa cumpla
                              con los estándares internacionales de calidad.
                          </p>
                          <div className="flex flex-col gap-2 min-[400px]:flex-row">

                              <Button size="lg" asChild>
                                  <Link href='/contacto' passHref>
                                      Contáctanos
                                  </Link>
                              </Button>
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
