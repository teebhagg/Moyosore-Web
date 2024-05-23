let blogSchema = {
    subTitle: 'Blessing or Curse?',
    _createdAt: '2023-11-28T13:56:29Z',
    body: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    category: {
      _ref: '2f997839-8ef6-465f-ac9b-ea16d36d9a75',
      _type: 'reference'
    },
    title: 'Time',
    slug: { current: 'time', _type: 'slug' },
    coverImage: { _type: 'image', asset: [Object] },
    _rev: 'n8jUthveQsLLYWWmPDpkZn',
    _type: 'blog',
    _id: 'e49f04e4-74e1-4fd0-af29-0b15d780ba7c',
    _updatedAt: '2023-11-28T13:58:53Z'
  }

  export interface BlogInterface {
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    body: any[]
    category: {
      _ref: string
      _type: string
    }
    title: string
    subTitle: string
    coverImage: {
      _type: string
      asset: {
        _ref: string
        _type: string
      }
    }
    audio: string
    slug: {
      _type: string
      current: string
    },
    datePublished: string
  }