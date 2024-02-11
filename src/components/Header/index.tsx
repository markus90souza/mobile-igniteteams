import { useNavigation } from '@react-navigation/native'
import { Brand, Container, BackButton, BackIcon } from './styles'
import logo from '@assets/logo.png'

type HeaderProps = {
  showBackButton?: boolean
}

const Header = ({ showBackButton = false }: HeaderProps) => {
  const { navigate } = useNavigation()

  const handleGoBack = () => {
    navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Brand source={logo} />
    </Container>
  )
}

export { Header }
