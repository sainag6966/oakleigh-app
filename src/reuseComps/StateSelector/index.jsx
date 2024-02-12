import React, { useState, useMemo, useEffect } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { Country, State, City } from 'country-state-city'

function StateSelector({ setStateCode, selectedCountry, selectedState }) {
  const [value, setValue] = useState('')
  // const options = useMemo(() => countryList().getData(), [])
  // const options = useMemo(() => State.getStatesOfCountry('GB'), [])
  // console.log(State.getStatesOfCountry('GB'), '!!state'

  const options = useMemo(() => {
    if (selectedCountry) {
      setValue('')
      // Fetch states for the selected country
      return State.getStatesOfCountry(selectedCountry).map((state) => ({
        value: state.isoCode, // Assuming isoCode is unique for each state
        label: state.name,
      }))
    }
    return []
  }, [selectedCountry])

  useEffect(() => {
    // When selectedCountry changes, update the value based on the country code
    if (selectedState) {
      const selectedOption = options.find(
        (option) => option.value === selectedState,
      )
      setValue(selectedOption || '') // Set to empty string if the country code is not found
    }
  }, [selectedState, options])

  const changeHandler = (selectedOption) => {
    const StateCode = selectedOption?.value
    setStateCode(StateCode)
    setValue(selectedOption)
  }

  const customStyles = {
    control: (provided) => ({
      // ...provided,
      fontSize: '14px',
      display: 'flex',
      border: '1px solid #000000',
      width: '100%',
      borderRadius: '0px',
      'padding-left': '20px',
      'padding-right': '20px',
      cursor: 'pointer',
    }),
    option: (styles, { isFocused }) => ({
      'padding-left': '30px',
      backgroundColor: isFocused ? '#CDAA72' : 'white',
      cursor: 'pointer',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided, { selectProps: { menuIsOpen } }) => ({
      color: '#242B21',
      transition: 'transform 0.3s',
      transform: menuIsOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
      marginTop: menuIsOpen ? '6px' : '0px',
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: '0px',
      borderRadius: '0px',
      border: '1px solid #000000',
    }),
  }

  const customFocusStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: '#000000',
      borderRadius: '0px',
      boxShadow: 'none',
      'padding-left': '20px',
      'padding-right': '20px',
    }),
  }

  return (
    <Select
      options={options}
      value={value}
      onChange={changeHandler}
      className="h-auto w-full font-sans text-display-3 dxl:text-display-6" // Make the Select component full width
      classNamePrefix="tw-select" // Prefix for generated class names
      //   classes={customStyles}
      styles={customStyles}
    />
  )
}

export default StateSelector
