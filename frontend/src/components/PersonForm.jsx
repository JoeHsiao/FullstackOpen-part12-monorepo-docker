import PropTypes from "prop-types"

const PersonForm = ({ addPerson, newNameValue, handleNameChange, newNumberValue, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
      <div>name: <input onChange={handleNameChange} value={newNameValue} /></div>
      <div>number: <input onChange={handleNumberChange} value={newNumberValue} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

PersonForm.propTypes = {
  addPerson: PropTypes.func,
  newNameValue: PropTypes.string,
  handleNameChange: PropTypes.func,
  newNumberValue: PropTypes.number,
  handleNumberChange: PropTypes.func
}
export default PersonForm