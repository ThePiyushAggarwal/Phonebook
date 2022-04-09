function DeleteButton({ deleteThis }) {
  return (
    <button
      style={{
        padding: '5px',
        borderRadius: '5px',
        width: '60px',
        height: '40px',
      }}
      onClick={deleteThis}
    >
      Delete
    </button>
  )
}

export default DeleteButton
