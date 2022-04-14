import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>
        <p>This site was created to demonstrate Redwood.</p>
        <Link to={routes.home()}>Return home</Link>
      </p>
    </>
  )
}

export default AboutPage
