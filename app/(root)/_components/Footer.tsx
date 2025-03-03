import Link from "next/link"

export default function IntercertFooter() {

    //gap-4 md:h-24 md:flex-row
    return (
        <footer className="w-full border-t py-6 md:py-0 px-6 md:px-0">
            <div className="container flex flex-col items-center justify-between  ">
                <div>
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Copyright ©2025 INTERCERT PERÚ. Todos los derechos reservados.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                        Política de Privacidad
                    </Link>
                    <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                        Política de Calidad
                    </Link>
                    <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                        Política de Imparcialidad
                    </Link>
                </div>
            </div>
        </footer>
    );
}