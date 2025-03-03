import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function IntercertFooter() {

    //gap-4 md:h-24 md:flex-row
    return (
        <footer className="w-full border-t bg-muted py-8">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            {/*TODO: add intercert logo*/}
                            <span className="font-bold">Intercert</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {/*TODO: add intercert desc*/}
                            Your trusted partner for ISO certification services. We help organizations achieve
                            international
                            standards and improve their operational excellence.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-medium">Our Location</h3>
                        <address className="not-italic text-sm text-muted-foreground">
                            INTERCERT SERVICES S.A.C.
                            <br/>
                            Martin de Murua Nro. 150 Centro Empresarial PLEXUS<br/>
                            Piso 11 Oficina 1109, San Miguel, Lima
                            <br/>
                            Peru
                        </address>
                        <div className="text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4"/>
                                <span>+51 1 234 5678</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4"/>
                                <span>info@intercert.pe</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-medium">Our Services</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>Certificación ISO</li>
                            <li>Certificación de Personas</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-medium">Legal</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:underline">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Política de Imparcialidad
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Política de Calidad
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-4">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} INTERCERT SERVICES S.A.C. Todos los Derechos reservados. RUC:
                        20603342039
                    </p>
                </div>
            </div>
        </footer>
    );
}