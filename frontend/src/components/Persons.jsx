import PropTypes from "prop-types"

const Persons = ({ persons, handleRemove }) => {

  return (
    <div>
      {persons.map(p =>
        <div key={p.id}>
          {p.name} {p.number} <button onClick={() => handleRemove(p.id)}>delete</button>
        </div>
      )}
    </div>
  )
}

Persons.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number
    })
  ),
  handleRemove: PropTypes.func
}
export default Persons