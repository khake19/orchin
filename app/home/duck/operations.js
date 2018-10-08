import actions from './actions';

const tabChange = (tabName) => (dispatch) => {
    dispatch(actions.changeActiveTab(tabName))
} 
export default {
    tabChange
}
