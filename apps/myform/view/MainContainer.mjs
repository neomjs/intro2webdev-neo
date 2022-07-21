import Viewport from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';
import FormContainer from '../../../node_modules/neo.mjs/src/form/Container.mjs';
import TextField from '../../../node_modules/neo.mjs/src/form/field/Text.mjs';
import Button from '../../../node_modules/neo.mjs/src/button/Base.mjs';

import MainContainerController from './MainContainerController.mjs';

/**
 * @class MyForm.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {
        return {
            /*
             * @member {String} className='MyForm.view.MainContainer'
             * @protected
             */
            className: 'MyForm.view.MainContainer',
            /*
             * @member {Boolean} autoMount=true
             */
            autoMount: true,
            controller: MainContainerController,
            /*
             * @member {Object[]} items
             */
            items: [{
                module: FormContainer,

                layout: {
                    ntype: 'vbox'
                },
                items: [{
                    module: TextField,
                    labelText: 'Name',
                    labelPosition: 'inline',
                    value: 'Lucas',
                },{
                    module: Button,
                    text: 'Press me!',
                    iconCls: 'fa fa-home',
                    // This is a shortcut for `domListeners.click`
                    handler: 'onButtonClick',
                }]
            }],
            /*
             * @member {Object} layout={ntype:'fit'}
             */
            layout: { ntype: 'fit' }
        }
    }
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;