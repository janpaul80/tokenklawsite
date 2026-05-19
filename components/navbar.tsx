import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex min-h-24 w-full max-w-6xl flex-col gap-4 px-4 py-3 sm:px-6 md:h-28 md:flex-row md:items-center md:justify-between md:px-8 md:py-0">
        <Link href="/" className="inline-flex items-center self-start text-sm font-semibold tracking-wide text-text md:self-auto">
          <Image
            src="/tokenklaw2-logo.png"
            alt="TokenKlaw"
            width={96}
            height={96}
            className="h-[76px] w-[76px] object-contain sm:h-[88px] sm:w-[88px] md:h-[96px] md:w-[96px]"
            priority
          />
        </Link>

        <nav className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted md:w-auto md:flex-nowrap md:gap-5">
          <Link href="/" className="transition hover:text-text">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-text">
            About
          </Link>
          <Link href="/terms" className="transition hover:text-text">
            Terms
          </Link>
          <Link href="/privacy" className="transition hover:text-text">
            Privacy
          </Link>
          <a
            href="https://github.com/janpaul80/tokenklaw"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-text transition hover:bg-panel"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
