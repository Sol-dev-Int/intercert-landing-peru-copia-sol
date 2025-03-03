import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Globe, Mail, MapPin, Phone, Shield, Star, Users } from "lucide-react"

export default function IntercertHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <Shield className="h-6 w-6 text-primary" />
                        <span className="inline-block font-bold">Intercert</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                            Services
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                            About Us
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                            Testimonials
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <Button variant="outline" size="sm" className="hidden md:flex">
                        Request a Quote
                    </Button>
                    <Button size="sm">Contact Us</Button>
                </div>
            </div>
        </header>
    );
}