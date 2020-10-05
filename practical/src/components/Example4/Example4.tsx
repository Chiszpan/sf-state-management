import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../reducers";

type IProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Example4 = (props: IProps) => {
  return (
    <div>
      Czy zalogowany: {props.isAuthenticated.toString()}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.login.isAuthenticated
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Example4);
