import HomeComponent from './HomeComponent';
import { connect } from 'react-redux';
import { homeOperations } from './duck';

const { tabChange } = homeOperations;
const mapStateToProps = (state) => ({
    ui: state.home.ui
});

export default connect(mapStateToProps, { tabChange })(HomeComponent);
