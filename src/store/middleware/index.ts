import { AnyAction, Dispatch, Middleware } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

const middleware: Middleware[] = []

if (process.env.NODE_ENV === 'development') {
  middleware.push(
    createLogger({
      duration: true,
      timestamp: false,
      collapsed: true,
      colors: {
        title: () => '#139BFE',
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#A47104',
        error: () => '#ff0005',
      },
      predicate: () => typeof window !== 'undefined',
    }) as Middleware<{}, any, Dispatch<AnyAction>>, // Update the type of the middleware function
  )
}

export { middleware }
