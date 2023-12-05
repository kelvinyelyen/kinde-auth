import Link from "next/link"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"

export default function Home() {
  return (
    <main className="container">
      <h2 className="text-2xl tracking-tighter text-center">Kinde Auth</h2>
      <p className="text-sm text-center p-3 text-secondary">
        Kinde Nextjs SDK integration Starter. Building <br /> blocks for your
        Next project
      </p>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Kinde</CardTitle>
            <CardDescription>
              Learn about Kinde and the Nextjs SDK
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="https://kinde.com/docs/developer-tools/nextjs-sdk/">
                Learn more
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shadcn</CardTitle>
            <CardDescription>
              Beautifully designed components that you can copy and paste into
              your apps.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="/https://ui.shadcn.com/">Learn more</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GitHub</CardTitle>
            <CardDescription>Star this project on GitHub</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="https://github.com/kelvinyelyen/kinde-auth">
                Star on GitHub
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>One-Click Deploy</CardTitle>
            <CardDescription>
              Instantly deploy your Next.js site to Vercel.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkelvinyelyen%2Fkinde-auth">
                Deploy to Vercel
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
