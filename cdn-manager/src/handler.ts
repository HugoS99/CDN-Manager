export async function handleRequest(request: Request): Promise<Response> {
 
  if (request.method === 'POST') {
    return HandlePostRequest(request)
  }


  return HandleGetRequest(request)
}

async function HandleGetRequest(request:Request) {
  const url = new URL(request.url)
  switch (url.pathname) {
    default:
      break;
  }
  return new Response(null)
}

async function HandlePostRequest(request:Request) {

  const url = new URL(request.url)
  switch (url.pathname) {
    case '/newimage':
      const payload = await request.json()
      console.log(payload)
      return new Response(payload)
      break;
  
    default:
      break;
  }
  return new Response(null)
  
}

