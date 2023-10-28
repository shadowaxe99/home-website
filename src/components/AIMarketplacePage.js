import React from 'react';
import '../styles/marketplace.css';

class AIMarketplacePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aiAgents: [],
            search: '',
            sort: 'name',
            filter: 'all'
        };
    }

    componentDidMount() {
        // Fetch AI agents from API
        fetch('/api/aiAgents')
            .then(response => response.json())
            .then(data => this.setState({ aiAgents: data }));
    }

    handleSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    handleSort = (event) => {
        this.setState({ sort: event.target.value });
    }

    handleFilter = (event) => {
        this.setState({ filter: event.target.value });
    }

    render() {
        let filteredAgents = this.state.aiAgents.filter(agent =>
            agent.name.toLowerCase().includes(this.state.search.toLowerCase())
        );

        if (this.state.filter !== 'all') {
            filteredAgents = filteredAgents.filter(agent => agent.category === this.state.filter);
        }

        if (this.state.sort === 'name') {
            filteredAgents.sort((a, b) => a.name.localeCompare(b.name));
        } else if (this.state.sort === 'price') {
            filteredAgents.sort((a, b) => a.price - b.price);
        }

        return (
            <div className="marketplace">
                <h1>AI Marketplace</h1>
                <input type="text" placeholder="Search" value={this.state.search} onChange={this.handleSearch} />
                <select value={this.state.sort} onChange={this.handleSort}>
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                </select>
                <select value={this.state.filter} onChange={this.handleFilter}>
                    <option value="all">Filter by Category</option>
                    {/* Add categories dynamically */}
                    {[...new Set(this.state.aiAgents.map(agent => agent.category))].map(category =>
                        <option key={category} value={category}>{category}</option>
                    )}
                </select>
                <div className="aiAgents">
                    {filteredAgents.map(agent =>
                        <div key={agent.id} className="aiAgent">
                            <h2>{agent.name}</h2>
                            <p>{agent.description}</p>
                            <p>Price: {agent.price}</p>
                            <p>Rating: {agent.rating}</p>
                            <button>Buy Now</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default AIMarketplacePage;