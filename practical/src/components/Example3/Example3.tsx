import React from "react";
import { connect } from "react-redux";

import { signIn } from "../../actions/loginActions";

type IProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Example3 = (props: IProps) => {
  return (
    <div>
      <button onClick={() => props.signIn({
        login: 'login_example',
        token: 'token_example'
      })}>
        Log in
      </button>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  signIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Example3);
