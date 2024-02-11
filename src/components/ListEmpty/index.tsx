import { Container, Message } from './styles'

type ListEmpryProps = {
  message: string
}

const ListEmpty = ({ message }: ListEmpryProps) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}

export { ListEmpty }
