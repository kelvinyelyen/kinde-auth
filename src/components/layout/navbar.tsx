import * as React from "react"
import Link from "next/link"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/src/components/ui/menubar"
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server"

export function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession()
  const user = getUser()
  return (
    <div className="container flex h-16 items-center justify-between">
      <div className="mx-4 flex h-16 max-w-screen-xl items-center justify-between w-full">
        <Link href="/">
          <p className="flex items-center text-md lg:text-xl tracking-tighter">
            portal_
          </p>
        </Link>
        {isAuthenticated() ? (
          <>
            <Menubar className="z-10">
              <MenubarMenu>
                <MenubarTrigger>
                  You are logged in as {user.given_name}
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>{user.email}</MenubarItem>
                  <MenubarSeparator />
                  <LogoutLink>
                    <MenubarItem>Signout</MenubarItem>
                  </LogoutLink>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </>
        ) : (
          <>
            <Menubar className="z-10">
              <MenubarMenu>
                <MenubarTrigger>Get Started</MenubarTrigger>
                <MenubarContent>
                  <LoginLink>
                    <MenubarItem>Signin</MenubarItem>
                  </LoginLink>
                  <RegisterLink>
                    <MenubarItem>Signup</MenubarItem>
                  </RegisterLink>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </>
        )}
      </div>
    </div>
  )
}
