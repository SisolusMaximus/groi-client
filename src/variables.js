let _api_url
if (process.env.NODE_ENV === "production"){
   _api_url = "https://nameless-dusk-38072.herokuapp.com"
} else {
   _api_url = "http://192.168.8.109:3001";
}

export const mapboxAccessToken = "pk.eyJ1Ijoic2lzb2x1c21heGltdXMiLCJhIjoiY2ttMGc2Y3JsMWlyYTJucnphNWp5aHNobiJ9.pxHl3sHIg2oLP7HU6Pc2bg";
export const api_url = _api_url
export const categories = [
   "Automotive",
   "Computers",
   "Fashion",
   "Health and beauty",
   "For kids",
   "Home and garden",
   "Household appliances",
   "Office and business",
   "Telephones and accessories",
   "Sport and fitness"
]
