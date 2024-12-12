import './index.css'

const blogList = [
    {
        date: '20 APR',
        title: 'The Covid 19 Epidemic In 2022',
        bg: 'blog-bg-1',
    },
    {
        date: '20 APR',
        title: 'The Covid 19 Epidemic In 2023',
        bg: 'blog-bg-2',
    },
    {
        date: '20 APR',
        title: 'The Covid 19 Epidemic In 2022',
        bg: 'blog-bg-3',
    },
    {
        date: '',
        title: 'The Covid 19 Epidemic In 2023',
        bg: 'blog-bg-4',
    },
    {
        date: '20 APR',
        title: 'The Covid 19 Epidemic In 2022',
        bg: 'blog-bg-1',
    },
    {
        date: '20 APR',
        title: 'The Covid 19 Epidemic In 2023',
        bg: 'blog-bg-2',
    },
    {
        date: '20 APR',
        title: 'The Covid 19 Epidemic In 2022',
        bg: 'blog-bg-3',
    },
    {
        date: '17 MAR',
        title: 'Hac hendrerit mus nons semper suspendisse',
        bg: 'blog-bg-4',
    },
]

const BlogSection = () => (
    <div className='blog-container'>
        <div className='blog-header-container'>
            <p className='blog'>OUR BLOG</p>
            <h1 className='blog-head'>Latest News</h1>
        </div>
        <ul className='blog-list-container'>
            {blogList.map(each => (
                <li className={`blog-list ${each.bg}`}>
                    {each.date && (<div className='date-container'>
                        <p className='date'>{each.date}</p>
                    </div>)}
                    <p className='blog-p'>{each.title}</p>
                    {each.date !== '17 MAR' && <p className='blog-p'>Is Back</p>}
                </li>
            ))}
        </ul>
    </div>
)

export default BlogSection