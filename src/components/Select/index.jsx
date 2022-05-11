//@ts-check

import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {String} props.label
 * @param {Array} props.options
 * @param {Number} props.selectedOption
 * @param {Function} props.setSelectedOption
 * @returns {React.ReactElement}
 */
function Select({ label, options, selectedOption, setSelectedOption }) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const labelEl = useRef(null)
  const liEl = useRef(null)
  const [buttonSize, setButtonSize] = useState({
    width: 0,
    height: 0,
  })
  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen)
  }

  // Event handler for keydowns
  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault()
        setSelectedOption(index)
        setIsOptionsOpen(false)
        break
      case 'ArrowDown':
        e.preventDefault()
        console.log(liEl)
        break
      default:
        break
    }
  }

  useEffect(() => {
    setButtonSize((state) => ({
      ...state,
      width: labelEl.current.clientWidth,
    }))
    setButtonSize((state) => ({
      ...state,
      height: labelEl.current.clientHeight,
    }))

    function handler(event) {
      if (!labelEl.current?.contains(event.target)) {
        setIsOptionsOpen(false)
      }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])

  return (
    <div className="selectContainer">
      <label ref={labelEl}>
        {label}
        <button
          type="button"
          className={`selectButton ${isOptionsOpen ? 'borderBottomNone' : ''}`}
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          onClick={toggleOptions}
        >
          {options[selectedOption]}{' '}
          <span
            className={`selectmenu-arrow ${isOptionsOpen ? 'up' : 'down'}`}
          ></span>
        </button>
        <ul
          className={`selectmenu-options ${isOptionsOpen ? 'open' : ''}`}
          style={{ width: buttonSize.width, marginTop: buttonSize.height }}
          role="listbox"
          aria-activedescendant={options[selectedOption]}
          tabIndex={-1}
        >
          {options.map((option, index) => (
            <li
              ref={liEl}
              key={`option-${index.toString()}`}
              id={option}
              className={`item item-id-${index}`}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={(e) => {
                e.preventDefault()
                setSelectedOption(index)
                setIsOptionsOpen(false)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </label>
    </div>
  )
}

export default Select

Select.propType = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
  setSelectedOption: PropTypes.func.isRequired,
}

Select.defaultProps = {
  selectValue: undefined,
}
