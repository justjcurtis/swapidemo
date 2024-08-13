const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '1px',
    backgroundColor: 'transparent',
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
