import { CURRENCY_SYMBOL } from "../constants/productConstants";
import { capitalise } from "../utils/stringUtils";
const styles = {
  rowStyle: {
    width: "100%",
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0.5rem',
    background: '#333',
  },
}

const handleCost = (cost) => {
  cost = parseInt(cost)
  if (isNaN(cost)) return "Unknown"
  return `${CURRENCY_SYMBOL}${cost.toLocaleString()}`
}

const handleNumber = (value) => {
  if (value.toLowerCase() === "n/a") return value.toUpperCase()
  const parsed = parseInt(value)
  if (isNaN(parsed)) return value
  return parsed.toLocaleString()

}

const handleValue = (title, value) => {
  value = capitalise(value)
  if (title == "Cost") value = handleCost(value);
  value = handleNumber(value);
  if (title == "Megalights") value = `${value} MGLT`;
  switch (title) {
    case "Megalicghts":
      return `${value} MGLT`
    case "Cargo Capacity":
      return `${value} kg`
    case "Consumables":
      return `${value} years`
    case "Max Atmosphering Speed":
      if (value !== "N/A") return `${value} km/h`
      break
    case "Length":
      return `${value} m`
  }

  return value
}

const DataRow = ({ title, value, light }) => {
  value = handleValue(title, value)
  return (
    <div style={{ ...styles.rowStyle, backgroundColor: light ? "#666" : "#333" }}>
      <span style={{ textAlign: "left", fontWeight: 'bold' }}>{title}: </span>
      <span style={{ textAlign: "right" }}>{value}</span>
    </div>
  )
}

export default DataRow
