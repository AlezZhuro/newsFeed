import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const useAppDispatch: () => RootDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {useAppDispatch, useAppSelector};
