export interface PrayerRequestInterface {
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    _createdAt: string;
    title: string;
    description: string;
    coverImage: {
        _type: string
        asset: {
          _ref: string
          _type: string
        }
      };
}