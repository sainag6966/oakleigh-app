import Image from 'next/image'
import { useState } from 'react'

function FiltersMweb() {
  const [showFilters, setShowFilters] = useState(false)
  const plusIcon = '/Images/plusIcon.svg'
  const minusIcon = '/Images/minusIcon.svg'
  const headerIcon = showFilters ? minusIcon : plusIcon
  const [selectedFilter, setSelectedFilter] = useState([])
  const [clickedLink, setClickedLink] = useState('')
  const [linkData, setLinkData] = useState([])
  const [accor, setAccor] = useState(false)
  const data1 = [
    {
      filter: 'Gender',
      data: ["Men's Watches", "Women's Watches", 'Unisex Watches'],
    },
    {
      filter: 'Model',
      data: ['Model', 'Model', 'Model', 'Model', 'Model', 'Model'],
    },
    {
      filter: "What's Included",
      data: ['Full Set', 'Box And Papers', 'With Box'],
    },
    { filter: 'Condition', data: ['Unworn', 'Excellent', 'Very Good'] },
    {
      filter: 'Availability',
      data: ['Avaliable', 'Reserved', 'Coming Soon', 'Sold'],
    },
  ]
  // const gender = ["Men's Watches", "Women's Watches", 'Unisex Watches']
  // const model =
  // const whatsIncluded = ['Full Set', 'Box And Papers', 'With Box']
  // const condition = ['Unworn', 'Excellent', 'Very Good']
  // const availability = ['Avaliable', 'Reserved', 'Coming Soon', 'Sold']

  const handleAcor = (link) => {
    setSelectedFilter((prev) => [...prev, link?.filter])
    // setAccor(true)
    // switch (link) {
    //   case 'Gender':
    //     setClickedLink(link)
    //     setLinkData(gender)
    //     break
    //   case 'Model':
    //     setClickedLink(link)
    //     setLinkData(model)
    //     break
    //   case "What's Included":
    //     setClickedLink(link)
    //     setLinkData(whatsIncluded)
    //     break
    //   case 'Condition':
    //     setClickedLink(link)
    //     setLinkData(condition)
    //     break
    //   case 'Availability':
    //     setClickedLink(link)
    //     setLinkData(availability)
    //     break
    //   default:
    //     return ''
    // }
  }

  const handleClose = (link) => {
    const closeFilter = selectedFilter.filter((e) => {
      return e !== link?.filter
    })
    setSelectedFilter(closeFilter)
  }

  const handleFilterWindow = () => {
    setShowFilters(!showFilters)
  }

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-4">
      <div
        className="flex items-center gap-2 bg-search p-3"
        onClick={handleFilterWindow}
      >
        <Image src={headerIcon} width={16} height={16} alt="plusIcon" />
        <div className="text-display-11">Filter By Category</div>
      </div>
      {showFilters && (
        <div className="flex h-auto w-full flex-col items-center gap-[60px] text-black">
          <div className="flex h-auto w-full flex-col items-center justify-center">
            {data1.map((link, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center gap-2"
                    key={index}
                  >
                    <div className="text-display-9 tracking-normal">
                      {link?.filter}
                    </div>
                    {selectedFilter.includes(link?.filter) ? (
                      <div
                        onClick={() => {
                          handleClose(link)
                        }}
                        className="mb-[3px] font-sans text-[16px] font-light"
                      >
                        -
                      </div>
                    ) : (
                      <div
                        onClick={() => handleAcor(link)}
                        className="mb-[3px] text-[25px]"
                      >
                        +
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[6px]">
                    {selectedFilter.includes(link?.filter) &&
                      link?.data.map((e, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center justify-start space-x-4"
                          >
                            <label className="flex items-center justify-center gap-[18px]">
                              <input
                                type="checkbox"
                                className="h-3 w-3 appearance-none rounded-none border-[1px] border-textSecondary ring-0 checked:bg-black xl:h-5 xl:w-5"
                              />
                              <p className="font-sans text-display-3">{e}</p>
                            </label>
                          </div>
                        )
                      })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      {showFilters && (
        <div
          className="bg-black p-2 font-sans text-display-3 text-textPrimary"
          onClick={handleFilterWindow}
        >
          Apply Filters
        </div>
      )}
    </div>
  )
}
export default FiltersMweb
