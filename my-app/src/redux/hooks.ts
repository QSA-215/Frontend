import {rootReducer} from './reducer'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as CanvasActionCreator from './actionCreators'

// Выведение типа `RootState` из хранилища
type RootState = ReturnType<typeof rootReducer>

// Используйте во всем приложении вместо `useSelector`
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


const useAppActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators({
		...CanvasActionCreator,
	}, dispatch)
}

export {
	useAppSelector,
	useAppActions,
}
