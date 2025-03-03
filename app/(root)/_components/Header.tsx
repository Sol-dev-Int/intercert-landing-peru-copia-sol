import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Globe, Mail, MapPin, Phone, Shield, Star, Users } from "lucide-react"

export default function IntercertHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 p-4">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="inline-block font-bold">Intercert</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                            Inicio
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                            Servicios
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                            Nosotros
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                            Partners
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                            Tienda
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <Button variant="outline" size="sm" className="hidden md:flex">
                        Contactanos
                    </Button>
                    <Button size="sm">Verifica tu Certificado</Button>
                </div>
            </div>
        </header>
    );
}