import React, { PureComponent } from "react";

interface TextTypes {
  children: string;
}

class Text extends PureComponent<TextTypes> {
  render() {
    const { children } = this.props;
    return <span>{children}</span>;
  }
}
