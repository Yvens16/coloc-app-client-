import React from 'react';

class Search extends React.Component{
  render () {
    return (
      <section>
      <input type="search" 
      placeholder="Search by arrondissement or housing"
      value={this.props.inputValue}
      onChange={this.props.onZipSearch}
      />
      </section>
    );
  }
}

export default Search;