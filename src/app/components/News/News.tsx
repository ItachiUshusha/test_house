'use client'

import Carousel from "@/app/components/ui/Carousel/Carousel"

const News = () => {
    return(
        <div>
            <h1>Новости и блог</h1>
            <Carousel>
                <div>
                    <img src="/carousel/picture1.png" alt="" />
                </div>
                <div>
                    <img src="/carousel/picture2.png" alt="" />
                </div>
                <div>
                    <img src="/carousel/picture3.png" alt="" />
                </div>
                <div>
                    <img src="/carousel/picture4.png" alt="" />
                </div>
                <div>
                    <img src="/carousel/picture5.jpeg" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default News