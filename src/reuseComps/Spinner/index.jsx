import { TailSpin } from 'react-loader-spinner'

const Spinner = ({ height, width }) => {
  return (
    <TailSpin
      visible={true}
      height={height}
      width={width}
      color="#CDAA72"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}
export default Spinner
