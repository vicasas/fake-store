import PropTypes from 'prop-types'
import OpenGraph from '@components/OpenGraph'

export default function MetaTags({ url, title, description }) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />

      {/* Favicons */}
      <link rel='icon' href='/favicon.ico' />

      {/* Open Graph Meta Tags */}
      <OpenGraph url={url} title={title} description={description} />
    </>
  )
}

MetaTags.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
