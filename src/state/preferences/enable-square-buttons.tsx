import React from 'react'

import * as persisted from '#/state/persisted'

// Preference: enableSquareButtons – when true, disables notifications sent when liking/reposting a post someone else reposted

type StateContext = persisted.Schema['enableSquareButtons']
// Same setter signature used across other preference modules
type SetContext = (v: persisted.Schema['enableSquareButtons']) => void

const stateContext = React.createContext<StateContext>(
  persisted.defaults.enableSquareButtons,
)
const setContext = React.createContext<SetContext>(
  (_: persisted.Schema['enableSquareButtons']) => {},
)

export function Provider({children}: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState(persisted.get('enableSquareButtons'))

  const setStateWrapped = React.useCallback(
    (value: persisted.Schema['enableSquareButtons']) => {
      setState(value)
      persisted.write('enableSquareButtons', value)
    },
    [setState],
  )

  React.useEffect(() => {
    return persisted.onUpdate('enableSquareButtons', next => {
      setState(next)
    })
  }, [setStateWrapped])

  return (
    <stateContext.Provider value={state}>
      <setContext.Provider value={setStateWrapped}>
        {children}
      </setContext.Provider>
    </stateContext.Provider>
  )
}

export function useEnableSquareButtons() {
  return React.useContext(stateContext)
}

export function useSetEnableSquareButtons() {
  return React.useContext(setContext)
}
