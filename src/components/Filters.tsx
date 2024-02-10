import styles from './filters.module.css'
export function Filters() {
  return (
    <>
      <div className={styles.filterItem}>
        <label htmlFor="statusSelect" className={styles.selectLabel}>
          Status:
        </label>
        <select name="status" id="statusSelect" className={styles.select}>
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </>
  )
}
