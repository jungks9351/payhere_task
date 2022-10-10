import Modal from 'component/common/Modal'
import CustomButton from 'component/common/CustomButton'
import styled from 'styled-components'
import { ReactNode } from 'react'

const BookmarkAlarm = () => {
  return (
    <Modal>
      <RepoAlarmWrapper>
        <AlarmContent>
          <p>북마크는 4개까지만 가능합니다.</p>
        </AlarmContent>
        <ButtonWrapper>
          <CustomButton type="button" title="알람" width={70} height={40}>
            확인
          </CustomButton>
        </ButtonWrapper>
      </RepoAlarmWrapper>
    </Modal>
  )
}

const RepoAlarmWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const AlarmContent = styled.p`
  font-weight: bold;
`

const ButtonWrapper = styled.div`
  button {
    background-color: #000;
    border-radius: 10px;
    color: #fff;
  }
`

export default BookmarkAlarm
