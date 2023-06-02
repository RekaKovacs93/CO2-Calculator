const baseURL = 'http://localhost:9000/api/trackings/'

export const postTracker = (payload) => {
    return fetch ( baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
};