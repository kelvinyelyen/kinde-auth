import * as React from "react"
import Link from "next/link"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

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
    <div className="container z-10 mx-auto flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center font-display text-2xl">
        <p className="z-10 tracking-tighter font-mono">Portal</p>
      </Link>
      {isAuthenticated() ? (
        <>
          <Menubar className="z-10">
            <MenubarMenu>
              <MenubarTrigger>{user.given_name}</MenubarTrigger>
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
  )
}
