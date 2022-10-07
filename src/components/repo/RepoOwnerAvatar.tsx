import styled from 'styled-components'

type RepoOwnerAvatarType = {
  src: string
}

const RepoOwnerAvatar = ({ src }: RepoOwnerAvatarType) => {
  return <RepoOwnerAvatarWrapper src={src} alt="owner avatar" />
}

const RepoOwnerAvatarWrapper = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
`

export default RepoOwnerAvatar
