
export interface ContactInterface {
    socials: {
        title: string
        link: string
        _key: string
    }[],
    title: string
    coverImage: {
        _type: string
        asset: {
            _ref: string
            _type: string
        }
    }
    _updatedAt: string
    _createdAt: string
    _rev: string
    _type: string
    _id: string
}