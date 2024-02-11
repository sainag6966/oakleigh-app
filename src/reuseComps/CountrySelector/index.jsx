import React, { useState, useMemo, useEffect } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector({ setCountryCode, selectedCountry }) {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  useEffect(() => {
    // When selectedCountry changes, update the value based on the country code
    if (selectedCountry) {
      const selectedOption = options.find(
        (option) => option.value === selectedCountry,
      )
      setValue(selectedOption || '') // Set to empty string if the country code is not found
    }
  }, [selectedCountry, options])

  const changeHandler = (selectedOption) => {
    const countryCode = selectedOption?.value
    setCountryCode(countryCode)
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
    }),
    option: (styles, { isFocused }) => ({
      'padding-left': '30px',
      backgroundColor: isFocused ? '#CDAA72' : 'white',
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
      value={value ? value : selectedCountry}
      onChange={changeHandler}
      className="h-auto w-full font-sans text-display-3 dxl:text-display-6" // Make the Select component full width
      classNamePrefix="tw-select" // Prefix for generated class names
      //   classes={customStyles}
      styles={customStyles}
    />
  )
}

export default CountrySelector
