interface ComponentMappingParam {
  [key: string]: (props: any) => React.JSX.Element;
}
/**
 * @description {key : value}형태로 맵핑된 컴포넌트에서 key값에 따라서 switch-case처럼 분기형태로 랜더링 시킬 수 있는 함수입니다.
 *
 * @template T 분기된 컴포넌트에 전달할 타입
 *
 * @param components - key와 component를 맵핑시킨 객체를 전달합니다다
 *
 * @returns 설정한 key값으로 원하는 component를 호출할 수 있는 추상화된 함수를 반환합니다
 *
 * @example const choice = componentMapping<string>({a:ExComponent,b:ExCompo,c:Exc})
 *          choice(a,{'hello'})
 *           //<ExComponent {hello:hello}>
 */
const componentMapping = <T,>(mappingTable: ComponentMappingParam) => {
  const componentChoice = (key: keyof typeof mappingTable, props: T) => {
    const Component = mappingTable[key];
    if (!Component) {
      return null;
    }
    return <Component {...props}></Component>;
  };
  return componentChoice;
};

export default componentMapping;
