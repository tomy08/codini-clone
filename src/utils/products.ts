import contentful from 'contentful'
const client = contentful.createClient({
  space: '86883g4udane',
  environment: 'master',
  accessToken: '4PWwvkltf524AqcUR162GuxluWHTwzVQDC8aIgA4Gqs',
})

export const getProducts = async () => {
  const entries = await client.getEntries({
    content_type: 'product',
  })

  return entries
}
