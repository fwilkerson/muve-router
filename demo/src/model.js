import {interact} from 'muve';

import {createRouterActions, routerModel} from '../../index';

const init = Object.assign({title: 'Muve Router'}, routerModel);

const {getModel, setModel} = interact(init);

const {handleRouteChanged, setRoute} = createRouterActions(getModel, setModel);

export {getModel, handleRouteChanged, setModel, setRoute};
export default init;