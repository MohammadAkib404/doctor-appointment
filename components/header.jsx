import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import { Calendar, ShieldCheck, Stethoscope, User } from "lucide-react";

export default async function Header() {
  const user = await checkUser();

  // console.log(user);

  return (
    <header className="border-b bg-background">
      <nav className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
        </Link>

        {/* Auth */}
        <div className="flex items-center space-x-2">
          <Show when="signed-in">
            {/* Admin Links */}
            {user?.role === "ADMIN" && (
              <Link href="/admin">
                <Button variant="outline" className="hidden md:inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Admin Dashboard
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <ShieldCheck className="h-4 w-4" />
                </Button>
              </Link>
            )}

            {/* Doctor Links */}
            {user?.role === "DOCTOR" && (
              <Link href="/doctor">
                <Button variant="outline" className="hidden md:inline-flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" />
                  Doctor Dashboard
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Stethoscope className="h-4 w-4" />
                </Button>
              </Link>
            )}

            {/* Patient Links */}
            {user?.role === "PATIENT" && (
              <Link href="/appointments">
                <Button variant="outline" className="hidden md:inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  My Appointments
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <Calendar className="h-4 w-4" />
                </Button>
              </Link>
            )}

            {/* Unassigned Role */}
            {user?.role === "UNASSIGNED" && (
              <Link href="/onboarding">
                <Button variant="outline" className="hidden md:inline-flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Complete Profile
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <User className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </Show>
        </div>
      </nav>
    </header>
  );
}
