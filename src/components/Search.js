import React from 'react';

class Search extends React.Component{
  render () {
    return (
      <section className="search">
      <div className="active-purple-3  mb-3">
  <input 
  type="search" 
  id="search-input"
      placeholder="Search by arrondissement or housing"
      value={this.props.inputValue}
      onChange={this.props.onZipSearch}
      className="form-control" 
      type="text" placeholder="Search" 
      aria-label="Search"
  className="form-control"/>
</div>
      </section>
    );
  }
}

export default Search;