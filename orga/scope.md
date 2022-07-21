✅ Setup an app (npx neo-app)  which includes the following:

- Create a view with
    - A FormContainer with:
        - ✅ field (with default value'foo')
        - ✅ button with text "press me"...
            - ✅ which `console.log`s using a `domListeners`
            - ✅ which `console.log`s using a `handler`
            - which appends to the logged text how often the button was pressed
                - _counter as custom property on the button object which is inside the form's `items: []`)_
                - ALTERNATIVELY _as a class field inside the controller itself_
            - create a `ViewModel`
    
    - handler (in Controller): opens a dialog (a window) with
    - container
    - data-binding to the value of the field
    - button
    - handler: closes the window and resets the value of the field


