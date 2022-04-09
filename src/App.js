import { useState, useEffect } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import phonebookService from './services/phonebook'
import Display from './components/Display'

const App = () => {
  const [persons, setPersons] = useState([])
  const [tempPersons, setTempPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    phonebookService.getAll().then((res) => {
      setPersons(res)
      setTempPersons(res)
    })
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

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value)

    const x = persons.filter((person) => {
      if (searchTerm === '') {
        return person
      } else if (person.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return person
      }
    })
    setTempPersons(x)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Search onChangeSearch={onChangeSearch} searchTerm={searchTerm} />
      <br />
      <br />
      <br />
      <Form
        onSubmit={onSubmit}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        newName={newName}
        newPhone={newPhone}
      />
      <h2>Numbers</h2>
      <Display
        tempPersons={tempPersons}
        // persons={persons}
        // searching={searching}
        // searchTerm={searchTerm}
      />
    </div>
  )
}

export default App
