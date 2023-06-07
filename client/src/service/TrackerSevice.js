const baseURL = 'http://localhost:9000/api/trackings/'


// const lastTwelve = db.collection('trackings').aggregate([
//   { $sort: { createdAt: -1 } },  // Sort documents in descending order based on 'createdAt'
//   { $limit: 12 }  // Limit the result to the first 12 documents
// ]).toArray();
// export const getTwelve = () => {
//   return fetch (baseURL + 'twelve')
//   .then(res => res.json())
//   .then(data => data.lastTwelve)
// }

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
export const getOneTracker = (id) => {
    return fetch(baseURL + id)
      .then(res => res.json());
  }
