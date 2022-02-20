import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import appReducer from '../../store/app';

const { actions } = appReducer;

export const useApp = () => {
	const { state, dispatch } = useGlobalStore();

	// List of Props
	const { app } = state;

	// List of Actions
	const {
		startPartyNow,
	} = actions;

	// Bind Actions
	const appActions = bindActions({
		startPartyNow,
	}, dispatch);

	return { ...app, ...appActions };
}