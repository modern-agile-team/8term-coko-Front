import { useState, useRef } from 'react';
import {
  AlignCenter,
  FlexDiv,
  InputBox,
  Label,
  LayOut,
  SelectBox,
} from './style';
import type QuizAdmin from './types/Quiz';
import { useMutation } from '@tanstack/react-query';
import api from '../apis/axios/instance';

export default function CreateQuiz() {
  //퀴즈의 정보를 저장하는 상태
  const [quiz, setQuiz] = useState<QuizAdmin>({
    sectionId: 1,
    part: 'EASY',
    title: '',
    question: '',
    answer: [],
    category: 'MULTIPLE_CHOICE',
    answerChoice: [],
  });
  const sectionRef = useRef<HTMLInputElement>(null);
  const mutation = useMutation({
    mutationFn: (quiz: QuizAdmin) => api.post(`/quizzes`, quiz),
  });

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
            <option value="1">변수</option>
            <option value="2">자료형</option>
            <option>등등..</option>
          </SelectBox>
          <input type="text" placeholder="섹션추가" ref={sectionRef}></input>
          <button
            onClick={() => {
              //api 생기면 기능 추가
              console.log(sectionRef.current?.value);
            }}
          >
            섹션추가
          </button>
          <SelectBox id="part" onChange={handelQuizChange}>
            <option value="EASY">Easy</option>
            <option value="NORMAL">Normal</option>
            <option value="HARD">Hard</option>
            <option value="VERY_HARD">Very Hard</option>
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
            <option value="MULTIPLE_CHOICE">객관식</option>
            <option value="COMBINATION">조합식</option>
            <option value="OX_SELECTOR">O/X</option>
            <option value="SHORT_ANSWER">단답형</option>
          </SelectBox>
          <InputBox
            id="answerChoice"
            $height="200px"
            onChange={handelQuizChange}
          ></InputBox>
        </FlexDiv>

        <button
          onClick={() => {
            mutation.mutate(quiz);
          }}
        >
          확인
        </button>
      </LayOut>
    </AlignCenter>
  );
}
