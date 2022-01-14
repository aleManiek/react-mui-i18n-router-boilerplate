import ButtonLink from 'components/common/ButtonLink'
import { paths } from 'config'

const Home = () => {
  return (
    <div>
      Home
      <ButtonLink to={paths.modal}>Open Modal Route</ButtonLink>
    </div>
  )
}

export default Home
