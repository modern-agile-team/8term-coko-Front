import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2vw 5vw;
  *,
  *::before,
  *::after {
    font-family: Pretendard;
  }
`;

export const Content = styled.div`
  width: 80vw;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  padding-left: 2rem;
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const Hr = styled.hr`
  width: 100%;
  margin: 1.5rem 0;
  border: 0;
  height: 2px;
  background: #ddd;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;
