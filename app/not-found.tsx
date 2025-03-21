'use server'

import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function IntercertNotFound() {
    return (
        <div className={`h-dvh flex flex-col justify-center items-center px-12 text-center gap-4`}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Error 404 - Pagina No Encontrada
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Parece que la Pagina que buscas no existe :'v
            </p>
            <Button size="lg" asChild>
                <Link href='/'>
                    Regresar al Inicio
                </Link>
            </Button>
        </div>
    );
}