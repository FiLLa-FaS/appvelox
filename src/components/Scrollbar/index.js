import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

class Scrollbar extends Component {
  render() {
    return (
      <Scrollbars
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: "#003B72",
              borderRadius: "5px",
              width: "8px",
            }}
          />
        )}
        renderView={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              padding: "15px",
              height: "100%",
            }}
          />
        )}
      >
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default Scrollbar;
