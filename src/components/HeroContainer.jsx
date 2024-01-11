import RightArticle from "./RightArticle"

const HeroContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] mt-12 lg:mt-0">
        <h2 className="text-4xl font-bold text-SoftOrange">New</h2>
        <RightArticle title='Hydrogen VS Electric Cars' text='Will hydrogen-fueled cars ever catch up to EVs?'/>
        <RightArticle title='The Downsides of AI Artistry' text='What are the possible adverse effects of on-demand AI image generation?'/>
        <RightArticle title='Is VC Funding Drying Up?' text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'/>
    </aside>
  )
}

export default HeroContainer