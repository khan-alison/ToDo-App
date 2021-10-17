import React from 'react';

interface ILayoutProps{
    onAddTask:(inputValue:string) => void
} 

class Layout extends React.Component<ILayoutProps> {
    state={
        inputValue: '',
    }

    handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!this.state.inputValue) {
          return;
        }
    
        this.props.onAddTask(this.state.inputValue);
        this.setState({ inputValue: '' });
      };

    onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        this.setState({ inputValue: value });
    }

    render() {
        return(
            <form className="main" onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.onTextChange} value={this.state.inputValue}/>
                <button type="submit">add</button>
            </form>
        )
    }
}

export default Layout;