// eslint-disable-next-line react/prop-types
export const Article = ({img, number, title, text}) => {
  return (
    <article className='flex h-[162px]'>
      <div className='w-[100px] flex-none'>
        <img src={img} alt="retropc-img" />
      </div>
      <div className='pl-6'>
        <p className='text-3xl font-bold text-GrayishBlue mb-[18px]'>{number}</p>
        <h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer'>{title}</h2>
        <p className='text-DarkGrayishBlue'>{text}</p>
      </div>
    </article>
  );
};

