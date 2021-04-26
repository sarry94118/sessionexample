import {
    API_KEY,
    PUBLIC_SERVER_URL,
    BUSINESSES_API_URL,
    OWNERS_BUSINESSES_API_URL,
    BUSINESSES_REVIEWS_API_URL,
    REVIEWS_API_URL,
    USERS_REVIEWS_API_URL
} from "../common/constants";

export const findBusinessesForOwner = async (ownerId) => {
    let response = await fetch(OWNERS_BUSINESSES_API_URL(ownerId))
    return await response.json()
}

export const createBusiness = async (ownerId, business) => {
    let response = await fetch(OWNERS_BUSINESSES_API_URL(ownerId), {
        method: 'POST',
        body: JSON.stringify(business),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const updateBusiness = async (business) => {
    let response = await fetch(`${BUSINESSES_API_URL}/${business.id}`, {
        method: 'PUT',
        body: JSON.stringify(business),
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}

export const deleteBusiness = async (businessId) => {
    let response = await fetch(`${BUSINESSES_API_URL}/${businessId}`, {
        method: 'DELETE'
    })
    return await response.json()
}

export const searchBusinesses = async (term, location) => {
    let response = await fetch(
        `${PUBLIC_SERVER_URL}/businesses/search?term=${term}&location=${location}`, {
            headers: {
                'ContentType': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            params: {
                'location': location,
                'term': term
            }
        })
    return response.json();
};

export const findDetailById = async (id) => {
    let response = await fetch(`${PUBLIC_SERVER_URL}/businesses/${id}`, {
        method: 'GET',
        headers: {
            'ContentType': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        }
    })
    return response.json();
};

export const findReviewsForBusiness = async (businessId) => {
    let response = await fetch(BUSINESSES_REVIEWS_API_URL(businessId))
    return await response.json()
};

export const createReview = async (businessId, review) => {
    let response = await fetch(BUSINESSES_REVIEWS_API_URL(businessId), {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
};

export const findReviewsForUser = async (userId) => {
    let response = await fetch(USERS_REVIEWS_API_URL(userId))
    return await response.json()
}

export const updateReview = async (review) => {
    let response = await fetch(`${REVIEWS_API_URL}/${review.id}`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}

export const deleteReview = async (reviewId) => {
    let response = await fetch(`${REVIEWS_API_URL}/${reviewId}`, {
        method: 'DELETE'
    })
    return await response.json()
}

export const getRecentReviews = async () => {
    let response = await fetch(`${REVIEWS_API_URL}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}

