import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
  state = {
    subtitle: "Put your life in the hands of a computer.",
    options: []
  };

  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randNum])
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add option';
    } else if (this.state.options.indexOf(option) > -1 ) {
      return 'This option has already exists';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => ( option != optionToRemove ))
    }));
  }

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options && options.length > 0) {
        this.setState(() => ({options}));
      }
    } catch(e) {
      // Do nothing at all
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length != this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}
