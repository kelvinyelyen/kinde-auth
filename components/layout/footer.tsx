import Link from "next/link"

export default function Footer() {
  return (
    <div className="absolute w-full border-t py-5 text-center">
      <p className="text-sm opacity-50">
        A free template by{" "}
        <Link href="https://twitter.com/kelvinyelyen" className="underline">
          Kelvin Yelyen
        </Link>
      </p>
    </div>
  )
}
