import { useState, useRef } from 'react';
import {
  AlignCenter,
  FlexDiv,
  InputBox,
  Label,
  LayOut,
  SelectBox,
} from './style';
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
  const sectionRef = useRef<HTMLInputElement>(null);
  const handelQuizChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    if (id === 'answerChoice' || id === 'answer') {
      setQuiz({ ...quiz, [id]: value.split(',') });
    } else {
      setQuiz({ ...quiz, [id]: value });
    }
  };

  return (
    <AlignCenter>
      <LayOut>
        <div>
          <Label>섹션 선택하기</Label>
          <Label $marginLeft="420px">파트 선택하기</Label>
        </div>
        <div>
          <SelectBox id="sectionId" onChange={handelQuizChange}>
            <option value="0">변수</option>
            <option value="1">자료형</option>
            <option>등등..</option>
          </SelectBox>
          <input type="text" placeholder="섹션추가" ref={sectionRef}></input>
          <button
            onClick={() => {
              console.log(sectionRef.current?.value);
            }}
          >
            섹션추가
          </button>
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
            placeholder="조합형의 경우 순서대로 ,로 구분해서 적어주시면 됩니다.ex) function, add, return"
          />
        </div>
        <div>
          <Label>문제 유형 선택하기</Label>
          <Label $marginLeft="380px">
            객관식, 조합식의 경우만 보기를 작성해주시면 됩니다.
          </Label>
        </div>

        <FlexDiv>
          <SelectBox
            id="category"
            $marginRight="125px"
            onChange={handelQuizChange}
          >
            <option value="MultipleChoice">객관식</option>
            <option value="Combination">조합식</option>
            <option value="OXSelector">O/X</option>
            <option value="ShortAnswer">단답형</option>
          </SelectBox>
          <InputBox
            id="answerChoice"
            $height="200px"
            onChange={handelQuizChange}
          ></InputBox>
        </FlexDiv>

        <button onClick={() => console.log(quiz)}>확인</button>
      </LayOut>
    </AlignCenter>
  );
}
