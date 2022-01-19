import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage 
      }));
    } 
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, alcpercent, price, pints, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      alcpercent: alcpercent,
      price: price,
      pints: pints,
      id: id
    }
    dispatch(action)
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg =this.props.mainKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg: null });
  }

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, alcpercent, price, pints, id } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      alcpercent: alcpercent,
      price: price, 
      pints: pints,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleIncreasingKegStock = (id) => {
    if(this.state.mainKegList > 1) {
      const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
      selectedKeg.pints++;
      const newMainKegList = this.state.mainKegList.filter(keg => keg.id !==id).concat(selectedKeg);
      this.setState({mainKegList:newMainKegList});
    } else {
      const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
      selectedKeg.pints++;
      const newKegListArray = [];
      const changedKegArray = newKegListArray.concat(selectedKeg);
      this.setState({
        mainKegList: changedKegArray
      });
    }
  }

  handleDecreasingKegStock = (id) => {
    if(this.state.mainKegList > 1) {
      const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
      selectedKeg.pints--;
      const newMainKegList = this.state.mainKegList.filter(keg => keg.id !==id).concat(selectedKeg);
      this.setState({mainKegList:newMainKegList});
    } else {
      const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
      selectedKeg.pints--;
      const newKegListArray = [];
      const changedKegArray = newKegListArray.concat(selectedKeg);
      this.setState({
        mainKegList: changedKegArray
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList}/>
      buttonText = "Return to Keg List";
    } else if(this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
        keg={this.state.selectedKeg}
        onClickingDecrease={this.handleDecreasingKegStock}
        onClickingIncrease={this.handleIncreasingKegStock}
        onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleEditClick} />
      buttonText= "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.mainKegList} onKegSelection = {this.handleChangingSelectedKeg}/>
      buttonText = "Add Keg";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  mainKegList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    mainKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;