import './index.css'

const featuresList = [
    {
        imageUrl: 'https://res.cloudinary.com/dx2atlee1/image/upload/v1733638238/Group-8111.svg_ha9vi1.png',
        title: 'Clinically Studied',
        description:'All products that we offer have undergone lab and safety tests'
    },
    {
        imageUrl: 'https://res.cloudinary.com/dx2atlee1/image/upload/v1733638306/Group-8110.svg_awe9ty.png',
        title: 'Vegetarian Friendly',
        description:'We have a wide selection of vegetarian products to meet your needs'
    },
    {
        imageUrl: 'https://res.cloudinary.com/dx2atlee1/image/upload/v1733638318/Group-8117.svg_ku0yf3.png',
        title: 'Made in India',
        description:'Shop local and explore health products made right here in India'
    },
    {
        imageUrl: 'https://res.cloudinary.com/dx2atlee1/image/upload/v1733638329/Group-8114.svg_v0tyku.png',
        title: 'Free Shipping',
        description:'We deliver to your door with no shipping costs on your orders'
    },
    {
        imageUrl: 'https://res.cloudinary.com/dx2atlee1/image/upload/v1733638340/Group-8115.svg_kvymtt.png',
        title: 'No Risk',
        description:'We ensure that all products are safe and within their use-by date'
    },
    {
        imageUrl: 'https://res.cloudinary.com/dx2atlee1/image/upload/v1733638349/Group-8116.svg_f3tutj.png',
        title: 'GMO Free',
        description:'Natural, no modified products and derivatives for those who need it'
    },
]

const FeaturesSection = () => (
    <div className='features-container'>
        <ul className='features-list-container'>
            {featuresList.map(each => (
                <li className='features-list-card'>
                    <div className='features-icon-cont'>
                        <img className='features-icon' src={each.imageUrl} alt={each.title} />
                    </div>
                    <h1 className='features-h'>{each.title}</h1>
                    <p className='features-p'>{each.description}</p>
                </li>
            ))}
        </ul>
    </div>
)

export default FeaturesSection