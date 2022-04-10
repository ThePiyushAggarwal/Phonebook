import DeleteButton from './DeleteButton'
import phonebookService from '../services/phonebook'

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
