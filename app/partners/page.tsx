import bg from "@/public/intercert-partner.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PartnersPage() {
    return (
        <>
            <section
                id="presentation"
                className="w-full py-12 md:py-24 lg:py-32 bg-muted bg-cover bg-right"
                style={{ backgroundImage: `url(${bg.src})` }}
            >
                <div className="container max-w-full px-4 md:px-6 flex justify-end">
                    <div className="space-y-4 text-right max-w-[600px] ml-auto mt-10">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                            INTERCERT PARTNER
                        </h1>
                        <p className="text-muted-foreground sm:text-4xl md:text-xl text-white ">
                            Sé parte de la mejor red global de certificación
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-end">
                            <Button size="lg" asChild className="bg-blue-400 text-white hover:bg-blue-900 text-sm lg:px-10 lg:py-8 sm:text-base sm:px-6 sm:py-3">
                                <Link
                                    href="https://wa.me/51992387031?text=Hola,%20quiero%20ser%20el%20nuevo%20Intercert%20Partner"
                                    passHref
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Conviértete en Intercert Partner y <br/> empieza tu negocio ahora
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <div className={`flex flex-col items-center `}>
                <div className={`flex flex-col px-4 max-w-5xl my-12`}>
                    <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                        ¿Quiénes Somos?
                    </h2>
                    <span className="leading-7 [&:not(:first-child)]:mt-6">
                        <strong>INTERCERT</strong> es un organismo de asesoría, adutoría, capacitación y certificación
                        internacional, acreditado bajo los estándares ISO 17021 Y 17024. Con presencia en más de 17 países,
                        ayudamos a empresas y profesionales a obtener certificaciones en sistemas de gestión empresarial,
                        mejorando su competitividad y eficiencia. Nuestro enfoque se basa en ofrecer soluciones personalizadas
                        que se adapten a las necesidades de cada cliente, garantizando un acopañamiento integral en cada etapa
                        del proceso. Con nuestra experiencia y compromiso, impulsando el crecimiento y la sostenibiliad de
                        nuestros clientes a nivel global.
                    </span>
                </div>
            </div>
        </>
    );
}
