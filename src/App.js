import { useState, useEffect } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import phonebookService from './services/phonebook'
import Display from './components/Display'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    phonebookService.getAll().then((res) => setPersons(res))
  }, [])

  //
  const onSubmit = (e) => {
    e.preventDefault()
    if (persons.some((person) => person.name === newName.trim())) {
      window.alert(` ${newName.trim()} what the hell. You wanna fight biatch`)
    } else {
      let newPerson = { name: newName.trim(), phone: newPhone }

      phonebookService.create(newPerson).then((res) => {
        setPersons(persons.concat(res))
        setNewName('')
        setNewPhone('')
      })
    }
  }

  const onChange = (e) => {
    setNewName(e.target.value)
  }

  const onChange2 = (e) => {
    setNewPhone(e.target.value)
  }

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value)
    if (searchTerm !== '') {
      setSearching(true)
    } else {
      setSearching(false)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search onChangeSearch={onChangeSearch} searchTerm={searchTerm} />
      <br />
      <br />
      <br />
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        newName={newName}
        onChange2={onChange2}
        newPhone={newPhone}
      />
      <h2>Numbers</h2>
      <Display
        persons={persons}
        searching={searching}
        searchTerm={searchTerm}
      />
    </div>
  )
}

export default App
