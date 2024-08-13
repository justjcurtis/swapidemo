const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '0.5rem',
  },
  link: {
    cursor: 'pointer',
    color: 'white'
  }
}

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const pagesBefore = currentPage == 1 ? [] : new Array(currentPage - 1).fill(0).map((_, i) => i + 1)
  const pagesAfter = new Array(totalPages - currentPage).fill(0).map((_, i) => i + currentPage + 1)
  return (
    <div style={styles.container}>
      <ul style={styles.links}>
        <li style={styles.link}>{"<"}</li>
        {pagesBefore.map(page => (
          <li key={page} onClick={() => onPageChange(page)}>{page}</li>
        ))}
        <li style={{ ...styles.link, fontWeight: 'bold' }}>{currentPage}</li>
        {pagesAfter.map(page => (
          <li style={styles.link} key={page} onClick={() => onPageChange(page)}>{page}</li>
        ))}
        <li style={styles.link}>{">"}</li>
      </ul>
    </div>
  )
}

export default Paginator
