import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Form from './components/Form'
import { v4 } from 'uuid'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data))
  }, [])

  //
  const onSubmit = (e) => {
    e.preventDefault()
    if (persons.some((person) => person.name === newName.trim())) {
      window.alert(` ${newName.trim()} what the hell. You wanna fight biatch`)
    } else {
      let newPerson = { name: newName.trim(), phone: newPhone, id: v4() }

      setPersons(persons.concat(newPerson))
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

  const display = () => {
    let currentPersons = null
    if (searching) {
      currentPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    } else {
      currentPersons = [...persons]
    }

    return currentPersons.map((person) => (
      <>
        <p key={v4()}>
          <strong>Name: </strong>
          {person.name}
          <br />
          Phone <em>{person.phone}</em>
        </p>
        <hr />
      </>
    ))
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
      {display()}
    </div>
  )
}

export default App
