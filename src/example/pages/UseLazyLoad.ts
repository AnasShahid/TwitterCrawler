import { useEffect, useReducer, useCallback } from "react";
import debounce from "lodash/debounce";
import { LazyLoadReducer } from "../../store/modules/example/reducer";
import { LAZY_LOAD_TYPE } from "../../store/modules/example/types";
import { IUseLazyLoad } from "../../interfaces/use-lazy-load";

const INTERSECTION_THRESHOLD = 5;
const LOAD_DELAY_MS = 500;

const useLazyLoad = ({ triggerRef, onGrabData }: IUseLazyLoad) => {
  const [state, dispatch] = useReducer(LazyLoadReducer, {
    loading: false,
    currentPage: 1,
    data: [],
  });

  const _handleEntry = async (entry: IUseLazyLoad) => {
    const boundingRect = entry.boundingClientRect;
    const intersectionRect = entry.intersectionRect;

    if (
      !state.loading &&
      entry.isIntersecting &&
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
    ) {
      dispatch({ type: LAZY_LOAD_TYPE.SET_DATA, payload: { loading: true } });
      const data = await onGrabData(state.currentPage);
      dispatch({ type: LAZY_LOAD_TYPE.ON_GRAB_DATA, payload: { data } });
    }
  };
  const handleEntry = debounce(_handleEntry, LOAD_DELAY_MS);

  const onIntersect = useCallback(
    (entries: IUseLazyLoad) => {
      handleEntry(entries[0]);
    },

    [handleEntry]
  );

  useEffect(() => {
    if (triggerRef.current) {
      const container = triggerRef.current;
      const observer = new IntersectionObserver(onIntersect);
      observer.observe(container);
      return () => {
        observer.disconnect();
      };
    }
  }, [triggerRef, onIntersect]);

  return state;
};

export default useLazyLoad;
