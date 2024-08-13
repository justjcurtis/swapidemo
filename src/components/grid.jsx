const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1px',
  },
}
const Grid = ({ children }) => {
  return (
    <div style={styles.grid}>
      {children}
    </div>
  )
}

export default Grid
