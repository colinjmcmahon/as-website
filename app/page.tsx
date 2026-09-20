import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center bg-[#2e2e2e] px-6 font-sans">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/aidall-solutions-logo.svg"
          alt="AidAll Solutions"
          width={400}
          height={160}
          priority
          className="h-auto w-[28rem] sm:w-[36rem]"
        />
        <h1
          className="text-center text-2xl font-medium tracking-tight text-[#fffbb9] sm:text-3xl"
          tabIndex={0}
          aria-label="Coming soon"
        >
          coming soon..
        </h1>
        <p className="text-center text-base font-medium tracking-tight text-[#fffbb9] sm:text-xl">
          For more information, please contact{" "}
          <a
            href="mailto:colin@aidallsolutions.com"
            className="underline underline-offset-4"
            tabIndex={0}
            aria-label="Email colin@aidallsolutions.com"
          >
            colin@aidallsolutions.com
          </a>
        </p>
      </div>
    </main>
  )
}
