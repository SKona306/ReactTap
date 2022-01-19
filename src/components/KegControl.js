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
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
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
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
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
      const { dispatch } = this.props;
      const { name, brand, alcpercent, price, pints } = this.props.mainKegList[id];
      const action = {
        type: 'INCREMENT_KEG',
        name: name,
        brand: brand,
        alcpercent: alcpercent,
        price: price,
        pints: pints,
        id: id
      }
      dispatch(action);
  }

  handleDecreasingKegStock = (id) => {
    const { dispatch } = this.props;
    const { name, brand, alcpercent, price, pints } = this.props.mainKegList[id];
    const action = {
      type:'DECREMENT_KEG',
      name: name,
      brand: brand,
      alcpercent: alcpercent,
      price: price,
      pints: pints,
      id: id
    }
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList}/>
      buttonText = "Return to Keg List";
    } else if(this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
        keg={this.props.mainKegList[this.state.selectedKeg.id]}
        onClickingDecrease={this.handleDecreasingKegStock}
        onClickingIncrease={this.handleIncreasingKegStock}
        onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleEditClick} />
      buttonText= "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
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
  mainKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainKegList: state.mainKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;