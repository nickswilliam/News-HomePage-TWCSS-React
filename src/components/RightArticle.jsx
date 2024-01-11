// eslint-disable-next-line react/prop-types
const RightArticle = ({title, text}) => {
  return (
    <article className="h-[140px] border-b-2 border-GrayishBlue py-7 last:border-none lg:h-[180px]">
        <h2 className="cursor-pointer hover:text-SoftOrange text-OffWhite text-[20px] font-bold mb-3 lg:text-4 xl:text-[20px]">{title}</h2>
        <p className="text-[15px]">{text}</p>
    </article>
  )
}

export default RightArticle