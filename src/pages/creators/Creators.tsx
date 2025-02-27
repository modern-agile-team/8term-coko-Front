import { COKO_TEAM_INFO, MEMBER_DETAILS } from '@/features/intro/constants';
import IntroHeader from '@/features/intro/ui/IntroHeader';
import Select from '@/features/intro/ui/Select';
import TutorialPromptModal from '@/features/intro/ui/TutorialPromptModal';
import useModal from '@/hooks/useModal';
import * as S from '@/pages/creators/styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Creators() {
  const [member, setMember] = useState<keyof typeof MEMBER_DETAILS>('홍대경');

  const { isShow, openModal, closeModal, Modal } = useModal();

  const handleSetMember = (value: keyof typeof MEMBER_DETAILS) => {
    if (!COKO_TEAM_INFO.some(team => team.label === value)) {
      setMember(value);
    }
  };

  return (
    <>
      <IntroHeader />
      <S.CreatorsWrapper>
        <S.TeamButtonList>
          {COKO_TEAM_INFO.map((team, index) => {
            if (index === 0) return null;
            return (
              <Select
                key={team.label}
                buttonName={`${
                  team.createBy.includes(member) ? member : team.label
                } ▲`}
                onChange={value =>
                  handleSetMember(value as keyof typeof MEMBER_DETAILS)
                }
              >
                <Select.Option value={team.label} label={`${team.label} ▼`} />
                {team.createBy.map(member => (
                  <Select.Option value={member} label={member} key={member} />
                ))}
              </Select>
            );
          })}
        </S.TeamButtonList>
        <S.MemberCardWrapper>
          <S.MemberCard>
            <img />
            <div>
              <h4>{MEMBER_DETAILS[member]?.team}</h4>
              <h1>{member}</h1>
              <p>{MEMBER_DETAILS[member]?.description}</p>
              <hr />
              <div>
                {MEMBER_DETAILS[member]?.sns.map(({ icon, url }) => (
                  <Link to={url} key={icon}>
                    <img src={getImageUrl(icon)} alt={icon} />
                  </Link>
                ))}
              </div>
            </div>
          </S.MemberCard>
        </S.MemberCardWrapper>
        <S.CoKoIntroWraper>
          <img src={getImageUrl('잠수부_코코.svg')} />
          <div>
            <h2>재밌고 쉽게 푸는 자바스크립트 학습 사이트</h2>
            <h3>코딩하는 코끼리, 코코</h3>
            <button onClick={openModal}>시작하기</button>
          </div>
        </S.CoKoIntroWraper>
      </S.CreatorsWrapper>
      <Modal isShow={isShow}>
        <TutorialPromptModal closeModal={closeModal} />
      </Modal>
    </>
  );
}
