import { useState, useContext } from "react"
import DataRow from "./dataRow"
import { DATA_ROW_HEADERS, CURRENCY_SYMBOL } from "../constants/productConstants"
import ButtonPrimary from "./buttonPrimary"
import { NotificationContext } from "../contexts/notificationContext"
import { NOTIFICATION_TYPES } from "../constants/notificationContants"

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 0.5rem',
    background: '#444',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '2rem',
  },
  title: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: '1rem 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
}

const ProductCard = ({ product }) => {
  const { notify } = useContext(NotificationContext)
  const [amount, setAmount] = useState(0)
  const buyText = `BUY${amount > 0 ? ` (${amount})` : ""}`

  const decrementClicked = () => {
    setAmount(Math.max(amount - 1, 0))
  }

  const incrementClicked = () => {
    setAmount(amount + 1)
  }

  const buyClicked = () => {
    if (amount < 1) return
    notify(`${amount} ${product.name}${amount > 1 ? "s" : ""} added to basket (${CURRENCY_SYMBOL}${amount * product.cost_in_credits})`, NOTIFICATION_TYPES.SUCCESS)
    setAmount(0)
  }

  return (
    <div style={styles.card}>
      <h1 style={styles.title}>{product.name}</h1>
      {Object.keys(DATA_ROW_HEADERS).map((key, i) => (
        <DataRow
          key={key}
          title={DATA_ROW_HEADERS[key]}
          value={product[key]}
          light={i % 2 == 0} />
      ))}
      <div style={styles.buttonContainer}>
        <ButtonPrimary text="-" onClick={decrementClicked} />
        <ButtonPrimary text={buyText} onClick={buyClicked} />
        <ButtonPrimary text="+" onClick={incrementClicked} />
      </div>
    </div>
  )
}

export default ProductCard
