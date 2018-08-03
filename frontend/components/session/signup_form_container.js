import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ errors }, ownProps) => ({
  errors,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
