import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchComparison } from '../actions/actions.js';


import Choice from './choice.js'

class CompareChoices extends Component {

  componentWillMount() {
    if(!this.props.comparison.choices.length){
      this.props.fetchComparison();
    }
  }

  renderChoices(){

    return this.props.comparison.choices.map(choice => {

      return (
        <Choice
          name={choice.name}
          id={choice.id}
          imageUrl={choice.imageUrl}
          key={choice.id} />
      );
    });
  }

  render () {
    return (
      <div id="gamecontainer"className="game-container">
        <h3 id= "prompt"className="game-info">{this.props.prompt.text ? this.props.prompt.text : 'Loading...'}</h3>
        <div id="choices"className="game-comparison">
          {this.renderChoices.bind(this)()}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {comparison: state.comparison, prompt: state.prompt};
}

export default connect(mapStateToProps, { fetchComparison })(CompareChoices);
