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

const DataRow = ({ title, value, light }) => {
  value = capitalise(value)
  if (title == "Cost") value = `${CURRENCY_SYMBOL}${value}`;
  if (title == "Megalights") value = `${value} MGLT`;
  return (
    <div style={{ ...styles.rowStyle, backgroundColor: light ? "#666" : "#333" }}>
      <span style={{ textAlign: "left", fontWeight: 'bold' }}>{title}: </span>
      <span style={{ textAlign: "right" }}>{value}</span>
    </div>
  )
}

export default DataRow
