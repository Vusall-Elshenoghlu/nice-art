import router from './router/router';
import {RouterProvider} from 'react-router-dom';
import './App.scss';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {ToastContainer} from 'react-toastify';
import useGlobalStyles from 'assets/styles/style';
import {ConfigProvider} from 'antd';
import {themeConfig} from './core/configs/theme.config';
const queryClient = new QueryClient();

function App() {

    useGlobalStyles();
    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={themeConfig}>
                <div className='App'>
                    <RouterProvider router={router}/>
                </div>
                <ToastContainer
                    position='bottom-right'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    closeButton={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme='light'
                    style={
                        {
                            minHeight: 'auto',
                            maxHeight: '80vh',
                        }
                    }
                />
            </ConfigProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;
