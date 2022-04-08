function Search({ onChangeSearch, searchTerm }) {
  return (
    <>
      Search Name:
      <input onChange={onChangeSearch} value={searchTerm} />
    </>
  )
}

export default Search
