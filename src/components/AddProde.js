import { connect } from "react-redux";

function AddProde(props) {

}

function mapStateToProps(state) {
    return {
      userDetail: state.userDetail,
    };
  }

export default connect(mapStateToProps,null) (AddProde)