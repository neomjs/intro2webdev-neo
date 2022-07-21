import MainContainer from './view/MainContainer.mjs';

export const onStart = () => Neo.app({
    appPath : 'apps/myform/',
    mainView: MainContainer,
    name    : 'MyForm'
});