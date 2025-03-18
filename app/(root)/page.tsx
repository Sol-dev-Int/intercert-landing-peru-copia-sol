'use server'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import bg from '../../public/certificate-background.png'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CompaniesCarrousel from "@/app/(root)/_components/CompaniesCarrousel";

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
              <CompaniesCarrousel/>
          </section>
          < section className="py-12 px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-8">Nuestros Servicios</h2>
              <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                      <CardHeader>
                          <CardTitle>Certificaciones ISO </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>
                              We offer a comprehensive range of ISO certification services including ISO 9001, ISO 14001, ISO 45001,
                              and more.
                          </p>
                      </CardContent>
                      <CardFooter>
                          <Button variant="outline">Learn More</Button>
                      </CardFooter>
                  </Card>
                  <Card>
                      <CardHeader>
                          <CardTitle>Certificaciones de Personas</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p>
                              Enhance your career with our auditor certification programs. Become a certified auditor for various
                              ISO standards.
                          </p>
                      </CardContent>
                      <CardFooter>
                          <Button variant="outline">Learn More</Button>
                      </CardFooter>
                  </Card>
              </div>
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
