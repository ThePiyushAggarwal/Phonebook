// import { useState } from 'react'
// import DeleteButton from './DeleteButton'
// import phonebookService from '../services/phonebook'

const Display = ({ tempPersons }) => {
  return (
    <>
      {tempPersons.map((person) => {
        return (
          <>
            <h4>{person.name}</h4>
            <p>{person.phone}</p>
            <hr />
          </>
        )
      })}
    </>
  )
}

export default Display

// const display = () => {
//   let currentPersons = null
//   if (searching) {
//     currentPersons = persons.filter((person) =>
//       person.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   } else {
//     currentPersons = [...persons]
//   }

//   return currentPersons.map((person) => (
//     <>
//       <p key={person.id}>
//         <strong>Name: </strong>
//         {person.name}
//         <br />
//         Phone <em>{person.phone}</em>
//         <DeleteButton deleteThis={() => deleteThis(person.id)} />
//       </p>
//       <hr />
//     </>
//   ))
// }

// const deleteThis = (id) => {
//   return phonebookService.deleteShit(id)
// }
