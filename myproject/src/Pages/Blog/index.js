
import './blog.css'

export default function Blog() {
    return(
        <div className='blog'>
            <div className='blog-menu'>
                <div className='blog-menu-profile'>
                    Profile
                </div>
                <div className='blog-menu-person-description'>
                    Descript
                </div>
                <div className='blog-menu-post-categories'>
                    categories
                </div>
            </div>
            <div className='blog-body'>
                <div className='blog-post'>
                    <div className='blog-post-image'>
                        Image
                    </div>
                    <div className='blog-post-resume'>
                        Text
                    </div>                    
                </div>
            </div>
            <div className='blog-options'>
                <div className='blog-option'>
                    New Post
                </div>
                <div className='blog-option'>
                    New Post
                </div>
                <div className='blog-option'>
                    New Post
                </div>                                
            </div>            
        </div>
    )
}