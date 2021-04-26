export const SERVER_URL = "http://localhost:8080";
export const API_KEY = "CqZ3hvdFtOZChcD6GAuGQuul5eL4-UjoHflxdwJfuUByki_qzWUw-HfBEFS2woriCWOgCrQoqbF5GWbpVqPlvmQP0YkWM4IO_4bp0ogLhXvbcLakdUIquvCHfYU8XnYx";
export const PUBLIC_SERVER_URL = "https://cors-anywhere-myreview.herokuapp.com/https://api.yelp.com/v3";
export const BUSINESSES_API_URL = "http://localhost:8080/api/businesses"
export const OWNERS_BUSINESSES_API_URL = (ownerId) => `http://localhost:8080/api/owners/${ownerId}/businesses`
export const BUSINESSES_REVIEWS_API_URL = (businessId) => `http://127.0.0.1:8080/api/businesses/${businessId}/reviews`
export const REVIEWS_API_URL = "http://localhost:8080/api/reviews"
export const USERS_REVIEWS_API_URL = (userId) => `http://localhost:8080/api/users/${userId}/reviews`