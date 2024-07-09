export default function Input({
    setData,
    className= '',
    type='text',
    afterContent='',
    ...props
}) {
    return (
        <div className="flex group group-hover:outline-1 border-2 border-slate-300 py-1 rounded-md shadow-sm relative w-full">
        <input
            type={type}
            className={`form-input py-1 px-4 outline-none border-none w-full block bg-inherit pl-5 pr-6  ${className}`}
            {...props}
        />
        
        </div>
    )
}