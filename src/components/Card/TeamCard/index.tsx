import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'

type TeamCardProps = TouchableOpacityProps & {
  title: string
}

export function TeamCard({ title, ...rest }: TeamCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
