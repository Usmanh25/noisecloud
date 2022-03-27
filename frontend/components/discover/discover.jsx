import React from 'react'

class Discover extends React.Component {

    componentDidMount() {
        this.props.fetchTracks()
    }

    render() {
        return (
            <div>
                This is discover.jsx
            </div>
        )
    }


}

export default Discover
