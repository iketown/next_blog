import React, { useState, useEffect } from "react"
import { useRouter, Router } from "next/router"
import nookies from "nookies"
import Link from "next/link"
import { isAuthenticated } from "../../utils/withAuth"
import { useAuth } from "../../hooks/useAuth"

//
//
const countries = [
  { value: "us", name: "United States" },
  { value: "br", name: "Brazil" },
  { value: "ca", name: "Canada" },
  { value: "dk", name: "Denmark" },
]
const Header = () => {
  const {
    query: { country, showId },
    push,
  } = useRouter()
  const [selectedCountry, setSelectedCountry] = useState(country)
  const { handleSignOut } = useAuth()
  useEffect(() => {
    nookies.set(null, "defaultCountry", selectedCountry, {
      maxAge: 30 * 24 * 60 * 60,
      path: `/`,
    })
  }, [selectedCountry])

  const handleChange = (e) => {
    setSelectedCountry(e.target.value)
    push(`/[country]`, `/${e.target.value}`)
  }
  const renderCountries = () => {
    return countries.map((c) => (
      <option key={c.value} value={c.value}>
        {c.name}
      </option>
    ))
  }
  return (
    <div className="header">
      <select value={selectedCountry} onChange={handleChange}>
        {renderCountries()}
      </select>
      <div>
        {isAuthenticated() ? (
          <Link href="/[country]" as={`/${selectedCountry}`}>
            <a onClick={handleSignOut}>Sign Out</a>
          </Link>
        ) : (
          <Link href="/signin" as="/signin">
            <a>Sign In</a>
          </Link>
        )}
      </div>
      <style jsx>{`
        .header {
          padding: 20px;
          background: orange;
          color: white;
          text-align: center;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
        }
        .header :global(a) {
          color: white;
        }
      `}</style>
    </div>
  )
}

export default Header
