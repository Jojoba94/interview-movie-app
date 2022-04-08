import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className='col col-sm-4'>
                <input
                    className='form-control'
                    value={this.props.value}
                    onChange={(event) => this.props.setSearchValue(event.target.value)}
                    placeholder='Type to search...'
                ></input>
            </div>
        );
    }
}

export default SearchBox;
