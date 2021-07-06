import React from "react";
import Demo from './components/demo'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const props = {
      title : '欢迎使用传化NPM组件开发脚手架'
    }
    return (
      <Demo { ...props } />
    );
  }
};

export default App;