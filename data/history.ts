type History<T> = {
	addHistoryItem: (item: T) => void,
	undo: () => T | null,
	redo: () => T | null,
}

function createHistory<T>(initHistoryAction: T): History<T> {
	let nextItemIndex = 0
	let historyItems: T[] = [initHistoryAction]

	return {
		addHistoryItem: (item: T) => {
			console.log(historyItems)
			historyItems.length = nextItemIndex + 1
			historyItems.push(item)
			++nextItemIndex
			console.log(historyItems)
		},
		undo: () => {
			console.log(historyItems)
			if (nextItemIndex <= 0) {
				return null
			}
			--nextItemIndex
			console.log(historyItems)
			return historyItems[nextItemIndex]
		},
		redo: () => {
			console.log(historyItems)
			if (nextItemIndex >= historyItems.length - 1) {
				return null
			}
			++nextItemIndex
			console.log(historyItems)
			return historyItems[nextItemIndex]
		},
	}
}

export {
	createHistory,
}