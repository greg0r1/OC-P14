//@ts-check
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {Object} props.data
 * @returns {React.ReactElement}
 */
function Rows({ data }) {
  return (
    <>
      {data?.map((obj, index) => (
        <tr key={index} id={`row-${index}`}>
          {Object.entries(obj).map((el, index) => (
            <td key={index} data-label={el[0]}>
              {el[1]}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

export default Rows

Rows.propType = {
  data: PropTypes.object.isRequired,
}
