import { useState } from "react"
import nookies from "nookies"
import { useRouter } from "next/router"
import axios from "axios"
//
//
export const useAuth = () => {
  const [error, setError] = useState("")
  const { replace } = useRouter()
  const handleSignOut = () => {
    nookies.destroy(null, "token")
    // const { defaultCountry } = nookies.get(ctx)
    // replace("/[country]", `/${defaultCountry || "us"}`)
  }
  const handleSignUp = async (info) => {
    const url = `https://iwallet-api.herokuapp.com/api/auth/signup`
    const { email, password, name } = info
    if (!email || !password || !name) return
    try {
      const response = await axios.post(url, info)
      const { defaultCountry } = nookies.get(null)
      nookies.set(null, "token", response.data.token, { path: "/" })
      replace("/[country]", `/${defaultCountry}`)
    } catch (error) {
      console.log("sign in error", error)
      setError(error.message)
    }
  }

  const handleSignIn = async (info) => {
    const url = `https://iwallet-api.herokuapp.com/api/auth/signin`
    const { email, password } = info
    if (!email || !password) return
    try {
      const response = await axios.post(url, info)
      nookies.set(null, "token", response.data.token, { path: "/" })
      const { plannedRoute, defaultCountry = "us" } = nookies.get(null)
      const plannedRouteObj = !!plannedRoute && JSON.parse(plannedRoute)
      const href = plannedRouteObj?.href || "/[country]"
      const as = plannedRouteObj?.as || `/${defaultCountry}`
      replace(href, as)
    } catch (error) {
      console.log("sign in error", error)
      setError(error.message)
    }
  }
  return { handleSignIn, handleSignUp, handleSignOut, error }
}
