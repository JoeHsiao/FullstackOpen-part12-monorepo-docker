import PropTypes from "prop-types"

const Filter = ({ filterName, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input onChange={handleFilterChange}>{filterName}</input>
    </div>
  )
}

Filter.propTypes = {
  filterName: PropTypes.string,
  handleFilterChange: PropTypes.func
}
export default Filter