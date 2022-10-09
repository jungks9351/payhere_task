import styled from 'styled-components'

const NoBookmarkList = () => {
  return (
    <NoBookmarkListWrapper>
      <p>북마크한 GitHub Public Repository 없습니다.</p>
      <p>위 검색을 통해 추가해주세요.</p>
    </NoBookmarkListWrapper>
  )
}

const NoBookmarkListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: #a6aab0;
  font-weight: bold;
`

export default NoBookmarkList
