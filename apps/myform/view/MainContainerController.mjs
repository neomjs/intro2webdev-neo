import Controller from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

class MainContainerController extends Controller {
    static getConfig() {
        return {
            /*
             * @member {String} className='MyForm.view.MainContainer'
             * @protected
             */
            className: 'MyForm.view.MainContainerController',
        }
    }

    onButtonClick(event) {
        console.log('You clicked '+ event.component.id);
    }    
}


Neo.applyClassConfig(MainContainerController);

export default MainContainerController;