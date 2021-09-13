import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu
        reclamis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.
        Viva Forevis aptent taciti sociosqu ad litora torquent. Aenean aliquam
        molestie leo, vitae iaculis nisl.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
