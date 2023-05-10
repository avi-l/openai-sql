import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'
import { useState } from 'react'
import axios from 'axios'

export const App = () => {
  const [query, setQuery] = useState<string>('Describe your query')
  const [sqlQuery, setSqlQuery] = useState<string>('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setSqlQuery('')
    const res = await generateQuery()
    setSqlQuery(res?.message)
  }

  const generateQuery = async () => {
    try {
      const res = await axios.post('http://localhost:3005/generate', query)
      return res?.data
    } catch (error) {
      return error
    }
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
        <pre>{sqlQuery}</pre>
      </form>
    </main>
  )
}


