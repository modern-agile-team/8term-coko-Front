interface ComponentMappingParam {
  [key: string]: (props: any) => JSX.Element;
}
/**
 *
 * @param mappingTable {key:string : value : JSX.Element}형태로 인자를 넣어주면 됩니다.
 * @제네릭 choice 함수에서 사용할 props의 타입을 지정해줍니다 => 컴포넌트를 조건부 랜더링 할 때 컴포넌트에 전달할 프롭스 타입
 * @returns choice 함수를 반환합니다.
 * @choice key와 props를 전달합니다 key를 통해 객체로 전달했던 컴포넌트를 호출할 수 있습니다
 */
const componentMapping = <T,>(mappingTable: ComponentMappingParam) => {
  const ComponentChoice = (key: keyof typeof mappingTable, props: T) => {
    const Component = mappingTable[key];
    if (!Component) {
      return null;
    }
    return <Component {...props} />;
  };
  return { ComponentChoice };
};

export default componentMapping;
