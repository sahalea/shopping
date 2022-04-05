let BASE_URL: string = '/api/'

const makeRequest = (config: any) => {
  const url = `${BASE_URL}${config.url}`
  let requestConfig: any = {}
  requestConfig = {
    method: config.method,
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  const { params } = config
  if (params) {
    if (
      config.method === 'POST' ||
      config.method === 'PUT' ||
      config.method === 'PATCH' ||
      config.method === 'DELETE'
    ) {
      requestConfig.body = JSON.stringify(params)
    }
  }

  return withTimeout(
    5000,
    fetch(url, requestConfig)
      .then((response) => {
        return response.json()
      })
      .catch((err) => {
        console.error(err)
      })
  )
}

function withTimeout(msecs: any, promise: any) {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('timeout'))
    }, msecs)
  })
  return Promise.race([timeout, promise])
}

export const get = (url: string, params: any) => {
  return makeRequest({
    url,
    params,
    method: 'GET',
  })
}

export const post = (url: string, params: any) => {
  return makeRequest({
    url,
    params,
    method: 'POST',
  })
}
