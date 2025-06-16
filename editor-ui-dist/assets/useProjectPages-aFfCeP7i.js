import { Q as useRoute, q as computed, V as VIEWS, dW as reactive } from "./index-C5YB2aAj.js";
const useProjectPages = () => {
  const route = useRoute();
  const isOverviewSubPage = computed(
    () => route.name === VIEWS.WORKFLOWS || route.name === VIEWS.HOMEPAGE || route.name === VIEWS.CREDENTIALS || route.name === VIEWS.EXECUTIONS || route.name === VIEWS.FOLDERS
  );
  const isSharedSubPage = computed(
    () => route.name === VIEWS.SHARED_WITH_ME || route.name === VIEWS.SHARED_WORKFLOWS || route.name === VIEWS.SHARED_CREDENTIALS
  );
  return reactive({
    isOverviewSubPage,
    isSharedSubPage
  });
};
export {
  useProjectPages as u
};
