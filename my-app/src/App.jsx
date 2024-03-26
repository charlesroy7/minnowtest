import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ztvpgvgoqfwtxwikwjuw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0dnBndmdvcWZ3dHh3aWt3anV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzODY2ODEsImV4cCI6MjAyNjk2MjY4MX0.I0hBS-OpEuLjpkzOt2ZAmxb5K7f4MHXpjXmW_mVWHuA");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;