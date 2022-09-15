export const fetchToApi = async (url) => {
    try {
      const data = await fetch(url)
      return await data.json()
    } catch (error) {
      console.log(error);
    }
  }
  
  export const postToApi = async (baseUrl, data) => {
    const url = baseUrl
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify( data )
      })
      return response
  
    } catch (error) {
      console.log(error);
    }
  }
  