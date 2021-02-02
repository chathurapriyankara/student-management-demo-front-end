import React from 'react';
export const FormContext = React.createContext();
export class FormContextProvider extends React.Component {
    state = {name:'',age:'',email:'',degree:'',form1:false};
    render() {
        return(
            <FormContext.Provider value={{state:this.state}}>
                {this.props.children}
            </FormContext.Provider>
        )
    }
}