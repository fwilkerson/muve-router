export const routerModel = {
  activeView: null,
  route: getInitialRoute()
};

function getInitialRoute() {
  if (typeof window === "undefined") {
    return { path: "/" };
  }
  return history.state || { path: window.location.pathname };
}

function matchRoute(route) {
  const currentPath = window.location.pathname;
  if (route.exact) {
    return currentPath === route.path;
  }
  return currentPath.match(/[^/]+/g)[0] === route.path.match(/[^/]+/g)[0];
}

export function AsyncView(props) {
  if (props.view) {
    return props.view(props.model);
  }
  props.importView().then(props.onComplete);
  return props.placeholder;
}

export function Route(props) {
  return props;
}

export function Router(props) {
  if (!props.children) {
    return;
  }
  if (typeof window === "undefined") {
    return props.model.serverView;
  }
  if (!window.onpopstate) {
    window.onpopstate = props.routeChanged;
  }
  const match = props.children.find(matchRoute);
  if (match) {
    return match.view(props.model);
  }
}

export function createRouterActions(getModel, setModel) {
  return {
    handleRouteChanged(event) {
      const { activeView } = getModel();
      setModel({
        route: event.state || { path: window.location.pathname },
        activeView: null
      });
      if (activeView && activeView.didUnmount) {
        activeView.didUnmount();
      }
    },
    setActiveView(activeView) {
      setModel({ activeView });
      if (activeView.didMount) {
        activeView.didMount();
      }
    },
    setRoute(pathname) {
      const { activeView, route } = getModel();
      if (pathname === route.path) {
        return;
      }
      const newRoute = { path: pathname };
      history.pushState(newRoute, "", pathname);
      setModel({ route: newRoute, activeView: null });
      if (activeView && activeView.didUnmount) {
        activeView.didUnmount();
      }
    }
  };
}
