function Form({ onSubmit, setNewName, setNewPhone, newName, newPhone }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{' '}
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
      </div>
      <div>
        phone:{' '}
        <input
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form
