import { AppProvider } from './antd-provider'
import { RouterProviderWrapper } from './routerProvider'
import { Provider } from 'react-redux'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { store } from '../store/store'
const client = new QueryClient()

const ProviderMain = () => {
  return (
    <AppProvider>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <RouterProviderWrapper/>
        </Provider>
      </QueryClientProvider>
    </AppProvider>
  )
}

export default ProviderMain