import { useState, useEffect } from 'react'
import Search from './components/Search'
import Form from './components/Form'
import phonebookService from './services/phonebook'
import Display from './components/Display'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    phonebookService.getAll().then((res) => {
      setPersons(res)
    })
  }, [])

  // THIS SEARCH THING TOOK A LOT OF MY TIME
  const tempPersons =
    searchTerm === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

  const onChangeSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  //
  const onSubmit = (e) => {
    e.preventDefault()
    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.trim().toLowerCase()
      )
    ) {
      if (
        window.confirm(
          `${newName} is already added to the Phonebook. Do you want to update the number?`
        )
      ) {
        let newPerson = { name: newName.trim(), phone: newPhone }
        const id = persons.find(
          (person) => person.name.toLowerCase() === newName.trim().toLowerCase()
        ).id

        phonebookService
          .update(id, newPerson)
          .then((response) => {
            setErrorMessage('Successfully updated the person')
            setTimeout(() => setErrorMessage(null), 5000)
          })
          .catch((error) => {
            setErrorMessage(
              `${newName} was deleted before you tried to update it.`
            )
            setTimeout(() => setErrorMessage(null), 5000)
            setPersons(persons.filter((person) => person.id !== id))
          })

        setPersons(
          persons.map((person) => {
            if (person.id === id) {
              return newPerson
            } else {
              return person
            }
          })
        )
        setNewName('')
        setNewPhone('')
      }
    } else {
      let newPerson = { name: newName.trim(), phone: newPhone }

      phonebookService.create(newPerson).then((response) => {
        setPersons(persons.concat(response))
        setErrorMessage('Entry added')
        setTimeout(() => setErrorMessage(null), 5000)
        setNewName('')
        setNewPhone('')
      })
    }
  }

  // DELETE
  const del = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      phonebookService.deleteIt(id).then((response) => {
        setErrorMessage('Successfully deleted from your ass')
        setTimeout(() => setErrorMessage(null), 5000)
      })
      setPersons(persons.filter((person) => person.id !== id))
    } else {
      return
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification message={errorMessage} />
      <Search onChangeSearch={onChangeSearch} searchTerm={searchTerm} />
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
      {tempPersons.map((person) => (
        <Display
          name={person.name}
          phone={person.phone}
          del={() => del(person.id, person.name)}
          key={person.id}
        />
      ))}
    </div>
  )
}

export default App
