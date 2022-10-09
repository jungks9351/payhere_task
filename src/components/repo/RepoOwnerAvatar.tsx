import styled from 'styled-components'

type RepoOwnerAvatarType = {
  width: number
  height: number
  src: string
}

const RepoOwnerAvatar = ({ src, width, height }: RepoOwnerAvatarType) => {
  return (
    <RepoOwnerAvatarWrapper
      src={src}
      width={width}
      height={height}
      alt="owner avatar"
    />
  )
}

const RepoOwnerAvatarWrapper = styled.img<RepoOwnerAvatarType>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 50%;
  vertical-align: middle;
`

export default RepoOwnerAvatar
