function Form({ onSubmit, onChange, onChange2, newName, newPhone }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={onChange} required />
      </div>
      <div>
        phone: <input value={newPhone} onChange={onChange2} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form
