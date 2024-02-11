import { TouchableOpacityProps } from 'react-native'
import { Container, Title, ButtonTypeStyleProps } from './styles'

type ButtonProps = TouchableOpacityProps & {
  title: string
  variant?: ButtonTypeStyleProps
}

const Button = ({ title, variant = 'PRIMARY', ...rest }: ButtonProps) => {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}

export { Button }
