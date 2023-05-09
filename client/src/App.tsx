import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'
import { useState } from 'react'

export const App = () => {

  const [query, setQuery] = useState<string>('Describe your query')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submitted', query)

  }
  return (
    <main className={styles.main}>
      <img src={sqlLogo} className={styles.icon} />
      <h3>Generate SQL with AI</h3>
      <form onSubmit={handleSubmit}>
        <input type='text'
          name='query-description'
          placeholder={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input type='submit' value='Generate Query' />
      </form>
    </main>
  )
}


