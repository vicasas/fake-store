import PropTypes from 'prop-types'

export default function OpenGraph({ url, title, description, image }) {
  return (
    <>
      {/* Facebook Meta Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      {/* Twitter Meta Tags */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
    </>
  )
}

OpenGraph.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
}

OpenGraph.defaultProps = {
  image:
    'https://i.pinimg.com/originals/c4/35/6c/c4356cd5454d06585e0a46066b555172.png',
}
