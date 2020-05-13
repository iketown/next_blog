import { Component, createContext } from "react"
import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import nookies from "nookies"
import Router from "next/router"

const authenticate = (ctx) => {
  const { token } = nookies.get(ctx)
  console.log("ctx", ctx)
  nookies.set(
    ctx,
    "plannedRoute",
    JSON.stringify({ as: ctx.asPath, href: ctx.pathname }),
    { path: "/" }
  )
  // if no cookie, redirect
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { location: "/signin" })
    ctx.res.end()
    return
  }

  if (!token) {
    Router.push("/signin")
  }
  return token
}

export const isAuthenticated = (ctx) => {
  const { token } = nookies.get(ctx)
  return token
}

export const withAuth = (WrappedComponent) => {
  return class extends Component {
    static async getInitialProps(ctx) {
      const token = authenticate(ctx)
      if (WrappedComponent.getInitialProps) {
        const componentProps = await WrappedComponent.getInitialProps(ctx)
        return { ...componentProps, token }
      }
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
