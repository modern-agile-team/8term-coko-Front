import { useState } from 'react';
import { AlignCenter, InputBox, Label, LayOut, SelectBox } from './style';
import Quiz from './types/Quiz';

export default function CreateQuiz() {
  //퀴즈의 정보를 저장하는 상태
  const [quiz, setQuiz] = useState<Quiz>({
    sectionId: 0,
    part: 'Easy',
    title: '',
    question: '',
    answer: [],
    category: 'MultipleChoice',
  });
  const [answerChoice, setAnswerChoice] = useState<string>();
  const handelQuizChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setQuiz({ ...quiz, [id]: value });
  };

  return (
    <AlignCenter>
      <LayOut>
        <div>
          <Label>섹션 선택하기</Label>
          <Label $marginLeft="400px">파트 선택하기</Label>
        </div>
        <div>
          <SelectBox id="sectionId" onChange={handelQuizChange}>
            <option value="0">변수</option>
            <option value="1">자료형</option>
            <option>등등..</option>
          </SelectBox>
          <button>섹션추가</button>
          <SelectBox id="part" onChange={handelQuizChange}>
            <option value="Easy">Easy</option>
            <option value="Normal">Normal</option>
            <option value="Hard">Hard</option>
            <option value="Very Hard">Very Hard</option>
          </SelectBox>
        </div>
        <Label>문제 지문 입력(title)</Label>
        <InputBox id="title" onChange={handelQuizChange} />
        <div>
          <Label>문제(question)</Label>
          <Label $marginLeft="420px">정답(answer)</Label>
        </div>
        <div>
          <InputBox
            id="question"
            wrap="hard"
            $height="200px"
            onChange={handelQuizChange}
          />
          <InputBox
            id="answer"
            wrap="hard"
            $height="200px"
            onChange={handelQuizChange}
          />
        </div>
        <Label>문제 유형 선택하기</Label>
        <SelectBox id="category" onChange={handelQuizChange}>
          <option value="MultipleChoice">객관식</option>
          <option value="Combination">조합식</option>
          <option value="OXSelector">O/X</option>
          <option value="ShortAnswer">단답형</option>
        </SelectBox>
        <button onClick={() => console.log(quiz)}>확인</button>
      </LayOut>
    </AlignCenter>
  );
}
