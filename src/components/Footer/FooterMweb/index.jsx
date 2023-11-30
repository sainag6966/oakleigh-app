function FooterMweb() {
    const data1 = ['Useful Links', 'Categories', 'Our Address']
    return (
        <div className="bg-footerBg w-full h-[1150px] text-textPrimary">
            <div className="flex flex-col items-center justify-center gap-10 w-full h-auto">
                {data1.map((link) => {
                    return (
                        <div className="flex gap-2">
                            <div>{link}</div>
                            <div>+</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default FooterMweb;