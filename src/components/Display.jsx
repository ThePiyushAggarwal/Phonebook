import DeleteButton from './DeleteButton'

const Display = ({ name, phone, del }) => {
  return (
    <>
      <h4>{name}</h4>
      <p>{phone}</p>
      <DeleteButton del={del} />
      <hr />
    </>
  )
}

export default Display
