function AvailabilityBadge({ status }) {
  return (
    <section className="flex h-full w-auto">
      <section className="flex h-full w-auto items-center justify-center bg-uspBlockBackground px-5 py-[10px] text-display-4 leading-none xl:px-[34px] xl:text-display-11">
        {status}
      </section>
    </section>
  )
}
export default AvailabilityBadge
