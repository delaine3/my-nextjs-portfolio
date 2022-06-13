import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className="grid wrapper">
  <Component {...pageProps} />
</div>
}

export default MyApp
