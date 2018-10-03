import React from 'react';

class Search extends React.Component{

  filterUpdate () {
    const val = this.myValue.value;
    this.props.filterUpdate(val)
  }

  render () {
    return (
      <section>
      <form> 
      <input type="number" 
      placeholder="Search by arrondissement like: 75008"
      ref={(value) => {this.myValue = value}} // callback function
      onChange = {this.filterUpdate.bind(this)}
      />
      </form>
      </section>
    );
  }
}

export default Search;