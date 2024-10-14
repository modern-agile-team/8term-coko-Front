interface ComponentMappingParam {
  [key: string]: (props: any) => JSX.Element;
}

const componentMapping = <T,>(mappingTable: ComponentMappingParam) => {
  const choice = (key: keyof typeof mappingTable, props: T) => {
    const Component = mappingTable[key];
    if (!Component) {
      return null;
    }
    return <Component {...props} />;
  };
  return { choice };
};

export default componentMapping;
