import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buttonClasses } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center px-5 py-32">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">404</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl tracking-tight">
            We couldn&rsquo;t find that page.
          </h1>
          <p className="mt-4 text-lg text-ink-2">
            It may have moved — everything you need is back on the home page.
          </p>
          <div className="mt-8">
            <Link href="/" className={buttonClasses({ size: "lg" })}>
              Back home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
