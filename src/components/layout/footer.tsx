import Link from "next/link"

import BuyMeACoffee from "../buymeacoffee"
import { Button } from "../ui/button"

export default function Footer() {
  return (
    <div className="absolute w-full text-center p-10">
      <p className="text-sm opacity-50">
        A Project by{" "}
        <Link href="https://twitter.com/kelvinyelyen" className="underline">
          Kelvin Yelyen
        </Link>
      </p>
      <div className="p-4">
        <Button asChild>
          <Link
            href="https://www.buymeacoffee.com/kelvinyelyen"
            target="_blank"
          >
            <BuyMeACoffee className="h-6 w-6" />
            Buy me a coffee
          </Link>
        </Button>
      </div>
    </div>
  )
}
