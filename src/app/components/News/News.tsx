'use client'

import Carousel from "@/app/components/ui/Carousel/Carousel"

const News = () => {
    return(
        <div>
            <h1>Новости и блог</h1>
            <Carousel>
                <div>
                    <img src="/carousel/picture1.png" alt="" />
                    <p>27.03.2020</p>
                    <p>Как подготовиться к протезированию зубов</p>
                </div>
                <div>
                    <img src="/carousel/picture2.png" alt="" />
                    <p>27.03.2020</p>
                    <p>Как подготовиться к протезированию зубов</p>
                </div>
                <div>
                    <img src="/carousel/picture3.png" alt="" />
                    <p>27.03.2020</p>
                    <p>Как подготовиться к протезированию зубов</p>
                </div>
                <div>
                    <img src="/carousel/picture4.png" alt="" />
                    <p>27.03.2020</p>
                    <p>Как подготовиться к протезированию зубов</p>
                </div>
                <div>
                    <img src="/carousel/picture5.jpg" alt="" />
                    <p>27.03.2020</p>
                    <p>Как подготовиться к протезированию зубов</p>
                </div>
            </Carousel>
        </div>
    )
}

export default News