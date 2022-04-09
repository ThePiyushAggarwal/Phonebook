function Display({ searching, persons, searchTerm }) {
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
        <p key={person.id}>
          <strong>Name: </strong>
          {person.name}
          <br />
          Phone <em>{person.phone}</em>
        </p>
        <hr />
      </>
    ))
  }

  return <>{display()}</>
}

export default Display
