import './index.css'

const ingredientsList = [
    {
        title: 'Vitamin C',
        description: 'Vitamin C as ascorbic acid',
        bg: 'bg-1',
    },
    {
        title: 'Vitamin B3',
        description: 'Niacin for healthy gut and skin',
        bg: 'bg-2',
    },
    {
        title: 'Magnesium',
        description: 'Boost energy and support muscle function',
        bg: 'bg-3',
    },
    {
        title: 'Hyaluronic Acid',
        description: 'For smooth, supple and soft skin!',
        bg: 'bg-4',
    },
    {
        title: 'Lactobacillus',
        description: 'Invigorate your gut microbiome',
        bg: 'bg-5',
    }
]

const IngredientsSection = () => (
    <div className='ingredients-cont'>
        <div className='ingredients-first-cont'>
            <p className='ingre-title'>INGREDIENTS</p>
            <h1 className='ingre-first-head'>Better Ingredients</h1>
            <p className='ingre-first-para'>Only the best when you choose products offered on our platform - high-quaality ingredients for high quality products!</p>
        </div>
        {ingredientsList.map(each => (
            <div className={`ingre-card ${each.bg}`}>
                <div>
                    <h1 className='ingre-card-h'>{each.title}</h1>
                    <p className='ingre-card-p'>{each.description}</p>
                </div>
                <button className='ingre-card-btn'>SEE MORE</button>
            </div>
        ))}
        <img className='ingre-fill-img' src='https://s3-alpha-sig.figma.com/img/481a/5bc5/e968343e02ead9caa7924ddcbe67f484?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isHNUtnP5iIEQWpnfbALi3y6aLrgERKb5Jo9BlfDcZMLikAan6qx3FmvvhjLxt2HklkM34YOzzohwue9BMYB9e~lx1~1TExqAA4HfvKu4wIR2E8N5EUZC00LM-05L33X1syt9lgfWPMXt6GUGuoGsXyHSxqcKF7ROPhAuQdK16-STlHtmz1JNfQ~4K4Fl0vNY~ScS-zuNfRzcUh9i04WnyzRj2mihDJXfImFvhNlIhxfTVLizrwKz48kQ-JfFlsxt2l~XZZf~vOYZmtvO-UJ8leBND8avmNv9fD9Eo7ybk1XUWm1-0EntuUdrkmijRvTG2dz4VixIsROa95bYFCe8w' alt='fill-image' />
    </div>
)

export default IngredientsSection