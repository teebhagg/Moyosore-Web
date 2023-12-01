
export interface AboutInterface {
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    _createdAt: string
    title: string
    subTitle: string
    aboutCard: {
        image: {
            _type: string
            asset: {
                _ref: string
                _type: string
            }
        }
        _type: string
        asset: {
            _ref: string
            _type: string
        }
        _ref: string
        aboutLink: string
        header: string
        body: string
    }
    imageCarousel: any[]
}