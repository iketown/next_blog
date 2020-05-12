import React, { useState } from "react";
import { useRouter, Router } from "next/router";

//
//
const countries = [
  { value: "us", name: "United States" },
  { value: "br", name: "Brazil" },
];
const Header = () => {
  const {
    query: { country, showId },
    push,
  } = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(country);

  const handleChange = (e) => {
    console.log("country", e.target.value);
    setSelectedCountry(e.target.value);
    push(`/[country]`, `/${e.target.value}`);
  };
  const renderCountries = () => {
    return countries.map((c) => (
      <option key={c.value} value={c.value}>
        {c.name}
      </option>
    ));
  };
  return (
    <div className="header">
      <select value={selectedCountry} onChange={handleChange}>
        {renderCountries()}
      </select>
      <style jsx>{`
        .header {
          padding: 20px;
          background: orange;
          color: white;
          text-align: center;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Header;
