import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const {cities, isLoading} = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>

  const countries = cities.reduce((arr, city) => {
    const alreadyExists = arr.some(el => el.country === city.country);
    if (!alreadyExists) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
    return arr;
  }, []);

  return <ul className={styles.countryList}>
    {countries.map((country) => (
      <CountryItem country={country} key={country.country}/>
    ))}
  </ul>;
}

export default CountryList;
