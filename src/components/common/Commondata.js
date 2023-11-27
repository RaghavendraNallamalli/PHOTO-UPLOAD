//This constant apiUrl holds the base URL for the Unsplash API, indicating where the API requests should be directed.
export const apiUrl = "https://api.unsplash.com";
//The dataUrls constant is an object containing various endpoints for different types of data
export const dataUrls = {
  profile: "",
  portfolio: "/portfolio",
  collections: "/collections",
  likedPhotos: "/likes",
  photos: "/photos",
  stats: "/statistics",
  getPhotos: "/photos",
};


//These constants (userPublic and userPrivate) are arrays containing objects representing navigation options for public and private user profiles, respectively.
//Each object in the arrays has a name (display name) and a path (the path for navigation).
export const userPublic = [
  {
    name: "Profile",
    path: "/public/profile",
  },
  {
    name: "Photos",
    path: "/public/photos",
  },
  {
    name: "Liked Photos",
    path: "/public/liked_photos",
  },
  {
    name: "Collections",
    path: "/public/collections",
  },
  {
    name: "Statistics",
    path: "/public/stats",
  },
];

export const userPrivate = [
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Photos",
    path: "/photos",
  },
  {
    name: "Liked Photos",
    path: "/liked_photos",
  },
  {
    name: "Collections",
    path: "/collections",
  },
  {
    name: "Statistics",
    path: "/stats",
  },
];
