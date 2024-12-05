// import '@i18n'
import React, { Suspense } from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'

import App from './App'
import { store, persistor } from './store'

function AppContainer() {
  return (
    <Suspense fallback="Loading...">
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContainer>
              <App />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  )
}

export default AppContainer
