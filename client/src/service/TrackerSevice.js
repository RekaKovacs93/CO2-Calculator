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
        return fetch(baseURL + payload._id, {
          method: 'PUT',
          body: JSON.stringify(payload),
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

export const getTracker = () => {
    return fetch(baseURL)
      .then(res => res.json());
  }
export const getOneTracker = ( id) => {
    return fetch(baseURL + id)
      .then(res => res.json());
  }
