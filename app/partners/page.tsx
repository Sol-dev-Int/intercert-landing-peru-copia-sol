import bg from "@/public/intercert-partner.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PartnersPage() {
    return (
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
                    <p className="text-muted-foreground md:text-xl text-white ">
                        Sé parte de la mejor red global de certificación
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-end">
                        <Button size="lg" asChild className="bg-blue-400 text-white hover:bg-blue-900">
                            <Link
                                href="https://wa.me/51992387031?text=Hola,%20quiero%20ser%20el%20nuevo%20Intercert%20Partner"
                                passHref
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Conviértete en Intercert Partner y empieza tu negocio ahora
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

        </section>
    );
}
