const baseURL = 'http://localhost:9000/api/trackings/'

export const postTracker = (payload) => {
    return fetch ( baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}
    
    
export const updateTracker = (payload) => {
        return fetch(baseURL + booking._id, {
          method: 'PUT',
          body: JSON.stringify(booking),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
      }
    
export const deleteTracker = (id) => {
        return fetch(baseURL + id, {
          method: 'DELETE'
        });
    };
